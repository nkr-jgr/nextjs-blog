import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Head from 'next/head';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const siteTitle = 'All posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Post({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="py-unit-10">
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className=''>
          {allPostsData.map(({ id, date, title }) => (
            <li className="" key={id}>
              <Link href={`/insights/${id}`} className={utilStyles.lightText}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}