import React from 'react';

import { Link } from 'react-router-dom';

import { Container, NavList, Banner } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Banner>
        <h1>JubilApp</h1>
      </Banner>
      <NavList>
        <Link to="/">Matrículas</Link>
        <Link to="/cursos">Cursos</Link>
        <Link to="/alunos">Alunos</Link>
      </NavList>
    </Container>
  );
};

export default Navbar;
