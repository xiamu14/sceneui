import { memo } from 'react';
import { allDrafts } from 'contentlayer/generated';
import { Container } from './style';

import MdxComponent from '../mdx_component';

const Content = () => {
  const testDraft = allDrafts[0];
  return (
    <Container>
      <MdxComponent code={testDraft.body.code} />
    </Container>
  );
};

export default memo(Content);
