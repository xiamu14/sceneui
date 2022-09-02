import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: var(--navbar-height);
  left: var(--app-container-padding-x);
  width: var(--sidebar-width);
  height: 400px;
  background: white;
  margin-top: 14px;
  color: #666;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

export const H1 = styled.h1`
  font-size: 24px;
  color: #555;
`;

export const MenuName = styled.h3`
  font-size: 18px;
  font-weight: normal;
  color: #7e868c;
  ${(props: { isActive?: boolean }) =>
    props.isActive &&
    css`
      color: #11181c;
    `}
`;

export const MenuItem = styled.li`
  height: 40px;
  color: #7e868c;
  ${(props: { isActive?: boolean }) =>
    props.isActive &&
    css`
      color: #11181c;
    `}
`;

export const MenuIconBoard = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9697f6;
`;
