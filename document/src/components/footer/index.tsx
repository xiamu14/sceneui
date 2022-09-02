import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`;

const Footer = () => {
  return (
    <Container>
      <p>Deployed on Vercel</p>
    </Container>
  );
};

export default Footer;
