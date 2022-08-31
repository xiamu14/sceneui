// pages/index.js

import Head from "next/head";
import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";

export async function getStaticProps() {
  return { props: { posts: allPosts } };
}

function PostCard(post: Post) {
  return (
    <div className="mb-6">
      <h2 className="text-lg">
        <Link href={post.url}>
          <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
        </Link>
      </h2>
    </div>
  );
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Contentlayer Blog Example</title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

      {posts.map((post: any, idx: number) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
