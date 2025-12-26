/*
 * Name: Grégoire Martin-Guerre
 * Date: December 26, 2025
 *
 * This is the index.js file that provides necessary JavaScript functionality
 * for my personal resume HTML page.
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * sets up necessary functionality when page loads
   */
  function init() {
    typeWriterEffect();
  }

  /**
   * Simulates a typewriter effect on the tagline
   */
  function typeWriterEffect() {
    const textElement = qs(".tagline");
    if (!textElement) return;

    textElement.classList.add("typing-cursor");
  }

  // Tools Functions
  /**
   * Removes the specified element from the DOM.
   * @param {*} element - the element to remove.
   */
  function rm(element) {
    element.parentNode.removeChild(element);
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();