import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  background: white;
  margin-top: var(--navbar-height);
  padding-left: var(--sidebar-width);
  padding-right: var(--sidebar-width);
  border-top: 1px solid white;
`;

export const EditLink = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  margin-top: 80px;
  font-size: 14px;
  color: var(--primary-color-light);
`;
