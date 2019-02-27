Feature("Index Page"); // eslint-disable-line no-undef
// eslint-disable-next-line no-undef

Scenario("Test languages in url path", I => {
    I.amOnPage("/");
    I.dontSee("404");
    I.amOnPage("/ru");
    I.dontSee("404");
    I.amOnPage("/en");
    I.see("404")
});

Scenario("Test page title", I => {
    I.amOnPage("/");
    I.seeInTitle('Магазин Супер Героїв');
});

Scenario("Test type of layout on home page", I => {
    I.amOnPage("/");
    I.seeElement(".js-hook__one-col-layout");
    I.seeElement(".js-hook__one-col-layout-header");
    I.seeElement(".js-hook__one-col-layout-content");
    I.seeElement(".js-hook__one-col-layout-footer");
});

