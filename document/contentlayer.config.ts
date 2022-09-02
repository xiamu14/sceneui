// contentlayer.config.js

import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import { remarkCodeHike } from '@code-hike/mdx';
import theme from './src/theme/github-light';

export const ComponentDoc = defineDocumentType(() => ({
  name: 'draft',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/components/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/data',
  documentTypes: [ComponentDoc],
  mdx: {
    remarkPlugins: [
      [remarkCodeHike, { theme, lineNumbers: false, showCopyButton: true }],
    ],
  },
});
