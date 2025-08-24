import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/team", "routes/team.tsx"),
  route("/blogs", "routes/blogs.tsx"),
  route("/blog/:id", "routes/blog.$id.tsx"),
] satisfies RouteConfig;
