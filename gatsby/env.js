/**
 * Extract and process any ENV variables required by gatsby build.
 *
 * @file
 */

// The default fallback URL for development.
const fallBack = 'http://localhost:8000'

const envs = {
  development: 'development',
  test: 'test',
  production: 'production',
}

// Attempt to pull the required variables out of the process.env, with defaults filled in
const {
  CWD = process.cwd(),
  NODE_ENV = envs.development,
  BUILD = false,
  BUILD_URL = '',
  FBBUILD = false,
  FBBUILD_URL = '',
  GHPAGES = false,
  GHPAGES_URL = '',
  URL: NETLIFY_SITE_URL = fallBack,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV,
  DRUPAL_CONTENT_API = '',
  GRAPHQL_CONTENT_API = '',
} = process.env

// Check if we're on netlify, and if netlify is using the prod instance. If not, attempts to
// fill in the netlify deploy URL for a given branch. Ultimately it uses the fallback URL in the
// end.
const SITE_URL =
  (BUILD && BUILD_URL) ||
  (FBBUILD && FBBUILD_URL) ||
  (GHPAGES && GHPAGES_URL) ||
  (NETLIFY_ENV === 'production' ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL) ||
  fallBack

module.exports = {
  envs,
  CWD,
  SITE_URL,
  NODE_ENV,
  NETLIFY_ENV,
  NETLIFY_DEPLOY_URL,
  GHPAGES,
  GHPAGES_URL,
  DRUPAL_CONTENT_API,
  GRAPHQL_CONTENT_API,
}
