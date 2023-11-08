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

const name = 'Naresh Pahariya';
export const siteTitle = 'Naresh Pahariya | Home';

const menuItems = [
    "Dispatches",
    "Insights"
];

export default function Layout({ children, home }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
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
                                src="/images/profile.jpeg"
                            />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className='hidden sm:flex gap-unit-lg' justify='end'>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Dispatches
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Insights
                        </Link>
                    </NavbarItem>
                    <ThemeSwitcher />
                </NavbarContent>
                <NavbarContent className='full-flex sm:hidden' justify='end'>
                    <ThemeSwitcher />
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
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
                            src="/images/profile.jpeg"
                            className={utilStyles.borderCircle}
                            height={143}
                            width={143}
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
                                height={143}
                                width={143}
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
            <>
                <hr />
                <footer className='text-center py-unit-md' justify='center'>
                    Made with 💖 in India
                </footer>
            </>
        </div >
    );
}