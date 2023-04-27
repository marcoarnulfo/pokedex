// store.js
import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    count: 0,
    pokemon: '666',
    pokemon_type: [],
    myPokemons: [],

    callApi() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}`)
            .then(response => {
                console.log(response.data.name); // stampa il nome del pokemon
                console.log(response.data.id); // stampa l'id del pokemon
                //console.log(response.data.types[0].type.name); // accedo al primo tipo. potrebbe essercene anche un secondo
                this.pokemon_type = response.data.types // invio il tipo / i tipi del pokemon nel mio array
                this.myPokemons = response.data
                //console.log(this.pokemon_type);
                console.log(response.data.height) // stampa l'altezza
                console.log(response.data.weight) // stampa il peso
                console.log(response.data.sprites.front_default) // immagine del fronte del pokemon NORMALE
                console.log(response.data.sprites.back_default) // immaigne del back del pokemon NORMALE
                console.log(response.data.sprites.front_shiny) // immagine del fronte del pokemon SHINY
                console.log(response.data.sprites.back_shiny) // immaigne del back del pokemon SHINY
                console.log(response.data)
                console.log(this.myPokemons);

            })
            .catch(error => {
                console.log(error);
            });
    }
})