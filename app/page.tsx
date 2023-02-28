import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import BsFillPersonFill from 'react-icons'
import profile from './assets/profile2.jpg'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-x-2 gap-y-10 w-3/4'>
        <div className='rounded-lg '>
          <Image src={profile} alt="..." width="200" className='float-right mr-[2rem] rounded-full' />
        </div>
        <div className='rounded-lg col-span-2'>
          <h1 className='my-[1rem] text-3xl font-bold'>Uxair Abbas</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nam minima doloremque, doloribus tempore modi cumque commodi suscipit perspiciatis, consequuntur ut nemo laborum asperiores unde temporibus molestiae dicta id et!</p>
          <button className="bg-gray-800 mt-[1rem] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Portfolio
          </button>
        </div>
        <div className='rounded-lg col-span-3'>
          <div className={styles.description}>
            <p>
              Get started by editing&nbsp;
              <code className={styles.code}>app/page.tsx</code>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
