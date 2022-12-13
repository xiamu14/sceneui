import '@code-hike/mdx/dist/index.css';
import '@sceneui/animated-modal/dist/style.css';
import '@sceneui/badge/dist/style.css';
import '@sceneui/button/dist/style.css';
import '@sceneui/layout/dist/style.css';
import '@sceneui/popover/dist/style.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  return <Component {...pageProps} />;
}

export default MyApp;
