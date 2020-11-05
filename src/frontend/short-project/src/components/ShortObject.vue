<template>
  <div class="container">
    <div class="container-header">
      <span class="text">
        <a v-bind:href="fullUrl">{{ url }}</a>
      </span>
      <span class="text">🎉</span>
    </div>
    <div class="stats">
      <Stats
        v-for="(item, index) in clicks"
        :key="index"
        :hash="item._id"
        :country="item.country"
        :browser="item.browser"
        :os="item.sO"
        :html="item.html"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { shorts } from "../store/store";
import Stats from "./Stats";
export default {
  components: {
    Stats,
  },
  props: {
    url: String,
    id: String,
    index: Number,
    clicks: Array,
  },
  setup(props) {
    console.log(props.index);
    const dataShort = ref(shorts.findShortById(props.id));
    const fullUrl = ref("http://girlazo.com/short/api/s/" + props.url);

    async function checkStats() {
      let getNewData = await axios.get(fullUrl.value + "/a");
      shorts.pushNewClick(props.index, getNewData.data.clicks);
      //console.log(getNewData.data.clicks);
    }

    setInterval(async () => {
      await checkStats()
    }, 15000);

    //await checkStats()

    return { fullUrl, shorts, dataShort, checkStats };
  },
};
</script>

<style scoped>
a:link,
a:visited {
  text-decoration: none;
  color: #ff7da3;
}
a:hover {
  text-decoration: underline;
}

.stats {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: center;
}
.text {
  font-size: 36px;
  font-weight: 700;
  margin: 0 2rem;
}

.container-header {
  margin-top: 0.7rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
}

.container {
  background-color: #100f13;
  border-radius: 4rem;
  width: 80%;
  margin: 1rem 0;
  padding: 1rem 0 1.3rem 0;
}
</style>
