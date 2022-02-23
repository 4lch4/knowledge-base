import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import classnames from 'classnames'
import React from 'react'
import Feature from '../components/Feature'
import styles from './styles.module.css'
import Head from '@docusaurus/Head'
import features from '../components/Features'
import Link from '@docusaurus/Link'

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout description={siteConfig.tagline}>
      <Head>
        <script type="text/javascript" src="https://js-cdn.dynatrace.com/jstag/16362cc0dec/bf48922oxv/4b6329f719b105fd_complete.js" crossorigin="anonymous"></script>
        <script type="text/javascript" src="https://countly.4lch4.cloud/sdk/web/countly.min.js"></script>
      </Head>

      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
