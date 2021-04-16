import { Then } from "cucumber";
import assert from "assert";
import verifyLinksContain from "../../support/assertions/verifyLinksContain";

Then(/^links related to "(.*)" are shown on the results page$/, keyword => {
    verifyLinksContain($$(".LC20lb"), keyword);
});
