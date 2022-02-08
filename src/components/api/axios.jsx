import axios from 'axios'

export default axios.create({
  baseURL: 'https://wallet-ae-heroku.herokuapp.com'
})