import { MouseEvent } from "react";

const smoothScrollTo = (selector: string) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

export const smoothScrollToAnchor = (event: MouseEvent<HTMLAnchorElement>) => {
  let path, anchor;

  const href = event.currentTarget.getAttribute("href");
  const parts = href?.split("#");

  if (parts?.length === 2) {
    path = parts[0];
    anchor = parts[1];
  } else {
    anchor = parts?.[0];
  }

  // If the link is to a different page, don't smooth scroll
  if (path && path !== window.location.pathname) {
    return;
  }

  // Prevent the browser navigation and smooth scroll to the anchor
  event.preventDefault();
  if (href) {
    smoothScrollTo(`#${anchor}`);
  }
};

export default smoothScrollTo;
