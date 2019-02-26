Feature("Cms Page"); // eslint-disable-line no-undef
// eslint-disable-next-line no-undef

Scenario("Test url path for cms page", I => {
    I.amOnPage("/test-cms");
    I.see("404")
    I.amOnPage("/privacy-policy-cookie-restriction-mode");
    I.dontSee("404");
    I.seeElement('.js-hook__cms-content');
    I.amOnPage("/ru/privacy-policy-cookie-restriction-mode");
    I.seeElement('.js-hook__cms-content');
    I.amOnPage("/en/privacy-policy-cookie-restriction-mode");
    I.see("404")
});


