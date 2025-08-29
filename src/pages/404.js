import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import _get from 'lodash/get'
import AlertTriangle from 'react-feather/dist/icons/alert-triangle'
import Seo from '../components/Seo'

import Layout from '../components/Layout'

const NotFoundPage = ({ children }) => (
  <StaticQuery
    query={graphql`
      query NotFoundPageQuery {
        globalSettings: settingsYaml {
          siteTitle
        }
      }
    `}
    render={data => (
      <Layout>
        <section className="section thick">
          <div className="container skinny taCenter">
            <p>
              <AlertTriangle size="5rem" />
            </p>
            <h1>404 - Page Not Found</h1>
            <p>
              We can't find the page you are looking for!
              <br />
              Head back to{' '}
              <Link to="/">{_get(data, 'globalSettings.siteTitle')}</Link>
            </p>
          </div>
        </section>
      </Layout>
    )}
  />
)

export default NotFoundPage

export const Head = ({ location }) => (
  <Seo 
    title="404 – Page Not Found"
    description="The page you are looking for could not be found."
    pathname={location.pathname}
    noindex={true}
  />
)
