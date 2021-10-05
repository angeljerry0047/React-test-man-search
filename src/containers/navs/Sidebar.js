// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { Nav, NavItem, Collapse } from 'reactstrap';
// import { NavLink, useLocation, Redirect } from 'react-router-dom';
// import { useMedia } from 'react-use';

// import DropDownMenu from './dropdown'
// import { FlexLayout, ChumHumText, Container } from '../../components/styles';
// import { SidebarContainer, SidebarWrapper } from './styles';

// import menuItems from '../../constants/menu';
// import logoImage from '../../assets/img/logo.png';

// // componentDidMount() {
// //   this.setState({ selectedPath: this.props.location.pathname === '/pages' ? '/pages/dashboard' : this.props.location.pathname });
// // }

// const Sidebar = () => {
//   const [selectedMenu, setSelectedMenu] = useState('');
//   const [selectedPath, setSelectedPath] = useState('');
//   const [hoverMenu, setHoverMenu] = useState('');
//   const [mobileRedirect, setMobileRedirect] = useState(false);
//   const [menuItem, setMenuItem] = useState(menuItems[0]);

//   const isMobile = useMedia('(max-width: 768px)');
//   const path = useLocation().pathname;

//   const handleSelectedMenu = (item) => {
//     setSelectedMenu(item.id);
//     setMenuItem(item);
//     setSelectedPath('');
//   }

//   const handleHoverMenu = (id) => {
//     setHoverMenu(id);
//   }

//   const handleLeaveMenu = () => {
//     setHoverMenu('');
//   }

//   const handleMenu = (item) => {
//     setMenuItem(item);
//     setSelectedMenu(item.id);
//     setSelectedPath('');
//     setMobileRedirect(true);
//   }

//   useEffect(() => {
//     setSelectedPath(path === '/pages' ? '/pages/dashboard' : path);
//   }, []);

//   return (
//     <>
//       {
//         mobileRedirect &&
//         <Redirect to={menuItem.to} />
//       }
//       <SidebarContainer>
//         {
//           !isMobile &&
//           <SidebarWrapper>
//             <NavLink
//               to="/"
//               className="logo-wrapper"
//             >
//               <img src={logoImage} />
//             </NavLink>
//             <Nav className="menu-wrapper">
//               {
//                 menuItems.map((item, index) => {
//                   return (
//                     <NavItem key={`__key-${index.toString()}`} className={selectedMenu === item.id || selectedPath === item.to ? "active" : ""}>
//                       <NavLink
//                         to={item.to}
//                         className={selectedMenu === item.id || selectedPath === item.to ? "menu-active" : ""}
//                         onClick={() =>
//                           handleSelectedMenu(item)
//                         }
//                         onMouseOver={() =>
//                           handleHoverMenu(item.id)
//                         }
//                         onMouseLeave={() =>
//                           handleLeaveMenu()
//                         }
//                       >
//                         <img src={selectedMenu === item.id || hoverMenu === item.id || selectedPath === item.to ? item.activeIcon : item.icon} />
//                         {item.label}
//                       </NavLink>
//                     </NavItem>
//                   )
//                 })
//               }
//             </Nav>
//             <FlexLayout width="100%" direction="column" position="absolute" bottom="30px">
//               <ChumHumText fontSize="1.2rem">
//                 $5,160,007,735.56
//               </ChumHumText>
//               <ChumHumText fontSize="1.2rem" color="#a1a1a1">
//                 Total Value Locked
//               </ChumHumText>
//               <ChumHumText fontSize="1.2rem" margin="20px 0 0 0">
//                 163,567,192
//               </ChumHumText>
//               <ChumHumText fontSize="1.2rem" color="#a1a1a1">
//                 Total VAI Minted
//               </ChumHumText>
//             </FlexLayout>
//           </SidebarWrapper>
//         }
//         {
//           isMobile &&
//           <Container>
//             <FlexLayout justify="space-between">
//               <img src={logoImage} alt='logo' />
//               <DropDownMenu list={menuItems} current={menuItem} setCurrent={handleMenu}>
//                 .
//             </DropDownMenu>
//             </FlexLayout>
//           </Container>
//         }
//       </SidebarContainer>
//     </>
//   )
// }
// export default Sidebar