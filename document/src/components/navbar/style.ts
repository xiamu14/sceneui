import styled, { css, StyledComponent } from 'styled-components';

export const NavMainLayout = styled.div`
  width: 100%;
  height: var(--navbar-height);
  background: transparent;
  position: fixed;
  z-index: 400;
  top: 0;
  left: 0;
`;

export const NavContent: StyledComponent<
  'nav',
  any,
  { isDetached?: boolean },
  never
> = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.32);
  padding: 0 var(--app-container-padding-x);
  ${(props: { isDetached: boolean }) =>
    props.isDetached
      ? css`
          backdrop-filter: saturate(180%) blur(10px);
          box-shadow: 0px 5px 20px -5px rgba(2, 1, 1, 0.1);
        `
      : css`
          backdrop-filter: none;
          box-shadow: none;
        `}
`;

export const NavLink = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #11181c;
  cursor: pointer;
  font-size: 16px;
`;

export const NavLinkItem = styled.a`
  ${(props: { isActive?: boolean }) =>
    props.isActive &&
    css`
      color: var(--primary-color);
      font-weight: bold;
    `}
`;

export const SocialLink = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`;
