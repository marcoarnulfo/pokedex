<script>
import { store } from '../store';

export default {
    name: 'Power',
    data() {
        return {
            store
        }
    },
}

</script>

<template>
    <input type="checkbox" id="checkbox"
        @click="store.playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3') + store.powerOn()">
    <label for="checkbox" class="switch">
        <div class="powersign"></div>
    </label>
</template>

<style lang="scss">


#checkbox {
    display: none;
}

.switch {
    position: relative;
    top: 70px;
    left: 80px;
    width: 90px;
    height: 90px;
    background-color: rgb(99, 99, 99);
    border-radius: 50%;
    z-index: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    box-shadow: 0px 0px 3px rgb(2, 2, 2) inset;
}

.powersign {
    position: relative;
    width: 30%;
    height: 30%;
    border: 4px solid rgb(48, 48, 48);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.powersign::before {
    content: "";
    width: 8px;
    height: 100%;
    background-color: rgb(99, 99, 99);
    position: absolute;
    top: -60%;
    z-index: 2;
}

.powersign::after {
    content: "";
    width: 4px;
    height: 100%;
    background-color: rgb(48, 48, 48);
    position: absolute;
    top: -60%;
    z-index: 3;
}

#checkbox:checked+.switch .powersign {
    border: 4px solid rgb(255, 255, 255);
    box-shadow: 0px 0px 10px rgb(151, 243, 255),
        0px 0px 5px rgb(151, 243, 255) inset;
}

#checkbox:checked+.switch .powersign::after {
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 5px rgb(151, 243, 255);
}

#checkbox:checked+.switch {
    box-shadow: 0px 0px 1px rgb(151, 243, 255) inset,
        0px 0px 2px rgb(151, 243, 255) inset,
        0px 0px 10px rgb(151, 243, 255) inset,
        0px 0px 40px rgb(151, 243, 255),
        0px 0px 100px rgb(151, 243, 255),
        0px 0px 5px rgb(151, 243, 255);
    border: 2px solid rgb(255, 255, 255);
    background-color: rgb(146, 180, 184);
}

#checkbox:checked+.switch .powersign::before {
    background-color: rgb(146, 180, 184);
}
</style>