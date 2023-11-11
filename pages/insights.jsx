import Layout from '../components/layout';
import { getAllPostIds, getPostData, getSortedPostsData } from '../lib/posts';
import Head from 'next/head';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const siteTitle = 'All posts';

export default function Post({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="py-unit-10">
        {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
        <ul className=''>
          {allPostsData.map(({ id, date, title }) => (
            <li className="text-left foreground" key={id}>
              <Link href={`/insights/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   // const util = require('../lib/posts');
//   // util.
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps({ params }) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}