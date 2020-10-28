<template>
    <!-- Topbar -->
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

      <!-- Sidebar Toggle (Topbar) -->
      <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
        <i class="fa fa-bars"></i>
      </button>

      <!-- Topbar Navbar -->
      <ul class="navbar-nav ml-auto">

        <div class="topbar-divider d-none d-sm-block"></div>

        <!-- Nav Item - User Information -->
        <li class="nav-item dropdown no-arrow">
          <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ user.name }}</span>
            <img class="img-profile rounded-circle" src="@/assets/images/user.png">
          </a>
          <!-- Dropdown - User Information -->
          <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
            <a @click="logout" class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
              <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </a>
          </div>
        </li>

      </ul>

    </nav>
    <!-- End of Topbar -->
</template>

<script>
import axios from 'axios'

export default {
  data() {
        return {
            //state loggedIn with localStorage
            loggedIn: localStorage.getItem('loggedIn'),
            //state token
            token: localStorage.getItem('token'),
            //state user logged In
            user: []
        }
    },

    created() {
        axios.get('http://localhost:8081/api/user', {headers: {'Authorization': 'Bearer '+this.token}})
        .then(response => {
            console.log(response)
            this.user = response.data // assign response to state user
        })
    },

    methods: {
        logout() {
            axios.post('http://localhost:8081/api/logout')
            .then(() => {
                //remove localStorage
                localStorage.removeItem("loggedIn")    

                //redirect
                return this.$router.push({ name: 'login' })
            })
        }
    },

    //check user logged in or not
    mounted() {
        if(!this.loggedIn) {
            return this.$router.push({ name: 'login' })
        }
    }
}
</script>
