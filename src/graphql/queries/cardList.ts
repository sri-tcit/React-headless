import { gql } from 'graphql-request';

export const CARDLIST_QUERY = gql`
query Cardlist {
  cardsListing {
    createdAt
    creditCards {
      creditCards {
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
          badge
          id
        }
      }
      id
      label
      title
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
    faqSection {
      id
      label
      title
      description
      faqListing {
        categoryTitle
        faqItems {
          answer
          id
          question
        }
        id
      }
    }
    heroTitle {
      id
      label
      title
    }
    publishedAt
    updatedAt
    documentId
  }
}`;