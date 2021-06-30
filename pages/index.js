import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Post from '../components/Post';
import sortByDate from '../utils';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className="posts">
          {posts.map((post, index) => (
              <Post key={post.slug} post={post} />
          ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
    // Get the list of markdown files in the posts folder
    const files = fs.readdirSync(path.join('posts'));

    // Get slug and front matter for each post
    const posts = files.map((filename) => {
        const slug = filename.replace('.md', '');

        // Get front matter
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');

        const { data:frontmatter } = matter(markdownWithMeta);

        return {
            slug,
            frontmatter
        };
    });

    return {
        props: {
            posts: posts.sort(sortByDate)
        }
    }
}