import { gql } from 'graphql-request';

export const HOME_QUERY = gql`
  query Home {
    home {
      documentId
      herosection {
        id
        heading
        subheading
        buttontext
        buttonlink
      }
      services {
        id
        title
        description
        serviceitems {
          id
          icon {
            documentId
            name
            url
          }
          title
          description
        }
      }
      whychooseus {
        id
        label
        title
        description
        featurelist {
          id
          icon {
            documentId
            url
          }
          title
          description
        }
        centralimage {
          url
        }
      }
      createdAt
      updatedAt
      publishedAt
      processsection {
        buttonLink
        buttonText
        cards {
          description
          id
          picture {
            url
            width
            height
          }
          title
        }
        description
        heading
        id
        label
      }
      ctaSection {
        buttonLink
        buttonText
        description
        label
        leftImage {
          url
          height
          width
        }
        title
        rightImage {
          width
          url
        }
      }
      insights {
        id
        label
        title
        description
        recentNews {
          id
          cover {
            url
            height
            width
          }
          date
          timeToRead
          buttonText
          buttonLink
          title
          badges {
            id
            badge
          }
        }
      }
    }
  }
`;
