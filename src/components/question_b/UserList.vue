<template>
  <div>
    <input v-model="searchText" placeholder="Search users" @input="filterUsers" />
    <select v-model="selectedFilter" @change="filterUsers">
      <option value="">Select Filter</option>
      <option value="id">ID</option>
      <option value="username">Username</option>
      <option value="name">Name</option>
      <option value="phone">Phone</option>
      <option value="email">Email</option>
      <option value="website">Website</option>
      <!-- Add more options for filtering -->
    </select>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>website</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.website }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="12">
            <div class="right-btn">
              <button @click="prevPage" :disabled="currentPage === 1">Previous Page</button>
              <span class="page-count">{{ currentPage }}</span>
              <button @click="nextPage" :disabled="currentPage * itemsPerPage >= totalUsers">
                Next Page
              </button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5,
      searchText: '',
      selectedFilter: ''
    }
  },
  computed: {
    ...mapGetters({
      getUsers: 'questionB/getUsers'
    }),
    totalUsers() {
      return this.getUsers.length
    },
    filteredUsers() {
      let users = this.getUsers
      
      if (this.searchText && !this.selectedFilter) {
        const query = this.searchText.toLowerCase()
        users = users.filter((user) => {
          return (
            user.id.toString().includes(query) ||
            user.username.toLowerCase().includes(query) ||
            user.name.toLowerCase().includes(query) ||
            user.phone.includes(query) ||
            user.email.toLowerCase().includes(query) ||
            user.website.toLowerCase().includes(query)
          )
        })
      }
      if (this.selectedFilter) {
        console.log('this.selectedFilter', this.selectedFilter)
        if (this.selectedFilter == 'id') {
          users = users.filter((user) => user[this.selectedFilter] === this.searchText)
        } else {
          users = users.filter((user) =>
            user[this.selectedFilter].toLowerCase().includes(this.searchText.toLowerCase())
          )
        }
      }
      return users.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage
      )
    }
  },
  methods: {
    ...mapActions({
      fetchUsers: 'questionB/fetchUsers'
    }),
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1
      }
    },
    nextPage() {
      if (this.currentPage * this.itemsPerPage < this.totalUsers) {
        this.currentPage += 1
      }
    },
    filterUsers() {
      this.currentPage = 1
    }
  },
  created() {
    this.fetchUsers()
  }
}
</script>

<style scoped>
input {
  margin-right: 20px;
}
button {
  margin-right: 10px;
}
.page-count{
  padding: 0 15px 0 15px;
  font-weight: 700
}
</style>
