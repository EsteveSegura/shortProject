<template>
  <div class="container">
    <div @click="show()" class="container-info">
      <span class="hash">
        {{ hash }}
      </span>
      <span class="hash">
        {{ country }}
      </span>
      <span class="hash">
        {{ browser }}
      </span>
      <span class="hash"> {{ os }} </span>
    </div>
    <iframe
      
      :srcdoc="html"
      style="display:none;"
      frameborder="0"
      v-bind:class="{ iframe: active }"
    ></iframe>
  </div>
</template>

<script>
import { shorts } from "../store/store";
import { ref } from "vue";
export default {
  props: {
    hash: String,
    country: String,
    browser: String,
    os: String,
    html: String,
  },
  setup() {
    const active = ref(false);

    function show(){
        active.value = !active.value
    }

    //console.log(props);
    //console.log(shorts.findShortById(props.hash))
    return { shorts, active, show };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: center;
}
.iframe {
  margin-top: 3rem;
  background-color: white;
  width: 80%;
  height: 50vh;
  border-radius: 25px;
  display: block !important;
}
.hash {
  color: #ded7d0;
  font-weight: 800;
  font-family: "Dosis", sans-serif;
  text-decoration: underline;
  background-color: rgba(16, 15, 19, 1);
  border-radius: 4rem;
}

.hash:hover{
    color: #ff7da3;
    cursor: pointer;
}

.container-info {
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;
  margin: 0 0 -0.9rem 0;
}
</style>
