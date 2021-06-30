import Link from 'next/link';
// import Image from 'next/image';

function Post({ post }) {
    return (
        <div className='card'>

            {/*}
            <Image
                src={post.frontmatter.cover_image}
                alt={post.slug.replace('-', ' ') + ' title image'}
                width="512px"
                height="256px"
            />
            */}
            <img src={post.frontmatter.cover_image} alt={post.slug.replace('-', ' ') + ' title image'} />
            <div className="post-date">Posted on {post.frontmatter.date}</div>
            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.export}</p>

            <Link href={`/blog/${post.slug}`} passHref>
                <a href="" className="btn">
                    Read More
                </a>
            </Link>
        </div>
    );
};

export default Post;