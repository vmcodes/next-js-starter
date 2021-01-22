import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

const Details = (props) => {
  const showdown = require("showdown");
  const converter = new showdown.Converter();

  let details = props.post.body;

  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Layout>
        <div id="main" className="col-lg-10 col-md-10 col-sm-8 col-xs-12">
          <article className="general-wrapper">
            <div className="title">
              <h3>{details.post.title}</h3>
            </div>
            <div className="single_blog_meta">
              <div className="byline">
                <span>
                  <i className="fa fa-user" /> &nbsp;
                  <a href="#author-section">{details.post.author}</a>
                </span>
                <span>
                  <i className="fa fa-calendar-o" /> &nbsp;
                  <a href="#publish-date">{details.post.publishDate}</a>
                </span>
              </div>
            </div>
          </article>
          {/* end author-wrapper */}
          <article className="post-wrapper">
            <div className="post-desc">
              <span
                dangerouslySetInnerHTML={{
                  __html: converter.makeHtml(details.post.details),
                }}
              />
            </div>
            <hr />
          </article>
          {/* end author-wrapper */}
        </div>
        {/* end main */}

        {/* end right sidebar */}
      </Layout>
    </>
  );
};

export default Details;

export async function getStaticPaths() {
  const creds = {
    query: "all",
    app: "22fb6192-0bbc-42e1-8264-625a88f35cdd",
    client: "a9efbd45-9242-4840-ab37-a4ef5fd468ab",
  };
  // Call an external API endpoint to get posts
  const response = await fetch("https://v2.objectpress.co/content", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  });
  const posts = await response.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.body.map((post) => `/details/${post.postID}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // fetch list of posts
  const creds = {
    query: "search",
    app: "22fb6192-0bbc-42e1-8264-625a88f35cdd",
    post: params.id,
  };

  const response = await fetch("https://v2.objectpress.co/content", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  });

  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}
