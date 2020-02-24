import axios from 'axios'

axios.defaults.baseURL = ''

axios.interceptors.request.use(function (config) {
  // eslint-disable-next-line valid-typeof
  if (typeof window === undefined) {
    return config // when code will run on server (server side rendring), localhost will not be available so directly returning the config
  }

  config.header.Authorization = '' // get token from localhost and set here
  return config
})

const appService = {
  getPosts () {
    return new Promise(resolve => {
      axios.get('')
        .then(response => {
          resolve(response)
        })
    })
  }
}

export default appService
