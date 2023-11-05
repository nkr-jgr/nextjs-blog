import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import {Link} from "@nextui-org/react";
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
        <h6 style={{color:"red"}}>In development mode.. </h6>
        <p className='py-unit-10 font-extralight text-center'>🚀 "Do a little more each day than you think you possibly can." - Lowell Thomas 🚀 </p>
        <ui className='font-light text-success-foreground text-medium text-indent list-none indent-5'>
<li className='py-unit-sm'> 💬 This quote has been my guiding light in all aspects of life – academics, personal growth, and my professional journey. Striving for excellence is not just a goal, it's a way of life for me.</li>
<li className='py-unit-sm'>
📚 In academia, I challenge myself to push beyond boundaries, constantly expanding my knowledge and honing my skills.
</li>
<li className='py-unit-sm'>
💼 Professionally, I go the extra mile to ensure every project I undertake is a testament to my commitment to excellence.
</li>
<li className='py-unit-sm'>
🌱 Personally, I believe in growth that knows no limits, embracing challenges that help me surpass my own expectations.
        </li>
        </ui>
        <h3 className='underline py-unit-lg'>Education</h3>
        <p>
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
        <p>
          Became a part of a well-established corporation, working within substantial teams, but found that the responsibilities
          and job satisfaction fell short of my expectations. Subsequently, I opted for a career break lasting
          nearly a year. Ultimately, I decided to focus on further enhancing my skills in software engineering.
        </p>
        <p>
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
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`} size='md' color="foreground">{title}</Link>
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
