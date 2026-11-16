import type { Metadata } from "next";

export function createPageMetadata(
  path: string,
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: path,
      siteName: "TTDigitales",
      title,
      description,
    },
  };
}
