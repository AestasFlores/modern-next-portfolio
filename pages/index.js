import Head from 'next/head'
import Layout from '../components/layout'
import favicon from '../public/favicon.ico'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kaguwo's Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href={favicon} />
      </Head>

      <Layout />
    </div>
  )
}
