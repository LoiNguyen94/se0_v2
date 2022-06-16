import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="title"
          content="MacBook Pro M1 2020 13 inch | Trả góp 0%, ưu đãi hấp dẫn | Fptshop.com.vn"
        />
        <meta
          name="description"
          content="Mua máy tính MacBook Pro M1 2020 13 inch 256GB chính hãng tại FPTShop với loạt ưu đãi hấp dẫn: Trả góp 0%, giảm giá lớn khi mua online, nhiều quà tặng giá trị, bảo hành chuẩn Apple trên toàn quốc"
        />
        <meta
          name="keywords"
          content="macbook pro m1, mua macbook pro m1, giá macbook pro m1, macbook pro 2020, macbook pro m1 2020"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          name="copyright"
          content="Công ty Cổ phần Bán lẻ Kỹ thuật số FPT"
        />
        <meta name="author" content="Công ty Cổ phần Bán lẻ Kỹ thuật số FPT" />
        <meta httpEquiv="audience" content="General" />
        <meta name="resource-type" content="Document" />
        <meta name="distribution" content="Global" />
        <meta content="INDEX,FOLLOW" name="robots" />
        <meta name="revisit-after" content="1 days" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="GENERATOR"
          content="Công ty Cổ phần Bán lẻ Kỹ thuật số FPT"
        />
        <meta property="og:site_name" content="FPTShop.com.vn" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
        <meta
          property="og:title"
          content="MacBook Pro M1 2020 13 inch | Trả góp 0%, ưu đãi hấp dẫn | Fptshop.com.vn"
        />
        <meta
          property="og:description"
          content="Mua máy tính MacBook Pro M1 2020 13 inch 256GB chính hãng tại FPTShop với loạt ưu đãi hấp dẫn: Trả góp 0%, giảm giá lớn khi mua online, nhiều quà tặng giá trị, bảo hành chuẩn Apple trên toàn quốc"
        />
        <meta
          property="og:url"
          content="https://fptshop.com.vn/may-tinh-xach-tay/macbook-pro-13-2020-touch-bar-m1-256gb"
        />
        <meta
          property="og:image"
          content="https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/11/13/637408530311831907_mbp-2020-m1-gray-dd-1.png"
        />
        {/* @ts-ignore */}
        <meta
          itemProp="name"
          content="MacBook Pro M1 2020 13 inch | Trả góp 0%, ưu đãi hấp dẫn | Fptshop.com.vn"
        />
        {/* @ts-ignore */}
        <meta
          itemProp="description"
          content="Mua máy tính MacBook Pro M1 2020 13 inch 256GB chính hãng tại FPTShop với loạt ưu đãi hấp dẫn: Trả góp 0%, giảm giá lớn khi mua online, nhiều quà tặng giá trị, bảo hành chuẩn Apple trên toàn quốc"
        />
        {/* @ts-ignore */}
        <meta
          itemProp="image"
          content="https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/11/13/637408530311831907_mbp-2020-m1-gray-dd-1.png"
        />
        <meta property="fb:app_id" content="948243871965133" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
