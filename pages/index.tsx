import Head from 'next/head';
import PageLayout from './PageLayout';
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <PageLayout/>
      <SpeedInsights/>
    </>
  );
}
