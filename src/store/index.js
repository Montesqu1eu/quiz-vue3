import { createStore } from "vuex";
import state from "@/store/state";
import * as mutations from "@/store/mutations";
import * as actions from "@/store/actions";
import * as getters from "@/store/getters";

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
