import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import GoogleAuth from './GoogleAuth';

function Header(): JSX.Element {
  return (
    <div>
      <Menu pointing>
          <Menu.Item>
            <Link to='/'>Streams</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/streams/new'>Create</Link>
          </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Link to='/'>Log In</Link>  
          </Menu.Item>
          <Menu.Item>
            <GoogleAuth />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  )
}

export default Header;