<script>

import { store } from '../store';

export default {
    name: 'InputLed',
    data() {
        return {
            store,
        }
    },
    methods:{
    }
}


</script>

<template>
    <div class="d-flex gap_custom">
        <div class="led-box">
            <div class="first rounded led-yellow"></div>
        </div>
        <div class="led-box">
            <div class="second rounded led-blue"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.gap_custom{
    gap: 30px;
}
.led-box {
    height: 30px;
    width: 30px;
    position: relative;
    left: 790px;
    top: 386px;
}

.led-yellow {
    width: 52px;
    height: 14px;
    background-color: #FF0;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 40px;
}

.yellow_animation {
    -webkit-animation: blinkYellow 0.3s infinite;
    -moz-animation: blinkYellow 0.3s infinite;
    -ms-animation: blinkYellow 0.3s infinite;
    -o-animation: blinkYellow 0.3s infinite;
    animation: blinkYellow 0.3s infinite;
}

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

// END YELLOW ANIMATION
.led-blue {
    width: 52px;
    height: 14px;
    background-color: rgb(0, 41, 222);
    box-shadow: rgba(0, 0, 0, 0.058) 0 -1px 7px 1px, inset #800202 0 -1px 4px, rgba(0, 162, 255, 0.788) 0 2px 70px;
}

.blue_animation {
    -webkit-animation: blinkBlue 0.3s infinite;
    -moz-animation: blinkBlue 0.3s infinite;
    -ms-animation: blinkBlue 0.3s infinite;
    -o-animation: blinkBlue 0.3s infinite;
    animation: blinkBlue 0.3s infinite;
}
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