<template>
  <b-container>
    <div class="home">
      {{ user }}
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
  </b-container>
</template>

<script>
import auth from '@/service/auth'
export default {
  data () {
    return {
      user: [],
      fields: ['first_name', 'last_name', 'age'],
      items: [
        { isActive: true, age: 20, first_name: 'rifqi riza', last_name: 'irfansyah' }
      ]
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      const users = await auth.getUsers()
      this.user = users
    }
  }
}
</script>
