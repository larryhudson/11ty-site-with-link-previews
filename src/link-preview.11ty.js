class LinkPreview {
  data() {
    return {
      pagination: {
        data: "collections.person",
        size: 1,
        alias: "person",
      },
      permalink: (data) => `/person/${data.person.fileSlug}.json`,
    };
  }

  render(data) {
    return JSON.stringify({
      name: data.person.data.title,
      blurb: data.person.data.blurb,
      url: data.person.url,
    });
  }
}

module.exports = LinkPreview;
