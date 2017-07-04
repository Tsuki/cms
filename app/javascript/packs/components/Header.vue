<template>
  <header id="header">
    <div id="banner">
      <div id="banner-right"></div>
    </div>
    <div id="header-outer" class="outer">
      <div id="header-title" class="inner">
        <h1 id="logo-wrap">
          <a href="/" id="logo">{{ global.title }}</a>
        </h1>
        <h2 id="subtitle-wrap" v-if="global.subtitle">
          <a href="/" id="subtitle">{{ global.subtitle }}</a>
        </h2>

      </div>
      <div id="header-inner" class="inner">
        <nav id="main-nav">
          <a id="main-nav-toggle" class="nav-icon"></a>
          <template v-for="menu in theme.menu">
            <template
                v-if="menu.enable === undefined || menu.enable !== false || menu.enable === true ">
              <template v-if="menu.layout === 1">
                <a class="main-nav-link" v-bind:href="menu.path">
                  <i v-bind:class="menu.class" v-bind:title="menu.name"></i></a>
              </template>
              <template v-else-if="menu.layout === 2">
                <a class="main-nav-link" v-bind:href="menu.path">
                  <i v-bind:class="menu.class" v-bind:title="menu.name"></i>
                  {{ menu.name }}</a>
              </template>
              <template v-else>
                <a class="main-nav-link" v-bind:href="menu.path"> {{ menu.name }}</a>
              </template>
            </template>
          </template>
        </nav>
        <nav id="sub-nav">
          <a id="nav-rss-link" class="nav-icon" title="RSS Feed"
             v-bind:href="theme.rss" v-if="theme.rss"></a>
          <a id="nav-search-btn" class="nav-icon" title="Search"
          v-on:click="startSearchAnim" v-on:blur="stopSearchAnim"></a>
        </nav>
        <div id="search-form-wrap" v-bind:class="isActive" >
          <form action="//google.com/search" method="get" accept-charset="UTF-8"
                class="search-form"><input type="search" name="q" class="search-form-input"
                                           placeholder="Search">
            <button type="submit" class="search-form-submit"></button>
            <input type="hidden" name="sitesearch" value="http://Tsuki.github.io"></form>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import store from '../store/index'
  import $ from "jquery";
  export default {
    store,
    name: 'Banner',
    data () {
      return {
        global: store.state.global,
        theme: store.state.theme,
        isActive: "off",
      }
    },
    methods:{
      startSearchAnim: function () {
        this.isActive = "on";
      },
      stopSearchAnim: function () {
        this.isActive = "off";
      }
    }
  }
  document.addEventListener('turbolinks:load', function () {
//  let $searchWrap = $('#search-form-wrap'),
//      isSearchAnim = false,
//      searchAnimDuration = 200;

//  let startSearchAnim = function () {
//    isSearchAnim = true;
//  };
//
//  let stopSearchAnim = function (callback) {
//    setTimeout(function () {
//      isSearchAnim = false;
//      callback && callback();
//    }, searchAnimDuration);
//  };
//    console.log('testing');
//  $('#nav-search-btn').on('click', function () {
//    if (isSearchAnim) {
//      return;
//    }
//    startSearchAnim();
//    $searchWrap.addClass('on');
//    stopSearchAnim(function () {
//      $('.search-form-input').focus();
//    });
//  });
//
//  $('.search-form-input').on('blur', function () {
//    startSearchAnim();
//    $searchWrap.removeClass('on');
//    stopSearchAnim();
//  });
});
</script>

<style scoped lang="stylus">
  @import "../css/_variables.styl"
  #header
    height: banner-height
    position: relative
    border-bottom: 1px solid color-border
    &:before, &:after
      content: ""
      position: absolute
      left: 0
      right: 0
      height: 40px
    &:before
      top: 0
      background: linear-gradient(rgba(0, 0, 0, 0.2), transparent)
    &:after
      bottom: 0
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.2))

  #header-outer
    height: 95%
    position: relative

  #header-inner
    position: relative
    overflow: hidden

  #banner
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: url(banner-url) center #000
    background-size: cover
    z-index: -1
    -webkit-transition: top 0.5s ease-out
    -moz-transition: top 0.5s ease-out
    -o-transition: top 0.5s ease-out
    &:hover
      top: 30px

  #banner-right
    position: absolute
    left: 0
    -moz-background-size auto

  /* background: url(banner-right-url) no-repeat */

  #header-title
    text-align: center
    height: logo-size
    position: absolute
    top: 50%
    left: 0
    margin-top: logo-size * -0.5
    font-family: font-logo

  $logo-text
    text-decoration: none
    color: #fff
    font-weight: 300
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3)

  #logo
    @extend $logo-text
    font-size: logo-size
    line-height: logo-size
    letter-spacing: 2px

  #subtitle
    @extend $logo-text
    font-size: subtitle-size
    line-height: subtitle-size
    letter-spacing: 1px

  #subtitle-wrap
    margin-top: subtitle-size

  #main-nav
    position: absolute
    bottom: 0
    @media mq-mobile
      top: 0

  $nav-link
    float: left
    color: #fff
    opacity: 0.6
    text-decoration: none
    transition: opacity 0.2s
    display: block
    padding: 20px 15px
    &:hover
      opacity: 1

  .nav-icon
    @extend $nav-link
    font-family: font-icon
    text-align: center
    font-size: font-size
    width: font-size
    height: font-size
    padding: 20px 15px
    position: relative
    cursor: pointer

  .main-nav-link
    @extend $nav-link
    font-weight: 300
    letter-spacing: 1px
    bottom: 0
    @media mq-mobile
      display: none

  #main-nav-toggle
    display: none
    &:before
      content: "\f0c9"
    @media mq-mobile
      display: block

  #sub-nav
    float: right
    margin-right: -15px

  #nav-rss-link
    &:before
      content: "\f09e"

  #nav-search-btn
    &:before
      content: "\f002"

  #search-form-wrap
    position: absolute
    top: 15px
    width: 150px
    height: 30px
    right: -150px
    opacity: 0
    transition: 0.2s ease-out
    &.on
      opacity: 1
      right: 0
    @media mq-mobile
      width: 100%
      right: -100%

  .search-form
    position: absolute
    top: 0
    left: 0
    right: 0
    background: #fff
    padding: 5px 15px
    border-radius: 15px
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)

  .search-form-input
    border: none
    background: none
    color: color-default
    width: 100%
    font: 13px font-sans
    outline: none
    &::-webkit-search-results-decoration
    &::-webkit-search-cancel-button
      -webkit-appearance: none

  .search-form-submit
    position: absolute
    top: 50%
    right: 10px
    margin-top: -7px
    font: 13px font-icon
    border: none
    background: none
    color: #bbb
    cursor: pointer
    &:hover, &:focus
      color: #777
</style>
