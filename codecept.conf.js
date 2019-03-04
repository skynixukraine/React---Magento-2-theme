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
            //url: "http://localhost:3000",
            url: "https://super-heroes.dev.local",
            waitForAction: 500,
            chrome: {
		"ignoreHTTPSErrors": true,
                args: ["--no-sandbox"]
            }
        }
    },
    include: {
        I: "./steps_file.js"
    },
    bootstrap: null,
    name: "super-heroes",
    stores: {
        default: { code: "heroes_en", urlPrefix: "", isDefault: true},
        ru: {code: "heroes_ru", urlPrefix: "ru", isDefault: false},
        ua: {code: "heroes_ua", urlPrefix: "ua", isDefault: false}
    }
};
