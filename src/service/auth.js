import api from '@/service/api'

export default {
  getUsers () {
    return api().get('/admin/getUsers')
  }
}
