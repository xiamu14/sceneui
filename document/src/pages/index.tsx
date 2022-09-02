// pages/index.js

import Head from 'next/head';

import AppContainer from '../components/app_container';
import Content from '../components/content';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Scene UI</title>
      </Head>
      <AppContainer>
        <Navbar />
        <Sidebar />
        <Content />
      </AppContainer>
    </div>
  );
}
