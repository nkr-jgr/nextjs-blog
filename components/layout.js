import Head from 'next/head';
import Image from 'next/image';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import { ThemeSwitcher } from './ThemeSwitcher';
import { MoonIcon } from '../icons/MoonIcon';
import React from 'react';
import { useState } from 'react';
import { Navbar, NavbarContent, NavbarMenuToggle, NavbarBrand, NavbarMenu, NavbarMenuItem, NavbarItem } from '@nextui-org/react';
import { Avatar, Link } from '@nextui-org/react';
import {
    LinkedinIcon,
    TwitterIcon,
    EmailIcon,
    FacebookIcon,
    InstagramIcon
} from 'next-share';

const name = 'Naresh Pahariya';
export const siteTitle = 'Naresh Pahariya | Home';

const imageStyle = {
    borderRadius: '50%',
    border: '1px dashed',
    'box-shadow': "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"
}


export default function Layout({ children, home }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Dispatches",
        "Insights"
    ];

    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/personal.jpg" />
                <meta
                    name="description"
                    content="Naresh Pahariya"
                />
                <meta
                    property="og:image"
                    content={`https://nareshpahariya.me/images/profilepic.jpg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <Link href='#'>
                            <Avatar
                                isBordered
                                src="/images/profilepic.jpg"
                            />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className='hidden sm:flex gap-unit-lg' justify='end'>
                    <NavbarItem>
                        <Link color="foreground" href="dispatches">
                            Dispatches
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="insights">
                            Insights
                        </Link>
                    </NavbarItem>
                    <ThemeSwitcher />
                </NavbarContent>
                <NavbarContent className='full-flex sm:hidden' justify='end'>
                    <ThemeSwitcher />
                </NavbarContent>
                <NavbarMenu className='py-unit-10'>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    "foreground" // === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href={`${item.toLowerCase()}`}
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
            <header className={styles.header}>
                {home ? (
                    <div className='sticky-me'>
                        <Image
                            priority
                            src="/images/profilepic.jpg"
                            className={utilStyles.borderCircle}
                            height={143}
                            width={143}
                            alt=""
                            style={imageStyle}
                        />
                        <div className='text-center' justify='center'>
                            <h2 className={utilStyles.headingXl}>{name}</h2>
                        </div>
                    </div>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/profilepic.jpg"
                                className={utilStyles.borderCircle}
                                height={143}
                                width={143}
                                alt=""
                                style={imageStyle}
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header >
            <main>{children}</main>
            {
                !home && (
                    <div className={styles.backToHome}>
                        <Link href="/">← Back to home</Link>
                    </div>
                )
            }
            <div className='text-center'>
                <span className='px-unit-xs'>
                    <Link
                        rel="noopener noreferrer"
                        target="_blank"
                        href={'https://twitter.com/nkr_jgr'}>
                        <TwitterIcon size={32} round />
                    </Link>
                    {/* </TwitterShareButton> */}
                </span>
                <span className='px-unit-xs'>
                    <Link
                        rel="noopener noreferrer"
                        target="_blank"
                        href={'https://linkedin.com/in/nareshpahariya'}>
                        <LinkedinIcon size={32} round />
                    </Link>
                </span>
                <span className='px-unit-xs'>
                    <Link
                        rel="noopener noreferrer"
                        target="_blank"
                        href={'mailto:mail@nareshpahariya.me'}>
                        <EmailIcon size={32} round />
                    </Link>
                </span>
                <span className='px-unit-xs'>
                    <Link
                        rel="noopener noreferrer"
                        target='_blank'
                        href={'http://facebook.com/nkr.jgr'}
                    >
                        <FacebookIcon size={32} round />
                    </Link>
                </span>
                <span className='px-unit-xs'>
                    <Link
                        rel="noopener noreferrer"
                        target='_blank'
                        href={'http://instagram.com/nkr.jgr'}
                    >
                        <InstagramIcon size={32} round />
                    </Link>
                </span>
            </div>
            <>
                <hr />
                <footer className='text-center py-unit-md' justify='center'>
                    Made with 💖 in India
                </footer>
            </>
        </div >
    );
}