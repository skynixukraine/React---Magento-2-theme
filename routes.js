const routes = require("next-routes");

module.exports = routes()
    .add({ name: "index", pattern: "/:lang(ua|ru)", page: "index" })

