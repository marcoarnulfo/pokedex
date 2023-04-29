// store.js
import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    isFronte: true,
    isMale: false,
    shiny: false,
    path: 'male',
    pokemon: 'bulbasaur', // accetta solo lettere minuscole O numeri
    pokemonID: 1,
    myPokemons: [],
    frontImg: '',
    getImagePath: function (imgPath) {
        return new URL(`./assets/${imgPath}.png`, import.meta.url).href;
    },
    getImg() {
        if (this.isMale) {
            if (this.isFronte) {
                if (this.shiny) {
                    return store.myPokemons.sprites.front_shiny;
                }
                return store.myPokemons.sprites.front_default;
            } else {
                if (this.shiny) {
                    return store.myPokemons.sprites.back_shiny;
                }
                return store.myPokemons.sprites.back_default;
            }
        } else {
            if (this.isFronte) {
                if (this.shiny) {
                    return store.myPokemons.sprites.front_shiny_female;
                }
                return store.myPokemons.sprites.front_female;
            } else {
                if (this.shiny) {
                    return store.myPokemons.sprites.back_shiny_female;
                }
                return store.myPokemons.sprites.back_female;
            }
        }
    },
    changeGender: function () {
        if (store.myPokemons.sprites.front_female !== null) {
            // Inverti il valore di isMale prima di aggiornare frontImg
            if (!this.isMale) {
                this.isMale = true
                this.path = 'male'
            } else {
                this.isMale = false
                this.path = 'female'
            }
            // Aggiorna frontImg in base al genere
            if (this.isMale) {
                this.frontImg = store.myPokemons.sprites.front_default
            } 
        }
    },
    callApi() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}`)
            .then(response => {
                //this.isMale = true
                console.log(response.data.name); // stampa il nome del pokemon
                console.log(response.data.id); // stampa l'id del pokemon
                //console.log(response.data.types[0].type.name); // accedo al primo tipo. potrebbe essercene anche un secondo
                this.myPokemons = response.data
                this.pokemonID = this.myPokemons.id
                this.pokemon = this.pokemonID // bug bulbasaur fix

                //console.log(this.pokemon_type);
                console.log(response.data.height) // stampa l'altezza
                console.log(response.data.weight) // stampa il peso
                console.log(response.data.sprites.front_default) // immagine del fronte del pokemon NORMALE
                console.log(response.data.sprites.back_default) // immaigne del back del pokemon NORMALE
                console.log(response.data.sprites.front_shiny) // immagine del fronte del pokemon SHINY
                console.log(response.data.sprites.back_shiny) // immaigne del back del pokemon SHINY
                console.log(response.data)
                console.log(response.data.types);
                console.log(this.pokemon, 'this.pokemon');
                console.log(this.pokemonID, 'this.pokemonID');
                console.log(this.myPokemons.name, 'this.pokemon.name');
                console.log(response.data.id);
                console.log(this.myPokemons.id);
                if (store.myPokemons.sprites.front_female !== null) {
                    // se c'è differenza tra generi is male va a false
                    this.isMale = true
                    this.path = 'male'
                    console.log(this.isMale, 'è femmina?');
                    this.frontImg = store.myPokemons.sprites.front_default
                } else { // se non c'è differenza tra generi, is male va a true
                    this.frontImg = store.myPokemons.sprites.front_default
                    this.isMale = true
                    this.path = 'male&female'
                    console.log(this.isMale, 'è maschio?');
                }
            })
            .catch(error => {
                console.log(error);
                this.myPokemons = []
            });
    },
    nextPokemon() {
        if (typeof this.pokemon === 'string') {
            //Reset shiny/spin
            if (this.shiny || !this.isFronte) {
                this.shiny = false
                this.isFronte = true
            }
            this.pokemonID++
            this.pokemon = this.pokemonID
            this.callApi()
        } else {
            //Reset shiny/spin
            if (this.shiny || !this.isFronte) {
                this.shiny = false
                this.isFronte = true
            }
            this.pokemonID++
            this.pokemon = this.pokemonID
            this.callApi()
        }
        //this.pokemon = this.pokemonID
    },
    prevPokemon() {
        if (typeof this.pokemon === 'string' || this.pokemonID > 1) {
            console.log('sono dentro IF type OFF &&');
            //Reset shiny/spin
            if (this.shiny || !this.isFronte) {
                this.shiny = false
                this.isFronte = true
            }
            this.pokemonID--
            this.pokemon = this.pokemonID
            console.log(this.pokemon, 'this.pokemon dentro bottone');
            console.log(this.pokemonID, 'this.pokemon dentro bottone');
            this.callApi()
        }
    },
    shinyButton() {
        if (!this.shiny) {
            this.shiny = true
        } else {
            this.shiny = false
        }
    },
    spinButton() {
        if (!this.isFronte) {
            this.isFronte = true
        } else {
            this.isFronte = false
        }
    }

})