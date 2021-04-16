import { When } from "cucumber";
import search from "../../support/actions/googleSearch";
import clickMenuOption from "../../support/actions/clickMenuOption";

When(/^The user enters "(.*)" into the search bar$/, keyword => {
    search(keyword);
});

When(/^the user clicks on the "(.*)" option in the menu$/, option => {
    clickMenuOption(option);
});

