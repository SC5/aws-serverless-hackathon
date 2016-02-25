System.register(["angular2/platform/browser", "./blog/blog"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, blog_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (blog_1_1) {
                blog_1 = blog_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(blog_1.Blog, []);
        }
    }
});
//# sourceMappingURL=main.js.map