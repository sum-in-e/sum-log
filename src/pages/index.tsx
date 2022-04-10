import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Home from '../components/Home/Home';

export default function HomePage() {
  // useDocusaurusContext를 이용해 docusaurus.config.js에 설정한 config 설정을 가져올 수 있다.
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={`Welcome to ${siteConfig.title}`}
    >
      <main>
        <Home />
      </main>
    </Layout>
  );
}
