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

Scenario("Test header component on index page", I => {
    I.amOnPage("/");
    I.seeElement(".js-hook__header");

    I.seeElement(".js-hook__navigation");
    I.dontSeeElement('.js-hook__navigation-content');
    I.click('.js-hook__navigation-icon')
    I.seeElement('.js-hook__navigation-content');

    I.dontSeeInCurrentUrl('/ru');
    I.selectOption('languages', 'ru');
    I.seeInCurrentUrl('/ru')

    I.seeElement(".js-hook__header-logo-title");
    I.seeElement(".js-hook__header-search");
    I.seeElement(".js-hook__header-login");
    I.seeElement(".js-hook__header-register");
    I.seeElement(".js-hook__header-cart");
    I.seeElement(".js-hook__header-languages");
});


Scenario("Test that TextLeftImageRightWidget exist on home page", I => {
    I.amOnPage("/");
    I.seeElement("section.js-hook__text-left-widget");
    I.seeElement(".js-hook__text-left-widget-image");
    I.seeElement(".js-hook__text-left-widget-description");
});