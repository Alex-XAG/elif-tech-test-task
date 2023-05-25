import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  padding-right: 0;
  padding-left: 0;
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(236, 236, 236, 1);
`;

export const Logo = styled.a`
  display: block;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 15px;

  font-size: 26px;
  line-height: 1.19;

  color: rgb(172, 170, 170);
  text-decoration: none;
`;
export const HeadreLogo = styled.span`
  color: #000000;
  text-decoration: none;
`;

export const SiteNav = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  margin-left: 94px;
`;

export const SiteNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const SiteNavItem = styled.li`
  position: relative;
`;

export const SiteNavLink = styled.a`
  display: block;
  padding-top: 24px;
  padding-bottom: 24px;

  color: #212121;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-decoration: none;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    outline: none;
    color: rgb(172, 170, 170);
  }
  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 2px;
    display: inline-block;
    content: '';
    width: 100%;
    height: 4px;
    background-color: rgb(172, 170, 170);

    transform: scaleX(0);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
  }

  &.current {
    color: rgb(172, 170, 170);

    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;

    &::after {
      position: absolute;
      left: 0;
      bottom: 0;
      border-radius: 2px;
      display: inline-block;
      content: '';
      width: 100%;
      height: 4px;
      background-color: rgb(172, 170, 170);
      transform: scaleX(1);
    }
  }
`;
