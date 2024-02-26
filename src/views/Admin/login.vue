<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3 login-container">
          <h2 class="text-center mb-4">Please log in</h2>
          <hr />
          <form>
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block w-100 mt-3" @click="backofficeBtn">
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const backofficeBtn = () => {
  router.push('/AddCar');
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .login-container {
    margin-top: 50px;
  }
}
</style>
