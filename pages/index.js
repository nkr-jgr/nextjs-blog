import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { Link } from "@nextui-org/react";
import Script from 'next/script';
import Date from '../components/date';
import React from 'react';
import Carousel from '../components/Carousel.js';
import AboutMeSection from '../components/AboutMeSection.jsx';

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

const educationalParagraphs = [
  'Initiating my educational journey at the age of 3, I consistently upheld my position as a top-performing student throughout my school days. I was regularly honored with tokens of recognition, particularly in the fields of mathematics and science.',
]

const careerParagraphs = [
  'Became a part of a well-established corporation, working within substantial teams, but found that the responsibilities and job satisfaction fell short of my expectations. Subsequently, I opted for a career break lasting nearly a year. Ultimately, I decided to focus on further enhancing my skills in software engineering.',
  'In 2019, I joined a startup and quickly found myself drawn to the dynamic culture it offered. What truly excites me is the process of building software, assuming responsibility and ownership, and making significant contributions across the entire organization. Over the past four years, I have had the opportunity to make substantial contributions to products during their early stages, often working with smaller teams.'
]

const myQuotes = [
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
        {/* <h6 style={{color:"red"}}>In development mode.. </h6> */}
        <ui className='font-light text-center text-medium text-indent list-none indent-5 py-unit-20'>
          <li className='py-unit-sm'>
            🌱 Personally, I believe in growth that knows no limits, embracing challenges that help me surpass my own expectations.
          </li>
        </ui>
        <AboutMeSection
          title='Academics'
          paragraphs={educationalParagraphs}
          items={items}
          endingNote='📚 In academia, I challenge myself to push beyond boundaries, constantly expanding my knowledge and honing my skills.'
        />
        <AboutMeSection
          title='Career'
          paragraphs={careerParagraphs}
          items={items}
          endingNote='💼 Professionally, I go the extra mile to ensure every project I undertake is a testament to my commitment to excellence.'
        />
        <p className='py-unit-10 font-extralight text-center'>🚀 "Do a little more each day than you think you possibly can." - Lowell Thomas 🚀 </p>
      </section>
    </Layout>
  );
}
