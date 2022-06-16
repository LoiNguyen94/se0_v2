import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import {
  wrapper,
  setDefaultToken,
  addListAddress,
  getListAddressDeliveryApi,
  fetchListAddressConfig,
  saveUserInfo,
} from '@monorepo/function-shares';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Storage } from '@capacitor/storage';
import { Loading } from '@monorepo/ui-shares';

function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component;
  const route = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkToken() {
      const token = await Storage.get({
        key: 'token',
      });
      const profile = await Storage.get({ key: 'profile' });
      if (token.value && profile.value) {
        setDefaultToken(token.value);
        dispatch(
          saveUserInfo({
            token: token.value,
            profile: JSON.parse(profile.value),
          })
        );
      }
      setLoading(false);
      fetchListAddressConfig();
    }
    checkToken();
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
    }
  }, [loading]);
  return (
    <>
    <head>
    <meta name="title" content="MacBook Pro M1 2020 13 inch | Trả góp 0%, ưu đãi hấp dẫn | Fptshop.com.vn"/>
    <meta name="description" content="Mua máy tính MacBook Pro M1 2020 13 inch 256GB chính hãng tại FPTShop với loạt ưu đãi hấp dẫn: Trả góp 0%, giảm giá lớn khi mua online, nhiều quà tặng giá trị, bảo hành chuẩn Apple trên toàn quốc"/>
    <meta name="keywords" content="macbook pro m1, mua macbook pro m1, giá macbook pro m1, macbook pro 2020, macbook pro m1 2020"/>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
    <meta name="copyright" content="Công ty Cổ phần Bán lẻ Kỹ thuật số FPT"/>
    <meta name="author" content="Công ty Cổ phần Bán lẻ Kỹ thuật số FPT"/>
    <meta httpEquiv="audience" content="General"/>
    <meta name="resource-type" content="Document"/>
    <meta name="distribution" content="Global"/>
            <meta content="INDEX,FOLLOW" name="robots"/>
    <meta name="revisit-after" content="1 days"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="GENERATOR" content="Công ty Cổ phần Bán lẻ Kỹ thuật số FPT"/>
    <meta property="og:site_name" content="FPTShop.com.vn"/>
    <meta property="og:type" content="website"/>
    <meta property="og:locale" content="vi_VN"/>
    <meta property="og:title" content="MacBook Pro M1 2020 13 inch | Trả góp 0%, ưu đãi hấp dẫn | Fptshop.com.vn"/>
    <meta property="og:description" content="Mua máy tính MacBook Pro M1 2020 13 inch 256GB chính hãng tại FPTShop với loạt ưu đãi hấp dẫn: Trả góp 0%, giảm giá lớn khi mua online, nhiều quà tặng giá trị, bảo hành chuẩn Apple trên toàn quốc"/>
    <meta property="og:url" content="https://fptshop.com.vn/may-tinh-xach-tay/macbook-pro-13-2020-touch-bar-m1-256gb"/>
        <meta property="og:image" content="https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/11/13/637408530311831907_mbp-2020-m1-gray-dd-1.png"/>
    <meta itemProp="name" content="MacBook Pro M1 2020 13 inch | Trả góp 0%, ưu đãi hấp dẫn | Fptshop.com.vn"/>
    <meta itemProp="description" content="Mua máy tính MacBook Pro M1 2020 13 inch 256GB chính hãng tại FPTShop với loạt ưu đãi hấp dẫn: Trả góp 0%, giảm giá lớn khi mua online, nhiều quà tặng giá trị, bảo hành chuẩn Apple trên toàn quốc"/>
        <meta itemProp="image" content="https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/11/13/637408530311831907_mbp-2020-m1-gray-dd-1.png"/>
    <meta property="fb:app_id" content="948243871965133"/>
    <meta name="referrer" content="no-referrer-when-downgrade"/>
    </head>
      <main className="app">
        {!loading ? <AnyComponent {...pageProps} /> : <Loading />}
        <ToastContainer
          hideProgressBar
          theme="colored"
          position="top-center"
          autoClose={3000}
          closeOnClick
        />
      </main>
    </>
  );
}

// export default App;
export default wrapper.withRedux(App);
