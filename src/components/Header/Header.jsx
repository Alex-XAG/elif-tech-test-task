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

export const Header = ({ optionsNav }) => {
  const toggle = evt => {
    evt.preventDefault();
    evt.target.classList.add('current');
    setTimeout(() => {
      evt.target.classList.remove('current');
    }, 500);
  };
  return (
    <header className="header">
      <HeaderContainer>
        <Logo href="./index.html">
          Delivery<HeadreLogo>Service</HeadreLogo>
        </Logo>
        <SiteNav>
          <SiteNavList>
            {optionsNav.map(option => {
              return (
                <SiteNavItem key={option}>
                  <SiteNavLink href="./index.html" onClick={toggle}>
                    {option}
                  </SiteNavLink>
                </SiteNavItem>
              );
            })}
          </SiteNavList>
        </SiteNav>
      </HeaderContainer>
    </header>
  );
};
