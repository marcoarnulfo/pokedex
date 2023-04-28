<script>
import { store } from '../store';
export default {
    name: 'SearchBar',
    data() {
        return {
            store
        }
    },
    methods:{
        sendValue(){
            store.pokemon = this.$refs.myInput.value
            console.log(store.pokemon);
            store.callApi()
            this.$refs.myInput.value = ''
        },
    },
    mounted() {
        const input = document.querySelector(".finder__input");
        const finder = document.querySelector(".finder");
        const form = document.querySelector("form");

        input.addEventListener("focus", () => {
            finder.classList.add("active");
        });

        input.addEventListener("blur", () => {
            if (input.value.length === 0) {
                finder.classList.remove("active");
            }
        });

        form.addEventListener("submit", (ev) => {
            ev.preventDefault();
            finder.classList.add("processing");
            finder.classList.remove("active");
            input.disabled = true;
            setTimeout(() => {
                finder.classList.remove("processing");
                input.disabled = false;
                if (input.value.length > 0) {
                    finder.classList.add("active");
                }
            }, 1000);
        });
    },

}
</script>

<template>
    <div class="container_custom">

        <form autocomplete="off">
            <div class="finder">
                <div class="finder__outer">
                    <div class="finder__inner">
                        <div class="finder__icon" ref="icon"></div>
                        <input ref="myInput" @keydown.enter="sendValue()" class="finder__input" type="text" name="q" placeholder="Search Pokemon" />
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
html,
body {
    padding: 0;
    margin: 0;
    color: #292929;
    background-color: #eaeaea;
}

// .container_custom {
    
//         //text-align: center;
//     //     color: #2c3e50;
//     // width: 100%;
//     // height: 100%;
//     // display: flex;
//     // justify-content: center;
//     // align-items: center;
//     // flex-direction: column;

// }

    form {
        //transition: all 0.5s;
        position: absolute;
        top: 171px;
        left: 420px;
    }

    .finder {
        border: 1px solid #fff;
        background-color: #f6f5f0; // colorez
        border-radius: 15px;
        padding: 5px;
        /* // luminosità
        box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6),
            -9px -9px 16px rgba(255, 255, 255, 0.5);
            */
    }

    .finder__outer {
        display: flex;
        width: 295px; // grandezza laterale
        padding: 1.4rem 1.5rem;
        border-radius: 10px;
        box-shadow: inset 10px 10px 15px -10px #c3c3c3,
            inset -10px -10px 15px -10px #ffffff;
    }

    .finder__inner {
        display: flex;
        align-items: center;
        position: relative;
        flex: 1;
    }

    .finder__form {
        flex: 1;
        height: calc(100% + 3rem);
        //height: 50px;
    }

    .finder__input {
        //height: calc(100% + 3rem);
        width: 200px;
        border: none;
        background-color: transparent;
        outline: none;
        font-size: 1.3rem;
        letter-spacing: 0.60px;
    }

    .finder__icon {
        width: 40px;
        height: 40px;
        margin-right: 1rem;
        transition: all 0.2s;
        box-shadow: inset 0 0 0 20px #292929;
        border-radius: 50%;
        position: relative;

        &:after,
        &:before {
            display: block;
            content: "";
            position: absolute;
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        &:after {
            width: 10px;
            height: 10px;
            background-color: #292929;
            border: 3px solid #f6f5f0;
            top: 50%;
            position: absolute;
            transform: translateY(-50%);
            left: 0px;
            right: 0;
            margin: auto;
            border-radius: 50%;

            @at-root .active & {
                border-width: 10px;
                background-color: #f6f5f0;
            }
        }

        &:before {
            width: 4px;
            height: 13px;
            background-color: #f6f5f0;
            top: 50%;
            left: 20px;
            transform: rotateZ(45deg) translate(-50%, 0);
            transform-origin: 0 0;
            border-radius: 4px;

            @at-root .active & {
                background-color: #292929;
                width: 6px;
                transform: rotateZ(45deg) translate(-50%, 25px);
            }
        }

        @at-root .processing & {
            transform-origin: 50%;
            animation: spinner 0.3s linear infinite;
            animation-delay: 0.5s;
        }

        @at-root .active & {
            transform: translateY(-5px);
        }
    }

    @keyframes spinner {
        0% {
            transform: rotateZ(45deg);
        }

        100% {
            transform: rotateZ(405deg);
        }
    }
</style>