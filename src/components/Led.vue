<script>
import { store } from '../store';

export default {
    name: 'Led',
    data() {
        return {
            store,
        }
    },
}

</script>

<template>
    <div class="d-flex gap-1">
        <div class="led-box">
            <div class="led-red" :class="store.power == false ? 'red_animation' : ''"></div>
        </div>
        <div class="led-box">
            <div class="led-yellow" :class="store.power == false ? 'yellow_animation' : ''"></div>
        </div>
        <div class="led-box">
            <div class="led-blue" :class="store.power == false ? 'blue_animation' : ''"></div>
        </div>
    </div>
</template>

<style lang="scss">
.led-box {
    height: 30px;
    width: 30px;
    position: relative;
    left: 190px;
    top: -20px;
}

.led-yellow {
    width: 24px;
    height: 24px;
    background-color: #FF0;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 12px;

}

.yellow_animation {
    -webkit-animation: blinkYellow 1s infinite;
    -moz-animation: blinkYellow 1s infinite;
    -ms-animation: blinkYellow 1s infinite;
    -o-animation: blinkYellow 1s infinite;
    animation: blinkYellow 1s infinite;
}

.led-red {
    width: 24px;
    height: 24px;
    background-color: rgb(222, 0, 0);
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #800202 0 -1px 9px, rgb(255, 0, 0) 0 2px 12px;
}

.red_animation {
    -webkit-animation: blinkRed 1s infinite;
    -moz-animation: blinkRed 1s infinite;
    -ms-animation: blinkRed 1s infinite;
    -o-animation: blinkRed 1s infinite;
    animation: blinkRed 1s infinite;
}

.led-blue {
    width: 24px;
    height: 24px;
    background-color: rgb(0, 41, 222);
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.058) 0 -1px 7px 1px, inset #800202 0 -1px 4px, rgba(0, 162, 255, 0.788) 0 2px 12px;

}

.blue_animation {
    -webkit-animation: blinkBlue 1s infinite;
    -moz-animation: blinkBlue 1s infinite;
    -ms-animation: blinkBlue 1s infinite;
    -o-animation: blinkBlue 1s infinite;
    animation: blinkBlue 1s infinite;
}

//start yellow
@-webkit-keyframes blinkYellow {

    from {
        background-color: #FF0;
    }

    50% {
        background-color: #AA0;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
    }

    to {
        background-color: #FF0;
    }
}

@-moz-keyframes blinkYellow {
    from {
        background-color: #FF0;
    }

    50% {
        background-color: #AA0;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
    }

    to {
        background-color: #FF0;
    }
}

@-ms-keyframes blinkYellow {
    from {
        background-color: #FF0;
    }

    50% {
        background-color: #AA0;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
    }

    to {
        background-color: #FF0;
    }
}

@-o-keyframes blinkYellow {
    from {
        background-color: #FF0;
    }

    50% {
        background-color: #AA0;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
    }

    to {
        background-color: #FF0;
    }
}

@keyframes blinkYellow {
    from {
        background-color: #FF0;
    }

    50% {
        background-color: #AA0;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
    }

    to {
        background-color: #FF0;
    }
}

//start red
@-webkit-keyframes blinkRed {

    from {
        background-color: rgb(255, 0, 0);
    }

    50% {
        background-color: rgb(170, 0, 0);
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
    }

    to {
        background-color: rgb(255, 0, 0);
    }
}

@-moz-keyframes blinkRed {
    from {
        background-color: rgb(255, 0, 0);
    }

    50% {
        background-color: rgb(170, 0, 0);
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
    }

    to {
        background-color: rgb(255, 0, 0);
    }
}

@-ms-keyframes blinkRed {
    from {
        background-color: rgb(255, 0, 0);
    }

    50% {
        background-color: rgb(170, 0, 0);
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
    }

    to {
        background-color: rgb(255, 0, 0);
    }
}

@-o-keyframes blinkRed {
    from {
        background-color: rgb(255, 0, 0);
    }

    50% {
        background-color: rgb(170, 0, 0);
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
    }

    to {
        background-color: rgb(255, 0, 0);
    }
}

@keyframes blinkRed {
    from {
        background-color: rgb(255, 0, 0);
    }

    50% {
        background-color: rgb(170, 0, 0);
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
    }

    to {
        background-color: rgb(255, 0, 0);
    }
}

//start blue
@-webkit-keyframes blinkBlue {

    from {
        background-color: rgb(0, 41, 222);
    }

    50% {
        background-color: rgb(0, 94, 170);
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #023980 0 -1px 9px,
    }

    to {
        background-color: rgb(0, 41, 222);
    }
}

@-moz-keyframes blinkBlue {
    from {
        background-color: rgb(0, 41, 222);
    }

    50% {
        background-color: rgb(0, 94, 170);
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #023980 0 -1px 9px,
    }

    to {
        background-color: rgb(0, 41, 222);
    }
}

@-ms-keyframes blinkBlue {
    from {
        background-color: rgb(0, 41, 222);
    }

    50% {
        background-color: rgb(0, 94, 170);
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #023980 0 -1px 9px,
    }

    to {
        background-color: rgb(0, 41, 222);
    }
}

@-o-keyframes blinkBlue {
    from {
        background-color: rgb(0, 41, 222);
    }

    50% {
        background-color: rgb(0, 94, 170);
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #023980 0 -1px 9px,
    }

    to {
        background-color: rgb(0, 41, 222);
    }
}

@keyframes blinkBlue {
    from {
        background-color: rgb(0, 41, 222);
    }

    50% {
        background-color: rgb(0, 94, 170);
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #023980 0 -1px 9px,
    }

    to {
        background-color: rgb(0, 41, 222);
    }
}
</style>