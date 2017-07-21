import React from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';


const Header = () => {

  return (
    <Menu>
      <Menu.Item
        as={Link} to="/"
        name="inicio"
        content="Inicio"
      />
      <Menu.Item
        as={Link} to="/about"
        name="about"
        content="Descripción del Proyecto"
      />
    </Menu>

  );
};

export default Header;
