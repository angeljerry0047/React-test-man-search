import React, { useState, useLayoutEffect, useMemo } from 'react'
import { Row } from 'reactstrap';
import { useMedia } from 'react-use';
import axios from 'axios';
import { FlexLayout, Text } from '../../components/styles';
import { TableHeader, RowItem, Divider } from './styles';

const Result = ({ value }) => {
  const SORT_FIELD = {
    login: 'login',
    type: 'type'
  }
  const [data, setData] = useState([]);
  const [sortDirection, setSortDirection] = useState(true)
  const [sortedColumn, setSortedColumn] = useState(SORT_FIELD.login)
  const [pager, setPager] = useState({
    totalItems: 1,
    currentPage: 1,
    pageSize: 9,
    totalPages: 1,
    startPage: 1,
    endPage: 1,
    startIndex: 1,
    endIndex: 1,
    pages: []
  });
  const [total, setTotal] = useState();
  const isMobile = useMedia('(max-width: 800px)');

  useLayoutEffect(() => {
    axios.get("https://api.github.com/search/users?q=" + value + "%20in:login&page=1&per_page=9")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.items);
          setTotal(res.data.total_count);
          setPage(1);
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [value, setPage]);

  const filteredList = useMemo(() => {
    return (
      data &&
      data
        .sort((a, b) => {
          return a[sortedColumn] > b[sortedColumn] ? (sortDirection ? -1 : 1) * 1 : (sortDirection ? -1 : 1) * -1
        })
    )
  }, [data, sortDirection, sortedColumn])

  const getData = (currentPage) => {
    axios.get("https://api.github.com/search/users?q=" + value + "%20in:login&page=" + currentPage + "&per_page=9")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.items);
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const setPage = (page) => {
    if (page < 1 || page > pager.totalPages) {
      return;
    }
    let tempPager = getPager(total, page);
    setPager(tempPager);
    getData(tempPager.currentPage);
  }

  const getPager = (totalItems, currentPage, pageSize) => {
    currentPage = currentPage || 1;
    pageSize = pageSize || 9;
    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage, endPage;
    if (totalPages <= 4) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 3;
        endPage = currentPage + 1;
      }
    }

    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  const ListItem = ({ item }) => {
    return (
      <RowItem>
        <TableHeader width="30%">
          <img src={item.avatar_url} alt="avatar" style={{ height: "60px" }} />
        </TableHeader>
        <TableHeader width="40%">
          <Text>{item.login}</Text>
        </TableHeader>
        <TableHeader width="30%">
          <Text>{item.type}</Text>
        </TableHeader>
      </RowItem>
    )
  }

  return (
    <div className="container h-100 d-flex">
      <FlexLayout width="100%" overflow="auto hidden" justify={isMobile ? "flex-start" : "center"}>
        <FlexLayout direction="column" align="unset">
          <Row className="w-100">
            <FlexLayout margin="4rem 0 0 0" justify="flex-start">
              <TableHeader width="30%">
                <Text>AVATAR</Text>
              </TableHeader>
              <TableHeader width="40%" style={{ cursor: "pointer" }} onClick={() => {
                setSortedColumn(SORT_FIELD.login)
                setSortDirection(sortedColumn !== SORT_FIELD.login ? true : !sortDirection)
              }}>
                <Text>
                  LOGIN
                  {sortedColumn === SORT_FIELD.login ? (!sortDirection ? '↑' : '↓') : ''}  
                </Text>
              </TableHeader>
              <TableHeader width="30%" style={{ cursor: "pointer" }} onClick={() => {
                setSortedColumn(SORT_FIELD.type)
                setSortDirection(sortedColumn !== SORT_FIELD.type ? true : !sortDirection)
              }}>
                <Text>
                  TYPE
                  {sortedColumn === SORT_FIELD.type ? (!sortDirection ? '↑' : '↓') : ''}  
                </Text>
              </TableHeader>
            </FlexLayout>
            <Divider />
            {
              filteredList &&
                filteredList.map((item, index) => {
                  return (
                    <ListItem item={item} key={index} />
                  )
                })
            }
          </Row>
          <Row className="mt-3 mb-3">
            <FlexLayout>
              {
                pager &&
                <ul className="pagination">
                  <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => setPage(1)}>First</a>
                  </li>
                  <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => setPage(pager.currentPage - 1)}>Prev</a>
                  </li>
                  {pager.pages.map((page, index) =>
                    <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                      <a onClick={() => setPage(page)}>{page}</a>
                    </li>
                  )}
                  <li className={pager.currentPage === total ? 'disabled' : ''}>
                    <a onClick={() => setPage(pager.currentPage + 1)}>Next</a>
                  </li>
                  <li className={pager.currentPage === total ? 'disabled' : ''}>
                    <a onClick={() => setPage(pager.totalPages)}>Last</a>
                  </li>
                </ul>
              }
            </FlexLayout>
          </Row>
        </FlexLayout>
      </FlexLayout>
    </div>
  )
}

export default Result;
