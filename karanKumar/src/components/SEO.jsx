import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  image = "/images/profile.png",
  type = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
}) => {
  const location = useLocation();
  const siteUrl = (
    import.meta.env.VITE_SITE_URL || "https://imksh.online"
  ).replace(/\/$/, "");
  const canonicalUrl = canonical || `${siteUrl}${location.pathname}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${siteUrl}${image.startsWith("/") ? image : `/${image}`}`;

  const setMeta = (selector, attr, value) => {
    if (!value) return;
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(
        attr,
        selector.match(/['\"]([^'\"]+)['\"]/)?.[1] || "",
      );
      document.head.appendChild(element);
    }
    element.setAttribute("content", value);
  };

  useEffect(() => {
    if (title) {
      document.title = title;
    }

    setMeta("meta[name='description']", "name", description);
    setMeta("meta[name='keywords']", "name", keywords);
    setMeta(
      "meta[name='robots']",
      "name",
      noIndex
        ? "noindex,nofollow"
        : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    );
    setMeta("meta[property='og:type']", "property", type);
    setMeta("meta[property='og:title']", "property", title);
    setMeta("meta[property='og:description']", "property", description);
    setMeta("meta[property='og:url']", "property", canonicalUrl);
    setMeta("meta[property='og:image']", "property", imageUrl);
    setMeta("meta[name='twitter:card']", "name", twitterCard);
    setMeta("meta[name='twitter:title']", "name", title);
    setMeta("meta[name='twitter:description']", "name", description);
    setMeta("meta[name='twitter:image']", "name", imageUrl);

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }

    link.href = canonicalUrl;
  }, [
    title,
    description,
    keywords,
    canonicalUrl,
    imageUrl,
    type,
    twitterCard,
    noIndex,
  ]);

  return null;
};

export default SEO;
