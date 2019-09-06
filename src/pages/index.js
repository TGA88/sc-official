import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{fontFamily:'eq_headlinebold',fontSize:'32px'}}>Hi people</h1>
    <p style={{fontFamily:'eq_headlineregular',fontSize:'16px'}}>this Official page.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>

    <h1 style={{fontFamily:'eq_headlinebold',fontSize:'32px'}}>Hi people</h1>
    <p style={{fontFamily:'eq_headlineregular',fontSize:'16px'}}>this Official page.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>


    <h1 style={{fontFamily:'eq_headlinebold',fontSize:'32px'}}>Hi people</h1>
    <p style={{fontFamily:'eq_headlineregular',fontSize:'16px'}}>this Official page.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>


    <h1 style={{fontFamily:'eq_headlinebold',fontSize:'32px'}}>Hi people</h1>
    <p style={{fontFamily:'eq_headlineregular',fontSize:'16px'}}>this Official page.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>


    <h1 style={{fontFamily:'eq_headlinebold',fontSize:'32px'}}>Hi people</h1>
    <p style={{fontFamily:'eq_headlineregular',fontSize:'16px'}}>this Official page.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
