const deactiveLinks = (links) => {
  links.forEach((link) => {
    link.classList.remove("link_active");
  });
};

const hidePages = (pages) => {
  pages.forEach((page) => {
    page.classList.remove("active");
  });
};

export { deactiveLinks, hidePages };
