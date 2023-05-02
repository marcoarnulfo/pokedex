// store.js
import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    inputCounter: true,
    isFronte: true,
    isMale: false,
    shiny: false,
    power: true,
    errore: false,
    path: 'female',
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
        if (!this.errore) {
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
        }
    },
    callApi() {
        if (typeof this.pokemon === 'string') {
            this.pokemon = this.pokemon.toLowerCase()
        }
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}`)
            .then(response => {
                this.errore = false
                this.myPokemons = response.data
                this.pokemonID = this.myPokemons.id
                this.pokemon = this.pokemonID 
                if (store.myPokemons.sprites.front_female !== null) {
                    // se c'è differenza tra generi is male va a false
                    this.isMale = true
                    this.path = 'male'
                    this.frontImg = store.myPokemons.sprites.front_default
                } else { // se non c'è differenza tra generi, is male va a true
                    this.frontImg = store.myPokemons.sprites.front_default
                    this.isMale = true
                    this.path = 'male&female'
                    
                }
            })
            .catch(error => {
                //console.log(error);
                this.myPokemons = []
                this.path = 'male&female'
                this.errore = true
            });
    },
    nextPokemon() {
        if (!this.errore) {
            
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
        }
    },
    prevPokemon() {
        if (!this.errore) {
            if (typeof this.pokemon === 'string' || this.pokemonID > 1) {
                //Reset shiny/spin
                if (this.shiny || !this.isFronte) {
                    this.shiny = false
                    this.isFronte = true
                }
                this.pokemonID--
                this.pokemon = this.pokemonID
                this.callApi()
            }
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
    },
    playSound(sound) {
        if (sound) {
            var audio = new Audio(sound);
            audio.play();
        }
    },
    powerOn() {
        if (!this.power) {
            this.power = true
        } else {
            this.power = false
            this.pokemon = 'bulbasaur'
            this.callApi()
            console.log('if power on');
        }
    },
    firstLed(){
        if (this.inputCounter) {
            let firstElement = document.querySelector('.first')
            firstElement.classList.add('yellow_animation')
            setTimeout(() => {
                firstElement.classList.remove('yellow_animation')
            }, 500)
            this.inputCounter = false
        } else {
            let firstElement = document.querySelector('.second')
            firstElement.classList.add('blue_animation')
            setTimeout(() => {
                firstElement.classList.remove('blue_animation')
            }, 500)
            this.inputCounter = true
        }
    }
})