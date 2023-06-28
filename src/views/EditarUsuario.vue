<template>
<h2> Editar Información Libro </h2>
   <div class="container">
    <form action="" class="">
        <div class="">
        <label for="id" class="">ID</label>
        <div>
          <input
            type="number"
            name="id"
            id="id"
            class=""
          />
        </div>
      </div>
      <div class="">
        <label for="title" class="">Nombre</label>
        <div>
          <input
            type="text"
            name="title"
            id="title"
            class=""
          />
        </div>
      </div>
      <div class="">
        <label for="body" class="">Resumen</label>
        <div>
          <input
            type="text"
            class=""
            name="body"
            id="body"
          />
        </div>
      </div>
       <div class="">
        <label for="userID" class="">Copias</label>
        <div>
          <input
            type="text"
            class=""
            name="userID"
            id="userID"
          />
        </div>
      </div>
        <!-- <div class="">
          <div class="col">
            <label for="" class="">Correo</label>
            <div class="">
              <input
                type="text"
                class="form-control"
                name="correo"
                id="correo"
                v-model="form.correo"
              />
            </div>
          </div>
          <div class="">
            <label for="" class="">codigo Postal</label>
            <div class="">
              <input
                type="text"
                class="form-control"
                name="codigopostal"
                id="codigopostal"
                v-model="form.codigoPostal"
              />
            </div>
          </div>
        </div>
        <div class="">
          <div class="col">
            <label for="" class="">Genero</label>
            <div class="col-sm-7">
              <input
                type="text"
                class=""
                name="genero"
                id="genero"
                v-model="form.genero"
              />
            </div>
          </div>
          <div class="col">
            <label for="" class="">Telefono</label>
            <div class="col-sm-7">
              <input
                type="text"
                class=""
                name="telefono"
                id="telefono"
                v-model="form.telefono"
              />
            </div>
          </div>
        </div>
        <div class="">
          <label for="" class="">Fecha nacimiento</label>
          <div class="col-sm-4">
            <input
              type="text"
              class=""
              name="fechanacimineto"
              id="telefono"
              v-model="form.fechaNacimiento"
            />
          </div>
        </div> -->
        <div class="">
          <button type="button" class="btn btn-primary" v-on:click="editar()">
            Editar
          </button>
          <button
            type="button"
            class=""
            v-on:click="eliminar()"
          >
            Eliminar
          </button>
          <button
            type="button"
            class=""
            v-on:click="salir()"
          >
            Salir
          </button>
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
         userId: ""
      },
    };
  },
  methods: {
    async editar() {
        try {
            const id = this.form.id;
            const response = await axios.put(`https://jsonplaceholder.typicode.com/users/`+ this.form.id, (this.form)
            )}
            catch(error) {
                console.error(error);
            }
    },
    salir() {
      this.$router.push("/dashboard");
    },
    async eliminar(id) {
      try {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/users/' + this.form.id)
      } 
      catch(error) {
        console.error(error);
      }
    },
  },
  mounted: function () {
    this.form.id = this.$route.params.id;
    axios
      .get("https://api.solodata.es/pacientes?id=" + this.form.id)
      .then((data) => {
        this.form.id = data.data[0].id;
        this.for.title = data.data[0].title;
        this.form.body = data.data[0].body;
        this.form.userId = data.data[0].userId;
      });
  },
};
</script>