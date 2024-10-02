/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
document.getElementById('back-to-top').onclick = function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

// ==== for menu scroll
const pageLink = document.querySelectorAll(".ud-menu-scroll");
pageLink.forEach(elem => {
  elem.addEventListener("click", e => {
    var url = elem.getAttribute("href");
    var anchor = url.match(/(#.*)$/);
    if (window.location.pathname !== '/' || anchor === null) {
      return;
    }
    anchor = anchor[1];
    e.preventDefault();
    document.querySelector(anchor).scrollIntoView({
      behavior: "smooth",
      offsetTop: 1 - 60
    });
  });
});

// section menu active
function onScroll(event) {
  const sections = document.querySelectorAll(".ud-menu-scroll");
  const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  for (let i = 0; i < sections.length; i++) {
    const currLink = sections[i];
    const url = currLink.getAttribute("href");
    var anchor = url.match(/(#.*)$/);
    if (anchor === null) {
      continue;
    }
    anchor = anchor[1];
    const refElement = document.querySelector(anchor);
    const scrollTopMinus = scrollPos + 73;
    if (refElement.offsetTop <= scrollTopMinus && refElement.offsetTop + refElement.offsetHeight > scrollTopMinus) {
      document.querySelector(".ud-menu-scroll").classNameList.remove("active");
      currLink.classNameList.add("active");
    } else {
      currLink.classNameList.remove("active");
    }
  }
}
window.document.addEventListener("scroll", onScroll);
/* eslint-enable no-console */
/******/ })()
;
//# sourceMappingURL=view.js.map