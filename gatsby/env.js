/**
 * Extract and process any ENV variables required by gatsby build.
 *
 * @file
 */

// Load current env/local .env files. Details on usage: https://github.com/kerimdzhanov/dotenv-flow#files-under-version-control
require('dotenv-flow').config()

// The default fallback URL for development.
const fallBack = 'http://localhost:8000'

// Attempt to pull the required variables out of the process.env, with defaults filled in
const {
  NODE_ENV = 'development',
  GHPAGES = false,
  URL: NETLIFY_SITE_URL = fallBack,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env

// Check if we're on netlify, and if netlify is using the prod instance. If not, attempts to
// fill in the netlify deploy URL for a given branch. Ultimately it uses the fallback URL in the
// end.
const SITE_URL = NETLIFY_ENV === 'production' ?
  NETLIFY_SITE_URL :
  (NETLIFY_DEPLOY_URL || fallBack)

module.exports = {
  SITE_URL,
  NODE_ENV,
  NETLIFY_ENV,
  NETLIFY_DEPLOY_URL,
  GHPAGES,
}
