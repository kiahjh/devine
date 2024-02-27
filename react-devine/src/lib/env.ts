export const API_ENDPOINT =
  process.env.NODE_ENV === `production`
    ? `https://api.devine.kiahjh.com`
    : `http://localhost:4000`;
