import Badge from '@sceneui/badge';
import Button from '@sceneui/button';
import { Center, Space } from '@sceneui/layout';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { ArrowLeft, ChevronLeft, Home } from 'react-feather';
import ExampleModal from '../modal';
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
        Badge,
        ExampleModal,
      }}
    />
  );
};

export default MdxComponent;
