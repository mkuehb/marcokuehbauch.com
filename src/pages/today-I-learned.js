import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/Button';
import theme from '../styles/theme';
import * as ui from '../styles/til/ui';

const TIL = ({ data }) => {
  const [allItemsLoaded, setAllItemsLoaded] = useState(false);

  const { allMdx } = data;
  const { edges, group } = allMdx;

  const items = edges && (!allItemsLoaded ? edges.slice(0, 20) : edges);
  const additionalItems = edges.slice(20);

  const randomNumber = Math.floor(Math.random() * Math.floor(13999));

  const handleOnClick = () => {
    setAllItemsLoaded(!allItemsLoaded);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout maxWidth="1400px">
        <SEO title="Today I learned" />
        <ui.PageHeader>Today I learned</ui.PageHeader>

        <ui.Categories>
          {group.map(tag => (
            <ui.Category key={tag.fieldValue} category={tag.fieldValue}>
              <Link to={`/today-I-learned/${tag.fieldValue}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </ui.Category>
          ))}
        </ui.Categories>

        <ui.PageContent>
          {items.map(({ node }, index) => {
            const { excerpt, fields, frontmatter, id } = node;

            return (
              <Link key={id} to={`/${fields.slug}`}>
                <ui.Section>
                  <ui.Aside>TIL #{randomNumber - index}</ui.Aside>
                  <h3>{frontmatter.title}</h3>

                  {frontmatter.tags && (
                    <ui.tags>
                      {frontmatter.tags.map(tag => (
                        <ui.tag key={tag}>#{tag}</ui.tag>
                      ))}
                    </ui.tags>
                  )}

                  <section>
                    <p>{excerpt}</p>
                    <ui.Readmore>Read more</ui.Readmore>
                  </section>
                </ui.Section>
              </Link>
            );
          })}
        </ui.PageContent>
        {!allItemsLoaded && (
          <ui.Slot>
            <Button onClick={handleOnClick}>
              Load {additionalItems.length} more
            </Button>
          </ui.Slot>
        )}
      </Layout>
    </ThemeProvider>
  );
};

TIL.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
      group: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default TIL;

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { fields: { type: { eq: "today-I-learned-post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt
          frontmatter {
            title
            tags
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
