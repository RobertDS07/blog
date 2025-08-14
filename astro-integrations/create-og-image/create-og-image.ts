import type { AstroIntegration } from "astro";
import * as fs from "fs/promises";
import puppeteer from "puppeteer";

const getPageTitle = async (path: string) => {
  const currentPageHtml = await fs.readFile(path, "utf-8");
  const pageTitleMatch = currentPageHtml.match(/(?<=<title>).+?(?=<\/title>)/);
  const pageTitle = pageTitleMatch?.[0] ?? "";

  return pageTitle;
};

const getTemplateStylesheetPath = (templatePageHtml: string) => {
  const templateStylesheetPathArray = templatePageHtml.match(
    /<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"/,
  );
  const templateStylesheetPath = templateStylesheetPathArray
    ? templateStylesheetPathArray[1]
    : "";
  return templateStylesheetPath;
};

const fillTemplate = (template: string, title: string) => {
  const templateClone = String(template);
  const filledTemplate = templateClone.replace("@title", title);
  return filledTemplate;
};

const getOgImageName = (routePath: string) => {
  const ogImageNameArray = routePath.match(/dist\/(.+?)\/index\.html/);
  const ogImageName = ogImageNameArray
    ? ogImageNameArray[1].replace(/\//g, "-")
    : "index";
  return ogImageName;
};

const createDirectoryToOgs = async (imagesBasePath: string) => {
  const directoryToOgs = `${imagesBasePath}og/`;

  await fs.mkdir(directoryToOgs);

  return directoryToOgs;
};

const createOgImage = (): AstroIntegration => ({
  name: "create-og-image",
  hooks: {
    "astro:build:done": async ({ dir, routes }) => {
      const buildPath = dir.pathname;
      const OG_TEMPLATE_PATH = `${buildPath}og/index.html`;
      const IMAGES_BASE_PATH = `${buildPath}images/`;

      const templatePageHtml = await fs.readFile(OG_TEMPLATE_PATH, "utf-8");
      const templateStylesheetPath = `${buildPath}${getTemplateStylesheetPath(
        templatePageHtml,
      )}`;

      const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });

      const pathToSaveOgImages = await createDirectoryToOgs(IMAGES_BASE_PATH);

      for (const pageData of routes) {
        const internalPagePath = Array.isArray(pageData.distURL)
          ? (pageData.distURL[0] as any)?.pathname
          : (pageData.distURL as any)?.pathname;

        if (!internalPagePath) {
          continue;
        }

        const pageTitle = await getPageTitle(internalPagePath);
        const filledTemplate = fillTemplate(templatePageHtml, pageTitle);

        const ogImageName = getOgImageName(internalPagePath);

        const page = await browser.newPage();
        await page.setContent(filledTemplate);
        await page.addStyleTag({ path: templateStylesheetPath });
        await page.waitForNetworkIdle();
        await page.setViewport({
          width: 1260,
          height: 630,
        });
        await page.screenshot({
          path: `${pathToSaveOgImages}${ogImageName}.png`,
          encoding: "binary",
        });
      }

      await browser.close();
    },
  },
});

export default createOgImage;
