import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import { ThemeSwitcher } from './ThemeSwitcher';

const name = 'Naresh Pahariya';
export const siteTitle = 'Naresh Pahariya | Home';

export default function Layout({children, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/personal.jpg" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
            {home ? (
                <div className='sticky-me'>
                <Image
                    priority
                    src="/images/profile.jpeg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt=""
                />
                <h2 className={utilStyles.headingXl}>{name}</h2>
                </div>
            ) : (
                <>
                <Link href="/">
                    <Image
                    priority
                    src="/images/profile.jpeg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt=""
                    />
                </Link>
                <h2 className={utilStyles.headingLg}>
                    <Link href="/" className={utilStyles.colorInherit}>
                    {name}
                    </Link>
                </h2>
                </>
            )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                <Link href="/">← Back to home</Link>
                </div>
            )}
            <ThemeSwitcher />
        </div>
    );
}