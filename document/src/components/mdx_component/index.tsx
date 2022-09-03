import { useMDXComponent } from 'next-contentlayer/hooks';
import { Button } from '@sceneui/button';
import Space from '@sceneui/space';
import { Check } from 'react-feather';
const MdxComponent = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);
  return (
    // @ts-ignore
    <Component
      components={{
        Button,
        Check,
        Space,
      }}
    />
  );
};

export default MdxComponent;
