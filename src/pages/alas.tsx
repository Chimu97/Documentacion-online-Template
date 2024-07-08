import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Features from '@site/src/components/Features'; // Importa el nuevo componente
import styles from './index.module.css';

const ALASPage: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ALAS`}
      description="Documentation for ALAS">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            ALAS Documentation
          </Heading>
          {/* <p className="hero__subtitle">Documentation for ALAS</p> */}
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--secondary button--lg', styles.button)}
              to="/docs/alas/introduction">
              All Documentation here
            </Link>
          </div>
        </div>
      </header>
      <main>
        <Features /> {/* Añade el componente de características */}
      </main>
    </Layout>
  );
};

export default ALASPage;
