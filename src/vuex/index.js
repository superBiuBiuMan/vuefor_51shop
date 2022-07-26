import Vue from "vue";
import Vuex from "vuex";

import indexData from "./data/index";


Vue.use(Vuex);

const state = {
    indexData,
}
const mutations = {

}
const actions = {

}
const getters = {

}
const store = new Vuex.Store({
    state,mutations,
    actions,getters,
});

export default store;