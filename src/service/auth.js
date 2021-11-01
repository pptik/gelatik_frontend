import api from '@/service/api'

export default {
  getUsers () {
    return api().get('/admin/getUsers')
  },
  deleteUsers (id) {
    return api().delete(`/admin/delete/users/${id}`)
  }
}
