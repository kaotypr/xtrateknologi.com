const LOCAL_URL = 'http://localhost:3000'
const PRODUCTION_URL = 'https://xtrateknologi.com'

export let WEB_URL = LOCAL_URL

if (process.env.NODE_ENV === 'production') {
  WEB_URL = PRODUCTION_URL
}
