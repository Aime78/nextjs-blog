import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData();
  const res = await fetch(`https://dark-pig-sock.cyclic.app/listings?id=${1}`);
  const listing = await res.json();
  // const listing = JSON.parse(JSON.stringify(data));
  return {
    props: {
      listing,
    },
  };
}

export default function Home({ listing }) {
  console.log(listing);
  return (
    <h1>Hello world {listing[0].id}</h1>
    // <Layout home>
    //   <h1>Hello Amigos.</h1>
    //   <section className={utilStyles.headingMd}>
    //     <h1>{listing[0].id}</h1>
    //     <p>
    //       Hello, I'm Calvin. I'm a software engineer.You can contact me on{" "}
    //       <Link href="https://twitter.com">twitter.</Link>
    //     </p>
    //     <p>
    //       (This is a sample website - you’ll be building a site like this on{" "}
    //       <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
    //     </p>
    //     <div></div>
    //   </section>

    //   <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    //     <h2 className={utilStyles.headingLg}>Blog</h2>
    //     <ul className={utilStyles.list}>
    //       {allPostsData.map(({ id, date, title }) => (
    //         <li className={utilStyles.listItem} key={id}>
    //           <Link href={`/posts/${id}`}>{title}</Link>
    //           <br />
    //           <small className={utilStyles.lightText}>
    //             <Date dateString={date} />
    //           </small>
    //         </li>
    //       ))}
    //     </ul>
    //   </section>
    // </Layout>
  );
}
