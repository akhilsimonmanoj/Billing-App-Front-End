import Axios from 'axios'

const axios = Axios.create ({
    baseURL : 'http://localhost:3050/api'
})

export default axios