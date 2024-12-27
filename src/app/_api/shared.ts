export const GRAPHQL_API_URL = process.env.NEXT_BUILD
  ? `https://hoffen.vercel.app`
  : process.env.NEXT_PUBLIC_SERVER_URL
