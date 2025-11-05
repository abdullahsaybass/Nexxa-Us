import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import fs from "fs";
import routes from "../src/sitemapRoutes.js";

const siteUrl = "https://nexxaauto.com"; // 🔁 replace with your actual domain

async function buildSitemap() {
  const links = routes.map((url) => ({
    url,
    changefreq: "weekly",
    priority: url === "/" ? 1.0 : 0.7,
    lastmodISO: new Date().toISOString(),
  }));

  const stream = new SitemapStream({ hostname: siteUrl });
  const xml = await streamToPromise(Readable.from(links).pipe(stream));

  fs.writeFileSync("./public/sitemap.xml", xml.toString());
  console.log("✅ Sitemap generated successfully at public/sitemap.xml");
}

buildSitemap();
