<template>
  <b-container>
    <div class="home">
      <b-table striped hover :items="user" :fields="fields">
        <template #cell(Action)="data">
          <b-button variant="danger" @click="deleteUsers(data.item._id)">Delete user</b-button>
        </template>
      </b-table>
    </div>
  </b-container>
</template>

<script>
import auth from '@/service/auth'
export default {
  data () {
    return {
      user: [],
      fields: ['EMAIL', 'PASSWORD', 'Action']
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      const users = await auth.getUsers()
      this.user = users.data.data
    },
    async deleteUsers (id) {
      await auth.deleteUsers(id)
      this.getData()
    }
  }
}
</script>
