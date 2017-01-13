import 'zone.js';
import 'reflect-metadata';

import { bootstrap } from "angular2/platform/browser";
import { HTTP_PROVIDERS } from "angular2/http";
import { Blog } from "./blog/blog";
import { HttpServices } from "./http.services";
import { StorageServices } from "./storage.services";

bootstrap(Blog, [
  HTTP_PROVIDERS,
  HttpServices,
  StorageServices
]);
