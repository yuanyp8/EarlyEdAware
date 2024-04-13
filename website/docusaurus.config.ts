import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI祺爸',
  tagline: 'Baby Center',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://baby.metavarse。tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yuanyp8', // Usually your GitHub org/user name.
  projectName: 'EarlyEdAware', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/yuanyp8/EarlyEdAware/tree/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
          sidebarCollapsible: true,
          sidebarCollapsed: false,        },
        blog: {
          showReadingTime: true,
          blogTitle: " ❤推送",
          blogSidebarTitle: "文章列表",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/yuanyp8/EarlyEdAware/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],


  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "kids",
        path: "kids",
        routeBasePath: "kids",
        // sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/yuanyp8/EarlyEdAware/tree/master/",
        sidebarCollapsed: true,
        showLastUpdateAuthor: true,
        sidebarCollapsible: true,
        // sidebarCollapsed: false,
        showLastUpdateTime: true,
        breadcrumbs: true,
        include: ['**/*.md', '**/*.mdx',],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "tools",
        path: "tools",
        routeBasePath: "tools",
        // sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/yuanyp8/yuanyp8.github.io/tree/master/",
        sidebarCollapsed: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true,
        include: ['**/*.md', '**/*.mdx',],
      },
    ],
  ],










  // 这里为是增加live-block
  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content: "wiki, blog, c, c++, docker, python, linux, golang, kubernetes",
      },
    ],
    // Replace with your project's social card
    image: 'img/logo.png',
    navbar: {
      title: 'YYPlore',
      hideOnScroll: true,

      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        // 可以调整为黑夜模式
        // srcDark: 'img/docusaurus_keytar.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'doc',
          // sidebarId: 'docsSidebar',
          docId: 'intro',
          position: 'left',
          label: '🖐Docs',
        },
        // 右侧github导航栏
        {
          href: 'https://github.com/yuanyp8/yuanyp8.github.io',
          label: 'GitHub',
          position: 'right',
        },
        // 左侧博客导航栏
        {to: '/blog', label: '❤随笔', position: 'left'},
        {to: '/tools', label: '⚙️Tools', position: 'left'},
        {to: '/life', label: '🚴Life', position: 'left'},
        // {to: '/work', label: '📗Work', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'eBpf专栏',
              to: '/docs/category/ebpf-cookbook',
            },
            {
              label: 'HTTP庖丁解牛',
              to: '/docs/category/http-cookbook',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/yuanyp8',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '随笔',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} YYPlore Project, Stay Hungry Stay Foolish.`,
    },
    prism: {
      // 这里能控制代码块的颜色, theme为白色主题下的代码块
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // 目录层级
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    // 上方横条
    announcementBar: {
      id: 'announcementBar',
      content:
          '🚀 持续更新中··· <b><a target="_blank" rel="noopener noreferrer" href="https://github.com/yuanyp8/yuanyp8.github.io/tree/master/"> 如果你觉得还不错,就给一个⭐️吧~🥳</a> ',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
