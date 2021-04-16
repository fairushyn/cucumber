import googleHomePage from "../../pages/GoogleHome";

/**
 * Search for a keyword
 *
 * @param {String} keyword keyword to search for
 */
export default (keyword) => {
    googleHomePage.googleSearch(keyword);
};
