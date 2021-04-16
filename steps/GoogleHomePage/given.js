import { Given } from 'cucumber';
import googleHomePage from "../../pages/GoogleHome";
import goToURL from "../../support/actions/goToURL";

Given("a web browser is at the Google home page", () => {
    goToURL(googleHomePage.url);
});
