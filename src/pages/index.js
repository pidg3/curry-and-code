import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Curry and Code"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `software`, `curry`, `javascript`, `python`]}
        />
        <p>👋 Hi, I'm a dev and family man based in Edinburgh.</p>
        <p>🧑‍💻 This is my latest attempt to write down things I know/learn about technology.</p>
        <p>🥘 Also, expect the occasional restaurant review!</p>
        <p>
          💌 Here I am on <a href="https://fosstodon.org/@pidge">Mastodon </a>
          (fledgling; trying it out) and <a href="https://www.linkedin.com/in/michael-pidgeon-7a78a349/">LinkedIn</a>
        </p>

        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
