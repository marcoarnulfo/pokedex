<script>

//import axios from 'axios';
import {store} from './store.js'

export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  mounted(){
    store.callApi()
  }
}


</script>

<template>
  <h1>{{ store.count }}</h1>
  <button class="btn btn-primary" @click="store.callApi()">Call API</button>
  <div class="text-center">
    <div class="bg_img">
      <div class="test">
        <div v-if="store.myPokemons.length < 1">

        </div>
        <div v-else>
          {{ store.myPokemons.sprites.front_default }}
          <img class="pokemon" :src="store.myPokemons.sprites.front_default" alt="123"> 

        </div>
      </div>

    </div>
    <!-- <img src="./assets/pokechicco.png" alt=""> -->

  </div>


</template>

<style lang="scss" scoped>

.pokemon{
  width: 200px;
}
.bg_img{
  position: relative;
  margin: auto;
  background-image: url('./assets/pokedex.png');
  background-repeat: no-repeat;
  background-size: contain;
  height: 1000px;
  width: 1000px;
}
.test{
  position: absolute;
  top: 230px;
  left: 180px;
  width: 100px;
  height: 100px;
  /* background: red; */
}

</style>
