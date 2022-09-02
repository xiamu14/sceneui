import { PropsWithChildren } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-left: var(--app-container-padding-x);
  background: white;
  overflow-x: hidden;
  position: relative;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

const AppContainer = ({ children }: PropsWithChildren<{}>) => {
  return <Container>{children}</Container>;
};

export default AppContainer;
