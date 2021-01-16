import Head from 'next/head'
import Layout from '../components/layout'
import favi from '../public/favicon.ico'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kaguwo's Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href={favi} />
      </Head>
      
      <NextSeo
      openGraph={{
        type: 'website',
        url: 'https://www.kaguwo.js.org',
        title: 'Kaguwo\'s Portfolio',
        description: 'A neoterically designed portfolio, made with Next.JS and Tailwind CSS. Check out this website source on Github!',
        images: [
          {
            url: 'https://cdn.discordapp.com/attachments/790306779409678356/798156848237903882/Artboard2.png',
            width: 900,
            height: 550,
            alt: 'Kaguw\'o-ween Banner',
          },
        ],
      }}
    />
        
      <Layout />
    </div>
  )
}
