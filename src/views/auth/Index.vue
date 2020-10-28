<template>
	<div class="limiter">
		<div class="container-login100">
			<div class="login100-more" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
        <div>
          <img src="@/assets/images/logo-nindya.png" width="15%" style="margin-left: 10px; -webkit-filter: drop-shadow(2px 2px 2px #c52127); filter: drop-shadow(2px 2px 2px #c52127);"/>
        </div>
      </div>

      <!-- v-bind:style="background-image: url('@/assets/images/bg-01.jpg');" -->

			<div class="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
				<form class="login100-form validate-form" @submit.prevent="login">
					<span class="login100-form-title p-b-59">
						Sign In
					</span>
          <div v-if="loginFailed" class="alert alert-danger">
              Email atau Password Anda salah.
          </div>
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<span class="label-input100">Email</span>
						<input class="input100" type="email" name="email" placeholder="Masukan Email" v-model="user.email">
            <div v-if="validation.email" class="mt-2 alert alert-danger">
                Masukkan Email
            </div>
						<span class="focus-input100"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<span class="label-input100">Password</span>
            <input type="button" @click="togglePassword()" class="btn btn-sm" value="Show / Hide" style="float: right; background-color: #e75b24; color: white;">
						<input class="input100" id="password" :type='password_type' name="pass" placeholder="Masukan Password" v-model="user.password">
            <div v-if="validation.password" class="mt-2 alert alert-danger">
                Masukkan Password
            </div>
						<span class="focus-input100"></span>
					</div>

					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button type="submit" class="login100-form-btn">
								Sign In
							</button>
						</div>
					</div>

				</form>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

  export default {
    name: 'Login',

    data() {
      return {
        password: "",
        password_type: "password",
        password_toggle_element: "show",
        image: require('@/assets/images/bg-login.jpg'),
        //state loggedIn with localStorage
        loggedIn: localStorage.getItem('loggedIn'),
        //state token
        token: localStorage.getItem('token'),
        //state user
        user: [],
        //state validation
        validation: [],
        //state login failed
        loginFailed: null
      }
    },

    methods: {
      togglePassword() {
        this.password_type = this.password_type === 'password' ? 'text' : 'password'
      },
      login() {
        if (this.user.email && this.user.password) {
            axios.get('http://localhost:8081/sanctum/csrf-cookie')
                .then(response => {
                    //debug cookie
                    console.log(response)
                    axios.post('http://localhost:8081/api/login', {
                        email: this.user.email,
                        password: this.user.password
                    }).then(res => {
                        //debug user login
                        console.log(res)
                        if (res.data.success) {
                            //set localStorage
                            localStorage.setItem("loggedIn", "true")
                            //set localStorage Token
                            localStorage.setItem("token", res.data.token)
                            //change state
                            this.loggedIn = true
                            //redirect dashboard
                            return this.$router.push({ name: 'dashboard' })
                        } else {
                            //set state login failed
                            this.loginFailed = true
                        }
                    }).catch(error => {
                        this.loginFailed = true
                        console.log(error)
                    })
                })
        }

        this.validation = []

        if (!this.user.email) {
            this.validation.email = true
        }

        if (!this.user.password) {
            this.validation.password = true
        }
      },
    },

    //check user already logged in
    mounted() {
        if (this.loggedIn) {
            return this.$router.push({ name: 'dashboard' })
        }
    }

  }
</script>