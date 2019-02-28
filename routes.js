const routes = require("next-routes");

module.exports = routes()
    .add({ name: "index", pattern: "/:lang(ua|ru)", page: "index" })
    .add({ name: "index-default", pattern: "/", page: "index" })
    .add({ name: "cms-lang", pattern: "/:lang(ua|ru)/:urlKey", page: "cms" })
    .add({ name: "cms", pattern: "/:urlKey", page: "cms" })
