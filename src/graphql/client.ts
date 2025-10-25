import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL || '';
// const endpoint = 'http://192.168.0.153:1337/graphql';

export const Client = new GraphQLClient(endpoint, {
  headers: {
    // If Strapi requires auth:
    // Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  },
});
