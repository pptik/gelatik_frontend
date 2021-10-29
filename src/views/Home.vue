<template>
  <b-container>
    <div class="home">

      <b-table striped hover :items="user" :fields="fields"></b-table>
    </div>
  </b-container>
</template>

<script>
import auth from '@/service/auth'
export default {
  data () {
    return {
      user: [],
      fields: ['EMAIL', 'PASSWORD']
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      const users = await auth.getUsers()
      this.user = users.data.data
    }
  }
}
</script>
