import React from 'react';
import { Link } from 'gatsby';

import Layout from '@layout/layout/layout';
import SEO from '@meta/seo/seo';
import Image from '@media/image/image';

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{
      maxWidth: `300px`,
      marginBottom: `1.45rem`,
    }}
    >
      <Image/>
    </div>
    <label htmlFor="abc">
      <span>Abc</span>
      <input id="abc" type="text" name="abc"/>
    </label>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
