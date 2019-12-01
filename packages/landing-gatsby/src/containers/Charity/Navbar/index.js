import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';

import logoImage from 'common/src/assets/image/charity/logo.svg';

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Link className="logo" to="/charity">
          <Image src={logoImage} alt="Charity React Next Landing" />
        </Link>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
