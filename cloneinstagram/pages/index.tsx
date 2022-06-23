import type { NextPage } from 'next';
import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="https://links.papareact.com/jjm" />
      </Head>

      <Header />

      <Feed />

      {/* Modal */}
    </div>
  );
};

export default Home;
