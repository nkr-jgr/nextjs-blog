import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Script from 'next/script';
import Date from '../components/date';
import React from 'react';
import Carousel from '../components/Carousel.js';

const items = [
  {
    title: 'Item 1',
    content: 'This is the content for Item 1.',
  },
  {
    title: 'Item 2',
    content: 'This is the content for Item 2.',
  },
  {
    title: 'Item 3',
    content: 'This is the content for Item 3.',
  },
  // Add more items as needed
];

const myQuotes = [
  {
    content: 'Part-time optimist, full-time admirer'
  },
  {
    content: 'A tech-innovation enthusiast in software engineering'
  }
]

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className='centered-container'>
          <Carousel items={myQuotes} is_navigation={false} delay={1500} />
        </div>
        <h5>Education</h5>
        <p className='about-me-text'>
          Initiating my educational journey at the age of 3,
          I consistently upheld my position as a top-performing student
          throughout my school days. I was regularly honored with tokens
          of recognition, particularly in the fields of mathematics and science.</p>
        <div className='carousel-container'>
          <Carousel items={items} is_navigation={true} delay={5000} />
        </div>
      </section>
      <section className={utilStyles.headingMd}>
        <h5>Work Experience</h5>
        <p className='about-me-text'>
          Became a part of a well-established corporation, working within substantial teams, but found that the responsibilities
          and job satisfaction fell short of my expectations. Subsequently, I opted for a career break lasting
          nearly a year. Ultimately, I decided to focus on further enhancing my skills in software engineering.
        </p>
        <p className='about-me-text'>
          In 2019, I joined a startup and quickly found myself drawn to the dynamic culture it offered. What truly excites
          me is the process of building software, assuming responsibility and ownership, and making significant contributions
          across the entire organization. Over the past four years, I have had the opportunity to make substantial
          contributions to products during their early stages, often working with smaller teams.
        </p>
        <div className='carousel-container'>
          <Carousel items={items} is_navigation={true} delay={5000} />
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      {/* <!-- Cloudflare Web Analytics --> */}
      <Script
        defer
        src='https://static.cloudflareinsights.com/beacon.min.js'
        data-cf-beacon='{"token": "4c331686d171474d88f2d28b85f170e2", "spa": true}'
      ></Script>
      {/* <!-- End Cloudflare Web Analytics --> */}
    </Layout>
  );
}
