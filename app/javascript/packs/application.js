/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Vue from "vue";
import Banner from "./components/Header.vue";
import TurbolinksAdapter from "vue-turbolinks";
import Vuex from "vuex";
require('./script.js');

document.addEventListener('turbolinks:load', function () {
  Vue.use(Vuex);
  const banner = new Vue({
    mixins: [TurbolinksAdapter],
    render: createEle => createEle(Banner)
  }).$mount('#banner-container');
});

