import axios from 'axios'

export default {
    getNewsRecommend: function (params) {
      return axios.get('api/news/recommend', {
        params: params
      })
    },
    getNewsLists: function (params) {
      return axios.get('api/news', {
        params: params
      })
    },
    getNewsDetail: function (id) {
      return axios.get('api/news/' + id)
    },

    getPage1: function (id) {
        return axios.get('api/news/' + id)
    },

    getPage2: function (id) {
        return axios.get('api/news/' + id)
    },

}

