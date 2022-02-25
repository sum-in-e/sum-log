// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'sum-log',
  tagline: 'sum-log',
  url: 'https://sum-log.vercel.app/', // 배포된 사이트 url
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/sumlogo.svg',
  organizationName: 'sumin', // Usually your GitHub org/user name.
  projectName: 'sum-log', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/sum-in-e/sum-log',
        },
        blog: {
          blogTitle: 'sum-log에 오신 것을 환영합니다!',
          blogDescription: `Sumin's blog!`,
          blogSidebarTitle: 'All posts', // 사이드바 최상단에 보여지는 타이틀
          blogSidebarCount: 'ALL', // 모든 게시물 보일 수 있도록 설정 / '0'설정 시 사이드바 비활성화
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/sum-in-e/sum-log',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 글로벌 메타데이터
      metadata: [{ name: 'sum-log', content: 'development, blog' }],
      // navbar 설정
      navbar: {
        title: 'Sum-log',
        logo: {
          alt: 'Sum-log Logo',
          src: 'img/sumlogo.svg',
        },
        items: [
          // doc 초기 세팅
          {
            type: 'doc',
            docId: 'intro', // docs탭 클릭 시 첫 페이지에 보여질 docId
            position: 'left',
            label: 'Docs', // navbar에 보여질 메뉴 이름
          },
          // blog 초기 세팅
          { to: '/blog', label: 'Blog', position: 'left' },
          // Github 링크 연결
          {
            href: 'https://github.com/sum-in-e',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer 설정
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '내용 정리',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/sum-in-e',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/sum-in-e',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sum-log, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
