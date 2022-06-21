import axios from 'axios'
import { API_URL } from '../constants/constants'

class API {
  static async getForm() {
    const data = await axios.get(`${API_URL}/public/getForm`).then((result) => result.data.result.template)
    return data
  }

  static async getScreen(id) {
    const data = await axios.get(`${API_URL}/public/getScreen?id=${id}`).then((result) => result.data.result)
    return data
  }

  static async getApp(id) {
    const data = await axios.get(`${API_URL}/public/getApp?id=${id}`).then((result) => result.data.result)
    return data
  }

  static async createScreen(payload) {
    console.log('API createScreen(): ', payload)
    const data = await axios.post(`${API_URL}/public/createScreen`, payload).then((result) => result.data.result)
    return data
  }

  static async updateScreen(payload) {
    console.log('API updateScreen(): ', payload)
    const data = await axios.put(`${API_URL}/public/updateScreen`, payload).then((result) => result.data.result)
    return data
  }

  static async getAppScreens(id) {
    const data = await axios.get(`${API_URL}/public/getAppScreens?appId=${id}`).then((result) => result.data.result)
    return data
  }

  static async getApps() {
    const data = await axios.get(`${API_URL}/public/getApps`).then((result) => result.data.result)
    return data
  }

  static async getAppTemplates() {
    const data = await axios.get(`${API_URL}/public/getAppTemplates`).then((result) => result.data.result)
    return data
  }

  static async getScreens() {
    const data = await axios.get(`${API_URL}/public/getScreens`).then((result) => result.data.result)
    return data
  }

  static async getScreenTemplates() {
    const data = await axios.get(`${API_URL}/public/getScreenTemplates`).then((result) => result.data.result)
    return data
  }

  static async getForms() {
    const data = await axios.get(`${API_URL}/public/getForms`).then((result) => result.data.result)
    return data
  }

  static async getFormTemplates() {
    const data = await axios.get(`${API_URL}/public/getFormTemplates`).then((result) => result.data.result)
    return data
  }

  static async preview(id) {
    const data = await axios.get(`${API_URL}/public/preview?id=${id}`).then((result) => result.data.result)
    return data
  }

  static async publish(id) {
    const data = await axios.get(`${API_URL}/public/publish?id=${id}`).then((result) => result.data.result)
    return data
  }
}

export default API
