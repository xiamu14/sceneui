import { Container } from './style';

const Exhibition = (props: { code: JSX.Element; preview: JSX.Element }) => {
  const { code, preview } = props;
  return (
    <Container>
      <div>{code}</div>
      <div>{preview}</div>
    </Container>
  );
};

export default Exhibition;
