import Head from "next/head";
import Header from "../components/Header";
import logo from "../assets/p.png";
import { sanityClient, urlFor } from "../sanity.js";
import { Post } from "../typings";
import Link from "next/link";

interface Props {
  posts: [Post];
}

const Home = ({ posts }: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Pro Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="bg-yellow-400 flex px-10 items-center border-black justify-between border-y py-10">
          <div className="space-y-5">
            <h1 className="text-6xl font-serif max-w-xl">
              <span className="underline decoration-4 decoration-black">
                Pro Blog
              </span>{" "}
              is a place to write, read and connect ideas
            </h1>
            <h3>
              It's easy to share thoughts or any topic and connect with millions
              of other users.
            </h3>
          </div>

          <img
            className="hidden md:inline-flex h-28 lg:h-44"
            src={logo.src}
            alt="Logo"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
          {posts.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="group cursor-pointer border rounded-lg overflow-hidden">
                <img
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                  src={urlFor(post.mainImage).url()!}
                  alt="mainImage"
                />
                <div className="flex justify-between items-center p-5 bg-white">
                  <p className="text-lg font-bold">
                    {post.title} by {post.author.name}
                  </p>
                  <img
                    className="h-12 w-12 rounded-full"
                    src={urlFor(post.author.image).url()}
                    alt="authorImage"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = `*[_type == 'post']{
    _id,
    title,
    slug,
    author -> {
    name,
    image
  },
  mainImage,
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
