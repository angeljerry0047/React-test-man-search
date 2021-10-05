import React, { useState } from 'react'
import { Input, Button, SearchWrapper } from './styles';

const Search = ({history}) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    history.push("/pages/result/" + value);
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter')
      handleSubmit();
  }

  return (
    <div className="container h-100 d-flex">
      <SearchWrapper>
        <Input type="text" placeholder="Login" value={value} onChange={(e) => {setValue(e.target.value)}} onKeyDown={handleEnter} />
        <Button className="btn-primary" onClick={handleSubmit}>Submit</Button>
      </SearchWrapper>
    </div>
  )
}

export default Search;
