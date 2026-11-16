import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ttdigitales.com.ar",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://ttdigitales.com.ar/servicios",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ttdigitales.com.ar/desarrollo-web",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ttdigitales.com.ar/software-a-medida",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ttdigitales.com.ar/soluciones-logisticas",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ttdigitales.com.ar/marketing-digital",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ttdigitales.com.ar/gis-y-analisis-territorial",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ttdigitales.com.ar/fotografia-e-imagen",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ttdigitales.com.ar/proyectos",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://ttdigitales.com.ar/nosotros",
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://ttdigitales.com.ar/contacto",
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
