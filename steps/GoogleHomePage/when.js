import { When } from "cucumber";
import search from "../../support/actions/googleSearch";

When(/^The user enters "(.*)" into the search bar$/, keyword => {
    search(keyword);
});
