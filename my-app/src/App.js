import React, { Component } from 'react';
import styled from 'styled-components';
import Loop from 'lloop';

// Import icons
import iconAdd from './add.svg'
import iconSearch from './search.svg'

/* CSS---------------------------------------------------------------------*/
// Create a <Icon> react component that renders a <object> for SVG icons
const Icon = styled.object`
  width: 20px;
  height: 20px;
`;

// Create a <Wrapper> react component that renders a <section>
const Wrapper = styled.section`
  font-family: "Proxima Nova", sans-serif;
  color: #3E4A59;
  font-size: 15px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(202, 213, 220, 0.1);
  border-top: 1px solid #E8EFF3;
  padding: 15px 30px;
  display: flex;
  align-items: center;
`;

//Create a <UserWrap> react component that renders a <div>
const UserWrap = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    background: #F9FAFB;
    color: #059DDF;
  }
`;

//Create a <Popover> react component that renders a <div>
const Popover = styled.div`
  position: absolute;
  bottom: 50px;
  left: 10px;
  background: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0 2px 4px #CAD5DC;
  border: 1px solid #E8EFF3;
`;

//Create a <UserList> react component that renders a <div>
const UserList = styled.div `
  padding: 10px 20px;
  max-height: 150px;
  overflow: scroll;

  > ${UserWrap} {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0px;
    }
  };
`;

// Create a <Avatar> react component that renders a <img>
const Avatar = styled.img`
  border-radius: 100%;
  width: 25px;
  height: 25px;
`;

// Create a <Name> react component that renders an <h1>
const Name = styled.div`
  margin: 0 8px;
  white-space: nowrap;
  ${props => props.active && 'font-weight: 600;'}
  }
`;

// Create a <SearchField> react component that renders a <input> for the search bar
const SearchField = styled.input`
  height: 20px;
  border: 0;
  font-family: "Proxima Nova", sans-serif;
  color: #3E4A59;
  font-size: 15px;
  margin-left: 8px;

  &:focus {
    outline: 0;
  }
`;

// Create a <Search> react component that renders a <div>
const Search = styled.div`
  border-top: 1px solid #E8EFF3;
  padding: 10px 20px;

  > ${Icon} {
    position: relative;
    top: 5px;
    margin-left: 4px;
  }
`;
/*-------------------------------------------------------------------------*/

/* Arrays------------------------------------------------------------------*/
const users = [
  { id: 1, name: 'Jessica Jones', imgUrl: 'https://randomuser.me/api/portraits/women/76.jpg' },
  { id: 2, name: 'Luke Cage', imgUrl: 'https://randomuser.me/api/portraits/men/53.jpg' },
  { id: 3, name: 'Matthew Murdock', imgUrl: 'https://randomuser.me/api/portraits/men/46.jpg' },
  { id: 4, name: 'Elektra Natchios', imgUrl: 'https://randomuser.me/api/portraits/women/19.jpg' },
  { id: 5, name: 'Trish Walker', imgUrl: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { id: 6, name: 'Franklin Nelson', imgUrl: 'https://randomuser.me/api/portraits/men/79.jpg' },
  { id: 7, name: 'Claire Temple', imgUrl: 'https://randomuser.me/api/portraits/women/89.jpg' },
  { id: 8, name: 'Daniel Rand', imgUrl: 'https://randomuser.me/api/portraits/men/62.jpg' },
  { id: 9, name: 'Colleen Wing', imgUrl: 'https://randomuser.me/api/portraits/women/17.jpg' },
];
/*-------------------------------------------------------------------------*/

/* Functions---------------------------------------------------------------*/
const UserBlock = ({ name, imgUrl }) => (
  <UserWrap>
    <Avatar src={imgUrl} alt="user avatar"></Avatar>
    <Name>{name}</Name>
  </UserWrap>
);
/*-------------------------------------------------------------------------*/

/* Render------------------------------------------------------------------*/
class App extends Component {
  constructor() {
    super();

    this.state = {
      filter: ""
    };

    this.onFilterUpdate = event => {
      this.setState({ filter: event.target.value });
    };
  }

  filteredUsers() {
    return users.filter(user => user.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0);
  }

  render() {
    return (
      <Wrapper>

        <Popover>
          <UserList>
            <Loop items={this.filteredUsers()} primaryKey="id">
              <UserBlock />
            </Loop>
          </UserList>
          <Search>
            <Icon type="image/svg+xml" data={iconSearch}></Icon>
            <SearchField placeholder="Search People" onChange={this.onFilterUpdate} ></SearchField>
          </Search>
        </Popover>

        <UserBlock active imgUrl="https://randomuser.me/api/portraits/women/9.jpg" name="Erica Schoonmaker" />
        <Icon type="image/svg+xml" data={iconAdd}></Icon>

      </Wrapper>
    );
  }
}
/*-------------------------------------------------------------------------*/

export default App;
