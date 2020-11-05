<template>
  <div class="container">
    <ShortForm />
    <div class="container-shorted">
      <ShortObject
        v-for="(item, index) in shorts.shorts"
        :key="index"
        :index="index"
        :url="item.message.urlShort"
        :id="item.message.saved._id"
        :clicks="item.message.saved.clicks"
      />
    </div>
  </div>
</template>

<script>
//v-for="elmn in arrTest"
import ShortForm from "./components/ShortForm.vue";
import ShortObject from "./components/ShortObject.vue";
import { shorts } from "./store/store";
export default {
  name: "App",
  components: {
    ShortForm,
    ShortObject,
  },
  setup() {
    return { shorts };
  },
};
</script>

<style>
body {
  background-color: #1e1d23;
}
.container {
  margin-top: 2rem;
  width: 80%;
}
.container-shorted {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: center;
  width: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: center;
  font-family: "Dosis", sans-serif;
  color: #ded7d0;
}
</style>
