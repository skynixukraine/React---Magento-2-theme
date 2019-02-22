exports.config = {
    tests: "./__tests/acceptance-tests/*_test.js",
    output: "./output",
    mocha: {
        reporter: "mocha-junit-reporter",
        reporterOptions: {
            mochaFile: "./acceptance-result.xml"
        }
    },
    helpers: {
        Puppeteer: {
            url: "http://localhost:3000",
            waitForAction: 500,
            chrome: {
                args: ["--no-sandbox"]
            }
        }
    },
    include: {
        I: "./steps_file.js"
    },
    bootstrap: null,
    name: "super-heroes"
};
