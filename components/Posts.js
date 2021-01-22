import Link from "next/link";

export default function Posts(props) {
  let posts = props.postList.body;
  let blog = posts.map((x) => x.post);
  let postID = posts.map((x) => x.postID);

  return (
    <>
      <div className="row two-columns">
        {blog &&
          blog.map((post, index) => {
            return (
              <div
                key={postID[index]}
                className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
              >
                <article className="post-wrapper wow fadeInUp">
                  <div className="title titleWrapper">
                    <h3>
                      <Link
                        href="/details/[id]"
                        as={`/details/${postID[index]}`}
                      >
                        <a className="multiline-text">{post.title}</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="media post-image">
                    <div className="entry">
                      <Link
                        href="/details/[id]"
                        as={`/details/${postID[index]}`}
                      >
                        <img
                          src={post.images[0]}
                          height="200px"
                          alt="Feature photo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="post-footer">
                    <div className="pull-left">
                      <Link
                        href="/details/[id]"
                        as={`/details/${postID[index]}`}
                      >
                        <a className="readmore">Read more...</a>
                      </Link>
                    </div>
                    <div className="pull-right text-muted">
                      {post.publishDate}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
      </div>
    </>
  );
}
