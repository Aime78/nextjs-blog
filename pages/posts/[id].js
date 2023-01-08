import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Head from "next/head";

import utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  // const paths = getAllPostIds();
  const res = await fetch(`https://dark-pig-sock.cyclic.app/listings`);
  const data = await res.json();
  const paths = data.map((listing) => {
    return {
      params: {
        id: listing.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // const postData = await getPostData(params.id);
  const id = params.id;
  const res = await fetch(`https://dark-pig-sock.cyclic.app/listings?id=${id}`);
  const data = await res.json();
  const listingData = JSON.parse(JSON.stringify(data));
  return {
    props: {
      listingData,
    },
  };
}

export default function Post() {
  return (
    <h1>Amigos ID</h1>

    // <Layout>

    //   <article>
    //     <h1 className={utilStyles.headingXl}>{listingData[0].name}</h1>

    //     <div dangerouslySetInnerHTML={{ __html: listingData[0].description }} />
    //   </article>
    // </Layout>
  );
}
