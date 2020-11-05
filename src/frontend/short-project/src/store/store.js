import { reactive } from "vue";

export const shorts = reactive({
  shorts: [],
  addShort: (val) => shorts.shorts.push(val),
  findShortById: (id) => shorts.shorts.filter(el => el.message.saved._id == id),
  pushNewClick: (index, val) => shorts.shorts[index].message.saved.clicks = val

});

