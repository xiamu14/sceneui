// pages/index.js

import NiceModal from '@ebay/nice-modal-react';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import AppContainer from '../components/app_container';
import Content from '../components/content';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

export default function Home() {
  return (
    <RecoilRoot>
      <Head>
        <title>Scene UI</title>
      </Head>
      <NiceModal.Provider>
        <AppContainer>
          <Navbar />
          <Sidebar />
          <Content />
        </AppContainer>
      </NiceModal.Provider>
    </RecoilRoot>
  );
}
