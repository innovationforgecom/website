import path from "node:path";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import "dotenv/config";

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config: Config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        blog: {
          path: 'blog',
          // routeBasePath: '/',
          editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
            `https://github.com/justinnio/website/edit/master/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          blogTitle: "JustInn's Blog",
          blogDescription: 'Blog',
          blogSidebarCount: 10,
          blogSidebarTitle: "JustInn's Blog",
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          feedOptions: {
            type: 'all',
            title: "JustInn's Blog RSS Feed",
            copyright: `Copyright © ${new Date().getFullYear()} Tobias Schüle - JustInn<p><a href="https://www.linkedin.com/in/tobias-schuele" class="footer_lin">LinkedIn</a></p>`,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          authorsMapPath: "authors.yml",
          postsPerPage: Number(process.env.REACT_APP_POSTS_PER_PAGE),
          blogPostComponent: "@theme/BlogPostPage",
        },
        docs: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "My Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/docs/intro",
            label: "Knowledge Base",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    } satisfies Preset.ThemeConfig,

  plugins: [
    "docusaurus-plugin-sass",
    [
      "./src/plugin/plugin-content-docs",
      {
        path: "docs",
        sidebarPath: "./sidebars.ts",
        editUrl: "https://github.com/justinnio/website/edit/main/",
      },
    ],
    [
      "./src/plugin/plugin-content-blog",
      {
        showReadingTime: true,
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl: "https://github.com/justinnio/website/edit/main/",
        authorsMapPath: "authors.yml",
        postsPerPage: Number(process.env.REACT_APP_POSTS_PER_PAGE),
        blogPostComponent: "@theme/BlogPostPage",
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
