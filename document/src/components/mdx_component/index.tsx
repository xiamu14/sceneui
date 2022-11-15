import Button from '@sceneui/button';
import Space from '@sceneui/space';
import Center from '@sceneui/center';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { ArrowLeft, ChevronLeft, Home } from 'react-feather';
const MdxComponent = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);
  return (
    // @ts-ignore
    <Component
      components={{
        Button,
        ArrowLeft,
        Space,
        ChevronLeft,
        Home,
        Center,
      }}
    />
  );
};

export default MdxComponent;
