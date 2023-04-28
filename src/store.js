// store.js
import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    isFronte: true,
    //error:'',
    count: 0,
    pokemon: '1', // accetta solo lettere minuscole O numeri
    pokemonID: 1,
    myPokemons: [],
    getImg() {
        if (this.isFronte) {
            return store.myPokemons.sprites.front_default
        } else if (!this.isFronte) {
            return store.myPokemons.sprites.back_default
        }
    },

    callApi() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}`)
            .then(response => {
                console.log(response.data.name); // stampa il nome del pokemon
                console.log(response.data.id); // stampa l'id del pokemon
                //console.log(response.data.types[0].type.name); // accedo al primo tipo. potrebbe essercene anche un secondo
                this.myPokemons = response.data
                this.pokemonID = this.myPokemons.id

                //console.log(this.pokemon_type);
                console.log(response.data.height) // stampa l'altezza
                console.log(response.data.weight) // stampa il peso
                console.log(response.data.sprites.front_default) // immagine del fronte del pokemon NORMALE
                console.log(response.data.sprites.back_default) // immaigne del back del pokemon NORMALE
                console.log(response.data.sprites.front_shiny) // immagine del fronte del pokemon SHINY
                console.log(response.data.sprites.back_shiny) // immaigne del back del pokemon SHINY
                console.log(response.data)
                console.log(response.data.types);
                //console.log(this.myPokemons);
                // creare bottone sul pallino nero in basso a sinistra con lo switch maschio to femmina (Creare bottone con immagine MASCHIO sfondo blu al click, animazione switch to immagine logo FEMMINA sfondo rosa. se un pokemon maschio è uguale ad un pokemon femmina. mettere simbolo maschio e femmina chainato) // ricordare di fare un check logico sull'immagine della femmina. se non c'è restituisce null
                // creare creare stellina forse rosa sul bottone rosso per lo switch to shiny
                // usare i rettangolini vicino al pallino nero per switch front img to back img
                // if(this.pokemon == String){
                //     this.pokemonID = response.data.id 
                //     this.pokemon = this.pokemonID
                // }
                console.log(this.pokemon, 'this.pokemon');
                console.log(response.data.id);
                console.log(this.myPokemons.id);
            })
            .catch(error => {
                console.log(error);
                this.myPokemons = []
            });
    },

    // test(){
    //     this.pokemon++
    //     this.callApi()
    // }
    nextPokemon() {
        if (typeof this.pokemon === 'string') {
            this.pokemonID++
            this.pokemon = this.pokemonID
            this.callApi()
        } else {
            this.pokemonID++
            this.pokemon = this.pokemonID
            this.callApi()
        }
        //this.pokemon = this.pokemonID
    },
    prevPokemon() {
        if (typeof this.pokemon === 'string' || this.pokemonID > 1) {
            console.log('sono dentro IF type OFF &&');
            this.pokemonID--
            this.pokemon = this.pokemonID
            this.callApi()
        }
    }

})