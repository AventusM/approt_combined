import express from "express";
import {
  USERS_API_PATH,
  EVENTS_API_PATH,
  EVENTGROUPS_API_PATH,
  HEALTHCHECK_API_PATH,
} from "../constants";

const router = express.Router();

const directLinks = [
  { link: USERS_API_PATH },
  { link: EVENTS_API_PATH },
  { link: EVENTGROUPS_API_PATH },
  { link: HEALTHCHECK_API_PATH },
];

router.get("/", (_req, res) => {
  // Necessary adjustment with nginx as it uses '/api/' route.
  // Otherwise the direct address would be '/api/api/users' etc.
  //const nginxCorrectLink = directLinks.map(path => ({link:`/api${path.link}`}))
  res.render("index.njk", { pathArray: directLinks });
});

export default router;
