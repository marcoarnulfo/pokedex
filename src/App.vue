<script>

//import axios from 'axios';
import { store } from './store.js'

export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  mounted() {
    store.callApi()
  }
}


</script>

<template>
  <div class="text-center">
    <div class="bg_img">
      <div class="test">
        <div v-if="store.myPokemons.length < 1">
          PROBLEMI PROBLEMI
          <div class="buttons d-flex"> <!--Blocco dei bottoni next & prev pokemons-->
            <button class="button-30" @click="store.prevPokemon()" role="button"><span
                class="arrow">&#11207;</span></button>
            <button class="button-30" @click="store.nextPokemon()" role="button"><span
                class="arrow">&#11208;</span></button>
          </div>
        </div>
        <div v-else>
          <div class="container_pokemon pt-4"> <!-- Immagine del pokemon-->
            <img class="pokemon" :src="store.getImg()" alt="123">
          </div>
          <div class="buttons d-flex"> <!--Blocco dei bottoni next & prev pokemons-->
            <button class="button-30" @click="store.prevPokemon()" role="button"><span
                class="arrow">&#11207;</span></button>
            <button class="button-30" @click="store.nextPokemon()" role="button"><span
                class="arrow">&#11208;</span></button>
          </div>
          <div class="types d-flex gap-3"> <!--Blocco pokemon's types-->
            <div class="type_test  rounded"> <!-- Blocco bianco-->
              <div :id="store.myPokemons.types[0].type.name" class="type_test d-flex justify-content-center align-items-center rounded"> <!-- Primo tipo-->
                  {{ store.myPokemons.types[0].type.name }}
              </div>
            </div>
            <div class="type_test rounded"> <!-- Blocco bianco-->
              <div v-if="store.myPokemons.types.length > 1" :id="store.myPokemons.types[1].type.name" class="type_test
                d-flex justify-content-center align-items-center rounded"> <!-- Secondo tipo-->
                {{ store.myPokemons.types[1].type.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </div>
    <!-- <img src="./assets/pokechicco.png" alt=""> -->

  </div>
</template>

<style lang="scss" scoped>

@import "./scss/style.scss";
#real_type {
  background-color: blue;
}

.types {
  position: absolute;
  top: 388px;
  left: 418px;
}

.type_test {
  width: 146px;
  background-color: white;
  height: 52px;
}

.arrow {
  font-size: 35px;
}

.buttons {
  position: absolute;
  top: 298px;
  left: 419px;
}

.pokemon {
  width: 200px;
}

.bg_img {
  position: relative;
  margin: auto;
  background-image: url('./assets/newpoke.png');
  background-repeat: no-repeat;
  background-size: contain;
  height: 1000px;
  width: 1000px;
}

.test {
  position: absolute;
  top: 230px;
  left: 180px;
  width: 100px;
  height: 100px;
  /* background: red; */
}

/* CSS */
.button-30 {
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 55px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 25px;
  padding-right: 25px;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s, transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
}

.button-30:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

// .button-30:hover {
//   box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
//   transform: translateY(-2px);
// }

.button-30:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}</style>
