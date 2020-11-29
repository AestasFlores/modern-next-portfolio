import Head from 'next/head'
import Layout from '../components/layout'
import favicon from '../public/favicon.ico'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kaguwo's Portfolio</title>
        <link rel="icon" href={favicon} />
      </Head>

      <Layout />
    </div>
  )
}