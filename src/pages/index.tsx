import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>CSS Solar System</title>
        <meta name="description" content="A CSS project about the solar system" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
        <div className={styles.center}>
          <h1> Power to the Planets</h1>
        </div>
        <div className={styles.grid}>

          <div className={styles.card}>
            <div className={styles.center}>Planets</div>
          </div>
            
          <div className={styles.card}>
            <div className={styles.center}>Moons</div>
            </div>
            
            
          <div className={styles.card}>
            <div className={styles.center}>About</div>
          </div>
        </div>
      
      </main>
    </>
  )
}
