window.addEventListener("load", async function () {
  // look for matching links
  const personLinks = document.querySelectorAll("a[href^='/person/']");

  await Promise.all(
    Array.from(personLinks).map(async (personLink, index) => {
      // wrap in container?
      const linkPreviewContainer = document.createElement("span");
      linkPreviewContainer.classList.add("link-preview-container");
      personLink.insertAdjacentElement("afterend", linkPreviewContainer);
      linkPreviewContainer.appendChild(personLink);

      const linkHref = personLink.getAttribute("href");

      const jsonUrl = `${linkHref.slice(0, -1)}.json`;

      const linkPreviewData = await fetch(jsonUrl).then((r) => r.json());

      const linkPreviewTag = document.createElement("div");

      const linkPreviewId = `link-preview-${index}`;
      linkPreviewTag.setAttribute("id", linkPreviewId);
      personLink.setAttribute("aria-controls", linkPreviewId);

      linkPreviewTag.classList.add("link-preview");

      linkPreviewTag.setAttribute("hidden", "");
      personLink.setAttribute("aria-expanded", "false");

      linkPreviewTag.innerHTML = `<p>${linkPreviewData.name}</p><p>${linkPreviewData.blurb}</p><p><a href="${linkPreviewData.url}">Read more</a><p>`;

      personLink.insertAdjacentElement("afterend", linkPreviewTag);

      personLink.addEventListener("click", function (event) {
        event.preventDefault();

        const isVisible = personLink.getAttribute("aria-expanded") === "true";

        if (isVisible) {
          personLink.setAttribute("aria-expanded", "false");
          linkPreviewTag.setAttribute("hidden", "");
        } else {
          personLink.setAttribute("aria-expanded", "true");
          linkPreviewTag.removeAttribute("hidden");
        }
      });
    })
  );
});
