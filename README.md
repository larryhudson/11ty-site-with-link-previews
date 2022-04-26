# Eleventy site with link previews

This is a little experiment to add 'link previews' to in-text hyperlinks.

In this project, there are two pages inside the `src/person` directory. These generate regular HTML pages. They both have the 'person' tag, which adds them to `collections.person`.

The `src/link-preview/11ty.js` file creates a separate JSON file for each person, with blurb data.

Then, the client-side JS file `src/_includes/client-js/link-preview.js` 'enhances' the in-text hyperlinks by fetching that JSON data and adding a simple tooltip. This allows users to read a small blurb without leaving the current page.

I have not done thorough testing on the accessibility side. For now, the `aria-controls` associates the link with the preview panel, the `aria-expanded` attribute tells screen readers whether the preview panel is open or closed. This is similar to a drop-down navigation menu.
