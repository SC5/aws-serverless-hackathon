import { bootstrap } from "angular2/platform/browser";
import { HTTP_PROVIDERS } from "angular2/http";
import { Blog } from "./blog/blog";
import { HttpServices } from "./http.services";

bootstrap(Blog, [
  HTTP_PROVIDERS,
  HttpServices
]);
