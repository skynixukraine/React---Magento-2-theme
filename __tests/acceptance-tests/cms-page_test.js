Feature("Cms Page"); // eslint-disable-line no-undef
// eslint-disable-next-line no-undef


const data = require('../../codecept.conf');
const stores = Object.keys(data.config.stores);

Scenario("Test url path for cms page", I => {
    I.amOnPage("/test-cms");
    I.see("404")
    I.amOnPage("/privacy-policy-cookie-restriction-mode");
    I.dontSee("404");
    I.seeElement('.js-hook__cms-content');

   stores.forEach(item=>{
       let lang = item!=='default' ? `/${item}` : '';

       I.amOnPage(`${lang}/privacy-policy-cookie-restriction-mode`);
       I.seeElement('.js-hook__cms-content');

   })

    I.amOnPage("/test-lang/privacy-policy-cookie-restriction-mode");
    I.see("404")
});


