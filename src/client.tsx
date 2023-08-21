import { createClient } from "contentful";

export const client = createClient({
  space: "k2vl2u5o5oev",
  accessToken: process.env.REACT_APP_API_KEY!,
});
