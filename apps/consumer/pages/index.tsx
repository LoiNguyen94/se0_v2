import { Splash } from '@monorepo/ui-shares';
import Home from './home';
import Head from 'next/head';

export function Index() {
  return (
    <div>
      <Head>
        <title>{'title'}</title>
        <meta
          name="viewport"
          content="target-densitydpi=device-dpi, initial-scale=1.0, user-scalable=no"
        />
        <meta property="og:title" content={'Tất cả sản phẩm'} key="title" />
        <meta property="og:description" content={'Mua mọi thứ'} />
        <meta
          property="og:image"
          content={'https://i.cartoonnetwork.com/prismo/apps/icon/lq5Ca_Fs.png'}
        />
      </Head>
      <Home />
    </div>
  );
}

export default Index;
