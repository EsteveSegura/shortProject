<template>
  <div class="short-form">
    <h1>🚀SHORT PROJECT🚀</h1>
    <input type="text" v-model="newShort" placeholder="http://www...."/>
    <button class="big-button" @click="createNewShort()">SHORT</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { shorts } from "../store/store";
import axios from "axios";
export default {
  setup() {
    const newShort = ref("");
    const urlShort = ref({});

    async function createNewShort() {
      let createShort = await axios.post("http://girlazo.com/short/s/", {
        url: newShort.value,
      });

      shorts.addShort(createShort.data);
      urlShort.value = createShort.data;
      newShort.value = ""
    }

    return {
      shorts,
      newShort,
      createNewShort,
      urlShort,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 70px;
  margin: 0 0;
}

input[type="text"] {
  width: 32rem;
  height: 2.8rem;
  padding: 0.1rem 1.6rem;
  color: #ded7d0;
  font-family: "Dosis", sans-serif;
  background-color: rgba(16, 15, 19, 1);
  border: 0;
  margin: 1rem 0;
  border-radius: 4rem;
}

input[type="text"]:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  border: 1px solid rgba(81, 203, 238, 1);
}

.short-form {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: center;
}

.btn {
  width: 12rem;
  height: 2.8rem;
  padding: 0.1rem 1.6rem;
  font-weight: 800;
  color: #ff7da3;
  font-family: "Dosis", sans-serif;
  background-color: rgba(16, 15, 19, 1);
  border: 0;
  border-radius: 4rem;
}

button {
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: 1.5rem;
  color:#100f13;
  font-weight: 700;
  text-transform: uppercase;
  font-family: inherit;
}

button.big-button {
  padding: 1em 2em;
  border: 2px solid#100f13;
  border-radius: 1em;
  background: #dcdcdc;
  transform-style: preserve-3d;
  transition: all 175ms cubic-bezier(0, 0, 1, 1);
}
button.big-button::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #1e1d23;
  border-radius: inherit;
  box-shadow: 0 0 0 2px #100f13, 0 0.75em 0 0#100f13;
  transform: translate3d(0, 0.75em, -1em);
  transition: all 175ms cubic-bezier(0, 0, 1, 1);
}

button.big-button:hover {
  background: #ff7da3;
}

button.big-button:hover::before {
  transform: translate3d(0, 0.75em, -1em);
}

button.big-button:active {
  transform: translate(0em, 0.75em);
}

button.big-button:active::before {
  transform: translate3d(0, 0, -1em);
  box-shadow: 0 0 0 2px #100f13, 0 0.25em 0 0 #100f13;
}


</style>
