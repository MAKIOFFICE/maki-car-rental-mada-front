<template>
    <div>
        <div class="signup-container">
            <div>
              <div class="col-md-6 mt-2 mb-3 d-flex ms-auto">
                <input type="text" placeholder="Search" class="form-control" />
              </div>
            </div>
            <hr />
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Image</th>
                  <th scope="col">Marque</th>
                  <th scope="col">Dispo</th>
                  <th scope="col">Lieu</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Lorem ipsum</td>
                  <td>Lorem ipsum</td>
                  <td>Lorem ipsum</td>
                  <td>Lorem ipsum</td>
                  <td>Lorem ipsum</td>
                  <td class="tdbtn">
                    <a
                      class="adrIcplus"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      >Detail</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.signup-container {
  width: 100%;
  /* height: 550px; */
  /* overflow-y: scroll; */
  margin-bottom: 20px;
  background-color: #ffffff;
  padding: 20px;
}
.adrIcplus{
  color: #fff;
  padding: 6px 15px;
  border-radius: 8px;
  cursor: pointer;
  background-color: rgb(21, 131, 209);
}
</style>