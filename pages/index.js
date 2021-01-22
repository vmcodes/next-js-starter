import Layout from "../components/Layout";
import Posts from "../components/Posts";

export default function Home({ postList }) {
  return (
    <>
      <Layout>
        <div id="main" className="col-lg-10 col-md-10 col-sm-8 col-xs-12 nopad">
          <article className="author-wrapper">
            <div className="row">
              <div className="col-sm-12 col-xs-12">
                <div className="pull-left">
                  <h3>In The News</h3>
                </div>

                <div className="pull-right">
                  <a href="https://objectpress.co">
                    <img src="images/object-press.png" alt="object press" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* End Author Intro */}
          <Posts postList={postList} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // fetch list of posts
  const creds = {
    query: "all",
    app: "22fb6192-0bbc-42e1-8264-625a88f35cdd",
    client: "a9efbd45-9242-4840-ab37-a4ef5fd468ab",
  };

  const response = await fetch("https://v2.objectpress.co/content", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  });

  const postList = await response.json();

  return {
    props: {
      postList,
    },
  };
}
