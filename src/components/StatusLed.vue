<script>


import { store } from '../store';

export default {
    name: 'StatusLed',
    data() {
        return {
            store,
        }
    },
    methods: {
    }
}
</script>

<template>
    <div class="led-box">
        <div v-if ="store.power == true" class="led-red">

        </div>
        <div v-else :class="store.errore == true ? 'led-red red_animation ' : 'led-green green_animation'" ></div>
    </div>
</template>

<style lang="scss" scoped>
.led-box {
    height: 30px;
    width: 30px;
    position: relative;
    left: 867px;
    top: 398px;
}

.led-green {
    width: 37px;
    height: 37px;
    background-color: #76ba1b;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #75ba1b 0 2px 12px;
}
.green_animation {
    -webkit-animation: blinGreen 0.7s infinite;
    -moz-animation: blinGreen 0.7s infinite;
    -ms-animation: blinGreen 0.7s infinite;
    -o-animation: blinGreen 0.7s infinite;
    animation: blinGreen 0.7s infinite;
}

@-webkit-keyframes blinGreen {

from {
    background-color: #76ba1b;
}

50% {
    background-color: #3bbc00;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
}

to {
    background-color: #76ba1b;
}
}

@-moz-keyframes blinGreen {
from {
    background-color: #76ba1b;
}

50% {
    background-color: #3bbc00;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
}

to {
    background-color: #76ba1b;
}
}

@-ms-keyframes blinGreen {
from {
    background-color: #76ba1b;
}

50% {
    background-color: #3bbc00;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
}

to {
    background-color: #76ba1b;
}
}

@-o-keyframes blinGreen {
from {
    background-color: #76ba1b;
}

50% {
    background-color: #3bbc00;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
}

to {
    background-color: #76ba1b;
}
}

@keyframes blinGreen {
from {
    background-color: #76ba1b;
}

50% {
    background-color: #3bbc00;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
}

to {
    background-color: #76ba1b;
}
}

.led-red {
    width: 37px;
    height: 37px;
    background-color: rgb(222, 0, 0);
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #800202 0 -1px 9px, rgb(255, 0, 0) 0 2px 12px;
}

.red_animation {
    -webkit-animation: blinkRed 0.7s infinite;
    -moz-animation: blinkRed 0.7s infinite;
    -ms-animation: blinkRed 0.7s infinite;
    -o-animation: blinkRed 0.7s infinite;
    animation: blinkRed 0.7s infinite;
}

@-webkit-keyframes blinkRed {

from {
    background-color: rgb(255, 0, 0);
}

50% {
    background-color: rgb(170, 0, 0);
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #800202 0 -1px 9px,
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
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #800202 0 -1px 9px,
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
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #800202 0 -1px 9px,
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
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #800202 0 -1px 9px,
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
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #800202 0 -1px 9px,
}

to {
    background-color: rgb(255, 0, 0);
}
}
</style>