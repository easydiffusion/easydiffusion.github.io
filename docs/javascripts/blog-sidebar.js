/* Hide the "Categories" list from the blog sidebar.
 * Category pages and the category links shown on each post are unaffected. */

document$.subscribe(() => {
  document.querySelectorAll(".md-sidebar--primary .md-nav__item--nested").forEach((item) => {
    const label = item.querySelector(":scope > label > .md-ellipsis");
    const title = item.querySelector(":scope > nav > label.md-nav__title");
    const text = (label || title || { textContent: "" }).textContent.trim();
    if (text === "Categories") {
      item.remove();
    }
  });
});
