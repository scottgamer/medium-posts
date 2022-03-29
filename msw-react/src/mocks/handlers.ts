import { rest } from "msw";
import CONSTANTS from "../constants";

function getPosts() {
  return rest.get(`${CONSTANTS.API_URL}/posts`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: "Post 1 title",
          body: "Post 1 body",
        },
        {
          userId: 1,
          id: 2,
          title: "Post 2 title",
          body: "Post 2 body",
        },
      ])
    );
  });
}

export const handlers = [getPosts()];
