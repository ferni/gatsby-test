import React from "react";

export default function Template({
                                   data, // this prop will be injected by the GraphQL query below.
                                 }) {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }, pageIndex) =>
        <div>
        <h1 key={pageIndex}><a href={node.frontmatter.path}>{node.frontmatter.path}</a></h1>
        <ul>
        {node.headings.map(({ value }, index) =>
          <li><a href={`${node.frontmatter.path}/#${value}`}>{value}</a></li>
        )}
        </ul>
        </div>
      )}
    </div>
  );
}

export const pageQuery = graphql`
  query FaqIndex {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
          }
          headings {
            value
            depth
          }
        }
      }
    }
  }
`;