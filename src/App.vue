<script>

import { store } from './store.js'
import SearchBar from './components/SearchBar.vue'
import Power from './components/Power.vue'
import Led from './components/Led.vue'
import InputLed from './components/InputLed.vue'
import StatusLed from './components/StatusLed.vue'
import Authors from './components/Authors.vue'


export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  components: {
    SearchBar,
    Power,
    Led,
    InputLed,
    StatusLed,
    Authors
},
  mounted() {
    store.callApi()
  }
}


</script>

<template>
  <div  class="text-center bg_pokemon">
    <Authors/>
    <div>
      <img class="logo" src="./assets/pokemonLogo.png" alt="">
    </div>
    <div class="pokedex">
      <!--Bottone power-->
      <Power></Power>
      <Led></Led>
      <InputLed/>
      <StatusLed/>

      <div class="insidePokedex">
        <!--pagina off-->
        <div v-if="store.power">
          <!--Text area-->
          <div class="text_area"></div>
          <div class="buttons d-flex gap-2"> <!--Blocco dei bottoni next & prev pokemons-->
            <button class="button-30" role="button"><span class="arrow"><i
                  class="fa-solid fa-caret-left"></i></span></button>
            <button class="button-30" role="button"><span class="arrow"><i
                  class="fa-solid fa-caret-right"></i></span></button>
          </div>
          <div class="types d-flex gap-3"> <!--Blocco pokemon's types-->
            <div class="type_test  rounded"> <!-- Blocco bianco-->
              <div class="type_test d-flex justify-content-center align-items-center rounded"> <!-- Primo tipo-->
              </div>
            </div>
            <div class="type_test rounded"> <!-- Blocco bianco-->
              <div class="type_test
                  d-flex justify-content-center align-items-center rounded"> <!-- Secondo tipo-->
              </div>
            </div>
          </div>
          <!--Bottone shiny-->
          <div class="shiny">
            <button id="shiny_button" class="button-30">
              <img class="shiny_img" src="./assets/shiny.png" alt="">
            </button>
          </div>
          <!--Bottone spin e gender-->
          <div class="spin  d-flex gap-3">
            <button id="switch_button" class="button-30">
              <img class="switch_img" src="./assets/switch2.png" alt="">
            </button>
            <!--Cambio gender-->
            <button
              :id="store.path == 'male' ? 'male' : '' + store.path == 'female' ? 'female' : '' + store.path == 'male&female' ? 'maleFemale' : ''"
              class="button-30 disable">
              <img class="switch_img" :src="store.getImagePath(`${store.path}`)" alt="">
            </button>
          </div>
        </div>

        <!--Pagina on-->

        <div v-else>
          <SearchBar></SearchBar>
          <div class="container_pokemon pt-4"> <!-- Immagine del pokemon-->
            <img v-if="store.errore == false" class="pokemon" :src="store.getImg()" alt="">
            <div v-else class="questionMark">
              
              <img src="./assets/questionMark.png" alt="">
              <div>
                Nessun pokemon trovato!
              </div>
            </div>
          </div>
          <div class="buttons d-flex gap-2"> <!--Blocco dei bottoni next & prev pokemons-->
            <button class="button-30" @click="store.prevPokemon()" role="button"><span class="arrow"><i
                  class="fa-solid fa-caret-left"></i></span></button>
            <button class="button-30" @click="store.nextPokemon()" role="button"><span class="arrow"><i
                  class="fa-solid fa-caret-right"></i></span></button>
          </div>
          <div class="types d-flex gap-3"> <!--Blocco pokemon's types-->
            <div class="type_test  rounded"> <!-- Blocco bianco-->
              <div v-if="store.errore == false" :id="store.myPokemons.types[0].type.name"
                class="type_test d-flex justify-content-center align-items-center rounded"> <!-- Primo tipo-->
                {{ store.myPokemons.types[0].type.name }}
              </div>
            </div>
            <div class="type_test rounded"> <!-- Blocco bianco-->
              <div v-if="store.errore == false">
                <div v-if="store.myPokemons.types.length > 1" :id="store.myPokemons.types[1].type.name" class="type_test
                  d-flex justify-content-center align-items-center rounded"> <!-- Secondo tipo-->
                {{ store.myPokemons.types[1].type.name }}
              </div>
              </div>
              
            </div>
          </div>
          <!--Bottone shiny-->
          <div class="shiny">
            <button id="shiny_button" class="button-30" @click="store.shinyButton()">
              <img class="shiny_img" :class="store.shiny ? 'shiny_filter' : ''" src="./assets/shiny.png" alt="">
            </button>
          </div>
          <!--Bottone spin e gender-->
          <div class="spin  d-flex gap-3">
            <button id="switch_button" class="button-30" @click="store.spinButton()">
              <img class="switch_img" src="./assets/switch2.png" alt="">
            </button>
            <!--Cambio gender-->
            <button
              :id="store.path == 'male' ? 'male' : '' + store.path == 'female' ? 'female' : '' + store.path == 'male&female' ? 'maleFemale' : ''"
              class="button-30" @click="store.changeGender()">
              <img class="switch_img" :src="store.getImagePath(`${store.path}`)" alt="">
            </button>
          </div>
          <!--Statistiche Pokemon-->
          <div id="info">
            <div>Nome: <span v-if="store.errore == false">{{ store.myPokemons.name }}</span> <span v-else >?</span></div>
            <div>Altezza: <span v-if="store.errore == false">{{ store.myPokemons.height / 10 }} m</span> <span v-else >?</span></div>
            <div>Peso: <span v-if="store.errore == false">{{ store.myPokemons.weight / 10 }} kg</span> <span v-else >?</span></div>
          </div>
          <!--Numero Pokemon-->
          <div class="info_id">
            <div>N° <span v-if="store.errore== false" >{{ store.myPokemons.id }}</span>  <span v-else >?</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./scss/style.scss";

.logo{
  height: 150px;
}
.bg_pokemon{
  background-image: url('./assets/bg_pokemon.png');
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.text_area {
  position: absolute;
  top: 171px;
  left: 420px;
  width: 305px;
  height: 90px;
  background-color: rgb(121, 194, 134);
  border-radius: 15px;
  box-shadow: 0px 0px 2px 2px;
}

.hide {
  display: none;
}


#female_img {
  width: 20px;
  height: 26px;
}

#switch_button,
#female,
#male,
#maleFemale {
  padding: 0;
  padding-left: 0;
  padding-right: 0;
  height: 42px;
  width: 42px;
  border-radius: 50%;
  background-color: #e3e3e3;
}


#male {
  background-color: rgb(91, 186, 245);
  box-shadow: inset 0px -3px 0px 0px rgba(0, 0, 0, 0.3), inset 0px -3px 0px 0px transparent;
}

#maleFemale {
  background-image: linear-gradient(to right, palevioletred 50%, rgb(91, 186, 245) 50%);
  box-shadow: inset 0px -3px 0px 0px rgba(0, 0, 0, 0.3), inset 0px -3px 0px 0px transparent;
}

#female {
  background-color: palevioletred;
  box-shadow: inset 0px -4px 0px 0px rgba(0, 0, 0, 0.5), inset 0px -3px 0px 0px transparent;
}

.switch_img {
  width: 25px;
  height: 25px;
}

#real_type {
  background-color: blue;
}

.types {
  position: absolute;
  top: 388px;
  left: 418px;
  font-size: 20px;
}

.type_test {
  width: 146px;
  background-color: rgb(121, 194, 134);
  box-shadow: 0px 0px 2px 2px;
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
.questionMark{
  height:200px;
  width: 200px;
  img{
    padding-top: 1rem;
    width: 40%;
  }
  div{
    padding-top: 1rem;
    font-size: 20px;
  }
}

.pokedex {
  position: relative;
  margin: auto;
  background-image: url('./assets/newpoke_1.png');
  background-repeat: no-repeat;
  background-size: contain;
  height: 1000px;
  width: 1000px;
}

.insidePokedex {
  position: absolute;
  top: 230px;
  left: 180px;
  width: 100px;
  height: 100px;

}

#shiny_button {
  padding: 0;
  padding-left: 0;
  padding-right: 0;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #e3e3e3;
}

.shiny_img {
  width: 30px;
  height: 30px;
}

.shiny_filter {
  filter: invert(59%) sepia(12%) saturate(1980%) hue-rotate(290deg) brightness(92%) contrast(83%);
}

.button-30 {
  align-items: center;
  appearance: none;
  background-color: #e3e3e3;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #c3c3c3 0 -3px 0 inset;
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



.button-30:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}

.shiny {
  position: absolute;
  top: 238px;
  right: 91px;
}

.spin {
  position: absolute;
  top: 315px;
  right: 0px;
}

#info {
  width: 300px;
  text-align: initial;
  position: relative;
  top: -185px;
  left: 430px;
  font-size: 25px;
}

.info_id {
  position: relative;
  top: 55px;
  left: 0px;
  font-size: 25px;
}


</style>
