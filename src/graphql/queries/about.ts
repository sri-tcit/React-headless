import { gql } from 'graphql-request';

export const ABOUT_QUERY = gql`
 query about {
  about {
    documentId
    aboutTitle {
      id
      label
      title
    }
    aboutCTA {
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
    passionSection {
      id
      label
      title
      description
      images {
        url
        height
        provider
      }
    }
    createdAt
    updatedAt
    publishedAt
    contactSection {
      id
      title
      description
      contactItems {
        icon {
          url
          height
          width
        }
        id
        value
      }
      contactFormFields {
        id
        label
        placeholder
      }
      submitBtn
      termsLabel
    }
    ourMission {
      id
      label
      title
      description
      image {
        url
        height
        width
      }
    }
    steps {
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
  }
}
`;
