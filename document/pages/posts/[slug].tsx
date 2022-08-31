// pages/posts/[slug].js

import Head from "next/head";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts, Post } from "contentlayer/generated";
import Button from "@sceneui/button";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }: { post: Post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link href="/">
            <a className="text-center text-sm font-bold uppercase text-blue-700">
              Home
            </a>
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
        </div>
        <Component components={{ Button }} />
      </article>
    </>
  );
};

export default PostLayout;
