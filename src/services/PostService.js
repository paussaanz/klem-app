import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unAuthenticatedHttp = createHttp();

export const postCreatePost = (postData) => {
    return authenticatedHttp.post("/create-post", postData);
  };
