const routes = require("next-routes");

module.exports = routes()
    .add({ name: "index", pattern: "/", page: "index" })

