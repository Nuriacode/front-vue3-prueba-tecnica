<template>
  <h2 class="title">Editar Información Libro</h2>
  <div class="container">
    <form action="" class="">
      <div class="inputs">
      <label for="id" class="">ID</label>
      
        <input type="number" name="id" v-model="form.id" class="" />
      </div>
      <div class="inputs">
        <label for="title" class="">Nombre</label>

        <input type="text" name="title" v-model="form.title" class="" />
      </div>
      <div class="inputs">
        <label for="body" class="">Resumen</label>

        <input type="text" class="" name="body" v-model="form.body" />
      </div>
      <div class="inputs">
        <label for="userID">Copias</label>

        <input type="text" v-model="form.userId" name="userID" id="userID" />
      </div>
      <div class="buttons">
        <button type="button" class="btn btn-primary" v-on:click="editar()">
          Editar
        </button>
        <button type="button" class="" v-on:click="eliminar()">Eliminar</button>
        <button type="button" class="" v-on:click="salir()">Salir</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "EditarUsuario",
  data: function () {
    return {
      form: {
        id: "",
        title: "",
        body: "",
        userId: "",
      },
    };
  },
  methods: {
    async editar() {
      try {
        const id = this.form.id;
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/users/` + id,
          this.form
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    salir() {
      this.$router.push("/dashboard");
    },
    async eliminar() {
      try {
        await axios.delete(
          "https://jsonplaceholder.typicode.com/users/" + this.form.id
        );
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted: async function () {
    this.form.id = this.$route.params.id;
    const data = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + this.form.id
    );
    console.log(data);
    console.log(this.form);
    this.form.id = data.data.id;
    this.form.title = data.data.title;
    this.form.body = data.data.body;
    this.form.userId = data.data.userId;
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: rgb(131, 139, 246);
  text-align: center;
  margin-top: 50px;
  margin-bottom: -100px;
}
.container {
    display: flex;
  flex-direction: column;
  height: 89vh;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  justify-content: center;
  align-content: center;
  align-items: center;
   .inputs {
    display: flex;
    flex-direction: column;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    gap: 5px;
    width: 200px;
    margin-bottom: 10px;
    input {
      border-radius: 5px;
      height: 25px;
    }
  }
}

.buttons {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
  height: 25px;
  border-radius: 7px;
  width: 150px;
  align-content: center;
  align-self: center;
  button {
    background-color: rgb(211, 255, 192);
    border-radius: 7px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
}
</style>
