import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  ogImage: string;
  ogUrl: string;
}

export default function SEO({
  title = "Pro Clean | Professional Cleaning Services",
  description = "Professional home cleaning services with insured, bonded, background-checked cleaners. Transparent pricing, easy online booking, and flexible scheduling.",
  ogImage = "https://www.procleanvlinc.com/og-preview.jpg",
  ogUrl = "https://www.procleanvlinc.com"
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    // Set document title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty  "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute("content", content);
    };

    // Set or update link tags
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        document.head.appendChild(link);
      }
      
      link.href = href;
    };

    // SEO Meta Tags
    setMetaTag("description", description);
    setMetaTag("keywords", "professional cleaning, home cleaning, senior cleaning services, disability assistance, affordable cleaning, community assistance program");

    // Open Graph Tags
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:image", ogImage, true);
    setMetaTag("og:url", `${ogUrl}${location.pathname}`, true);
    setMetaTag("og:type", "website", true);

    // Twitter Card Tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", ogImage);

    // Canonical URL
    setLinkTag("canonical", `${ogUrl}${location.pathname}`);

    // Favicon
    let favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }
    favicon.href = "/favicon.png";

  }, [title, description, ogImage, ogUrl, location.pathname]);

  return null;
}











