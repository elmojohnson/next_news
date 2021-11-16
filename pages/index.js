import Head from 'next/head'
import News from '../components/News'
import Weather from '../components/Weather'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next News</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Weather />
      <News />
    </div>
  )
}
