import React from 'react';
import {
  HeaderContainer,
  Logo,
  SiteNav,
  HeadreLogo,
  SiteNavList,
  SiteNavItem,
  SiteNavLink,
} from './Header.styled';

export const Header = ({ optionsNav, handleActivePage }) => {
  return (
    <header className="header">
      <HeaderContainer>
        <Logo href="./">
          Delivery<HeadreLogo>Service</HeadreLogo>
        </Logo>
        <SiteNav>
          <SiteNavList>
            {optionsNav.map(option => {
              return (
                <SiteNavItem key={option}>
                  <SiteNavLink onClick={handleActivePage}>{option}</SiteNavLink>
                </SiteNavItem>
              );
            })}
          </SiteNavList>
        </SiteNav>
      </HeaderContainer>
    </header>
  );
};
