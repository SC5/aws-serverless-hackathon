import { bootstrap } from "angular2/platform/browser";
import { HTTP_PROVIDERS } from 'angular2/http';
// import { enableProdMode } from 'angular2/core';
import { Blog } from "./blog/blog";

// enableProdMode();
bootstrap(Blog, [HTTP_PROVIDERS]);
