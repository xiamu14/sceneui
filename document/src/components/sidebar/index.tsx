import { memo } from 'react';
import { Container, H1 } from './style';

const Sidebar = () => {
  return (
    <Container>
      <H1>Documentation</H1>
    </Container>
  );
};

export default memo(Sidebar);
