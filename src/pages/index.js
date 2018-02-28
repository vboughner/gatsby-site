import React from 'react'
import Link from 'gatsby-link'
import Helmet from "react-helmet";

import '../styles/blog-listing.css';

// some of these updates were made by following the blog post called
// "How to build a React and Gatsby-powered blog in about 10 minutes" at
// https://medium.freecodecamp.org/how-to-build-a-react-and-gatsby-powered-blog-in-about-10-minutes-625c35c06481
// and this helped get to the point where we have some markdown files to experiment with

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <h2>{post.frontmatter.date}</h2>
              <p>{post.excerpt}</p>
            </div>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
