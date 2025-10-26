import { gql } from 'graphql-request';

export const CARD_DETAIL_QUERY = gql`
query Cards($slug: String!) {
  cardsListing {
    creditCards {
      cards(filters: { slug: { eq: $slug } }) {
        heroBanner {
          id
          heading
          subheading
          buttontext
          buttonlink
          bannerImage {
            url
            height
            width
          }
        }
        documentId
        cardBenefits {
          id
          icon {
            url
            height
            width
          }
          description
        }
        offers {
          id
          label
          heading
          description
          buttonText
          buttonLink
          cards {
            id
            title
            description
            picture {
              url
              height
              width
            }
          }
        }
        applySteps {
          id
          label
          title
          stepItems {
            id
            label
            title
            description
            icon {
              url
              height
              width
            }
          }
        }
        cardsFAQ {
          id
          label
          title
          description
          faqListing {
            id
            categoryTitle
            faqItems {
              id
              question
              answer
            }
          }
        }
        ctaSection {
          id
          label
          title
          description
          buttonText
          buttonLink
          leftImage {
            url
            height
            width
          }
          rightImage {
            url
            height
            width
          }
        }
        createdAt
        updatedAt
        publishedAt
        cardName
      }
    }
  }
}
`;

