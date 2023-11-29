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
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  if (href) {
    smoothScrollTo(href);
  }
};

export default smoothScrollTo;
