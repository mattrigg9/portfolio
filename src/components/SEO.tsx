import React, { PropsWithChildren } from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

interface SEOProps extends PropsWithChildren {
  title?: string;
  description?: string;
  pathname?: string;
}

export default function SEO({ title, description, pathname, children }: SEOProps) {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {/* TODO: Build OG Image */}
      {/* <meta name="image" content={seo.image} /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      {/* TODO: Build OG Image */}
      {/* <meta name="twitter:image" content={seo.image} /> */}
      {children}
    </>
  );
}
