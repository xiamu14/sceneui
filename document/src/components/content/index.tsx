import { memo, useEffect, useState } from 'react';
import { allDrafts } from 'contentlayer/generated';
import { Container } from './style';

import MdxComponent from '../mdx_component';
import { useLocation } from 'react-use';
import { AnimatePresence, motion } from 'framer-motion';

const Content = () => {
  const location = useLocation();

  const [draftCode, setDraftCode] = useState<string>();

  useEffect(() => {
    console.log(
      '%c debug',
      'background: #69c0ff; color: white; padding: 4px',
      allDrafts
    );

    const data = allDrafts.find((it) => it.url === location.pathname);
    setDraftCode(data?.body.code);
  }, [location.pathname]);

  return (
    <Container>
      <AnimatePresence>
        {draftCode && (
          <motion.div
            key="modal"
            style={{ margin: '0 20px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MdxComponent code={draftCode} />
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default memo(Content);
