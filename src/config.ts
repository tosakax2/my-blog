export const SITE_TITLE = "T2-Lab";
export const SITE_DESCRIPTION = "tosakax2の個人ブログ";
export const SITE_URL = "https://t2-lab.pages.dev";
export const LANGUAGE = "ja";
export const AUTHOR = "tosakax2";

export const SEO_DEFAULTS = {
  titleDefault: SITE_TITLE,
  titleTemplate: "%s - " + SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    basic: {
      title: SITE_TITLE,
      type: "website",
      image: `${SITE_URL}/images/default-image.png`,
    },
    optional: {
      description: SITE_DESCRIPTION,
    },
    image: {
      alt: "T2-Lab default image",
    },
  },
  twitter: {
    site: "@tosakax2",
    card: "summary_large_image",
    creator: "@tosakax2",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    image: `${SITE_URL}/images/default-image.png`,
    imageAlt: "T2-Lab default image",
  },
};
