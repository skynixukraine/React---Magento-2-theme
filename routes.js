const routes = require("next-routes");

module.exports = routes()
    .add({ name: "index", pattern: "/:lang(ua|ru)", page: "index" })
    .add({ name: "category", pattern: "/:lang(ua|ru)/category", page: "category" }) //This route was added for example, to show how language in route would work

