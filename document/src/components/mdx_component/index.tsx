import Button from '@sceneui/button';
import Space from '@sceneui/space';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { ArrowLeft } from 'react-feather';
const MdxComponent = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);
  return (
    // @ts-ignore
    <Component
      components={{
        Button,
        ArrowLeft,
        Space,
      }}
    />
  );
};

export default MdxComponent;
