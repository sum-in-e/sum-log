/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro', // grouping 없이 문서만 배치할 경우 해당 문서의 타이틀이 사이드바 라벨로 표시된다.
    {
      type: 'category', // 사이드바 아이템의 계층 구조를 만들 때 category 타입을 설정한다.
      label: 'React', //사이드바에 표시되는 라벨
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'react/about',
        'react/installation',
        // items 내부에 카테고리를 생성하면 하위 항목들도 grouping이 가능하다.
        {
          type: 'category',
          label: 'React Query', //사이드바에 표시되는 라벨
          link: {
            type: 'generated-index',
          },
          collapsed: false,
          items: ['react/reactquery/about', 'react/reactquery/installation'], // id는 파일루트
        },
      ],
    },
    {
      type: 'category',
      label: 'Next.js', //사이드바에 표시되는 라벨
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: ['next/about', 'next/installation'], // id는 파일루트
    },
    // git, github
    {
      type: 'category',
      label: 'Git/Github', //사이드바에 표시되는 라벨
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: ['git/commitConvention'], // id는 파일루트
    },
    // 외부 링크
    {
      type: 'link', // 링크로 타입 지정
      label: 'Github', // 링크 라벨
      href: 'https://github.com/sum-in-e', // 외부 URL
    },
    // 내부 링크 -> nav에는 속하지 않는 독립적인 페이지를 pages폴더에 만들어서 해당 페이지로 이동하게 하는 식으로도 사용 가능
    {
      type: 'link', // 링크로 타입 지정
      label: 'Home', // 링크 라벨
      href: '/', // 내부 경로
    },
  ],
};

module.exports = sidebars;
