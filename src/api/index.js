import { NEWS_API_BASE_URL, NEWS_API_KEY } from '@config'

export const getNews = (countryCode = 'us') => {
  return fetch(
    `${NEWS_API_BASE_URL}country=${countryCode}&apiKey=${NEWS_API_KEY}`,
  )
    .then(res => res.json())
    .catch(e => console.log(e))
}
