import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Head from "next/head";

import utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  // const paths = getAllPostIds();
  const apiURL1 = `https://my-json-server.typicode.com/Aime78/mockupapi/users`;

  // const apiURL2 = `https://jsonplaceholder.typicode.com/users/`;
  const res = await fetch(`${apiURL1}`);
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
  const apiURL1 = `https://my-json-server.typicode.com/Aime78/mockupapi/users`;
  // const apiURL2 = `https://jsonplaceholder.typicode.com/users/`;
  const id = params.id;
  const res = await fetch(`${apiURL1}?id=${id}`);
  const listingData = await res.json();
  // const listingData = data.users;
  // const listingData = JSON.parse(JSON.stringify(data));
  return {
    props: {
      listingData,
    },
  };
}

export default function Post({ listingData }) {
  return (
    <h1>Amigos ID ({listingData[0].name})</h1>

    // <Layout>

    //   <article>
    //     <h1 className={utilStyles.headingXl}>{listingData[0].name}</h1>

    //     <div dangerouslySetInnerHTML={{ __html: listingData[0].description }} />
    //   </article>
    // </Layout>
  );
}
