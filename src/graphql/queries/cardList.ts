import { gql } from 'graphql-request';

export const CARDLIST_QUERY = gql`
query CardsListing {
  cardsListing {
    documentId
    ctaSection {
      label
      title
      description
      buttonText
      buttonLink
      leftImage {
         url
            width
            height
      }
      rightImage {
         url
            width
            height
      }
    }
    faqSection {
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
    heroTitle {
      id
      label
      title
    }
    creditCards {
      id
      label
      title
      cards {
        documentId
        cardName
        slug
        cardBenefits {
          id
          icon {
            url
            width
            height
          }
          description
        }
        cardImage {
          url
          width
          height
        }
        cardBanner {
         url
          width
          height
        }
        badges {
          id
          badge
        }
        buttonText
        buttonLink
        heroBanner {
          id
          heading
          subheading
          buttontext
          buttonlink
          bannerImage {
            url
          width
          height
          }
        }
        createdAt
        updatedAt
        publishedAt
      }
    }
    createdAt
    updatedAt
    publishedAt
  }
}`;