import jQuery from "jquery";
(($) ->
# Search
  $searchWrap = $('#search-form-wrap')
  isSearchAnim = false
  searchAnimDuration = 200

  startSearchAnim = ->
    isSearchAnim = true
    return

  stopSearchAnim = (callback) ->
    setTimeout (->
      isSearchAnim = false
      callback and callback()
      return
    ), searchAnimDuration
    return

  $('#nav-search-btn').on 'click', ->
    if isSearchAnim
      return
    startSearchAnim()
    $searchWrap.addClass 'on'
    stopSearchAnim ->
      $('.search-form-input').focus()
      return
    return
  $('.search-form-input').on 'blur', ->
    startSearchAnim()
    $searchWrap.removeClass 'on'
    stopSearchAnim()
    return
  # Share
  $('body').on('click', ->
    $('.article-share-box.on').removeClass 'on'
    return
  ).on('click', '.article-share-link', (e) ->
    `var box`
    e.stopPropagation()
    $this = $(this)
    url = $this.attr('data-url')
    encodedUrl = encodeURIComponent(url)
    id = 'article-share-box-' + $this.attr('data-id')
    offset = $this.offset()
    if $('#' + id).length
      box = $('#' + id)
      if box.hasClass('on')
        box.removeClass 'on'
        return
    else
      html = [
        '<div id="' + id + '" class="article-share-box">'
        '<input class="article-share-input" value="' + url + '">'
        '<div class="article-share-links">'
        '<a href="https://twitter.com/intent/tweet?url=' + encodedUrl + '" class="article-share-twitter" target="_blank" title="Twitter"></a>'
        '<a href="https://www.facebook.com/sharer.php?u=' + encodedUrl + '" class="article-share-facebook" target="_blank" title="Facebook"></a>'
        '<a href="http://pinterest.com/pin/create/button/?url=' + encodedUrl + '" class="article-share-pinterest" target="_blank" title="Pinterest"></a>'
        '<a href="https://plus.google.com/share?url=' + encodedUrl + '" class="article-share-google" target="_blank" title="Google+"></a>'
        '</div>'
        '</div>'
      ].join('')
      box = $(html)
      $('body').append box
    $('.article-share-box.on').hide()
    box.css(
      top: offset.top + 25
      left: offset.left).addClass 'on'
    return
  ).on('click', '.article-share-box', (e) ->
    e.stopPropagation()
    return
  ).on('click', '.article-share-box-input', ->
    $(this).select()
    return
  ).on 'click', '.article-share-box-link', (e) ->
    e.preventDefault()
    e.stopPropagation()
    window.open @href, 'article-share-box-window-' + Date.now(), 'width=500,height=450'
    return
  # Caption
  $('.article-entry').each (i) ->
    $(this).find('img').each ->
      if $(this).parent().hasClass('fancybox')
        return
      alt = @alt
      if alt
        $(this).after '<span class="caption">' + alt + '</span>'
      $(this).wrap '<a href="' + @src + '" title="' + alt + '" class="fancybox"></a>'
      return
    $(this).find('.fancybox').each ->
      $(this).attr 'rel', 'article' + i
      return
    return
  if $.fancybox
    $('.fancybox').fancybox()
  # Mobile nav
  $container = $('#container')
  isMobileNavAnim = false
  mobileNavAnimDuration = 200

  startMobileNavAnim = ->
    isMobileNavAnim = true
    return

  stopMobileNavAnim = ->
    setTimeout (->
      isMobileNavAnim = false
      return
    ), mobileNavAnimDuration
    return

  $('#main-nav-toggle').on 'click', ->
    if isMobileNavAnim
      return
    startMobileNavAnim()
    $container.toggleClass 'mobile-nav-on'
    stopMobileNavAnim()
    return
  $('#wrap').on 'click', ->
    if isMobileNavAnim or !$container.hasClass('mobile-nav-on')
      return
    $container.removeClass 'mobile-nav-on'
    return
  $('.toggle-input a').on 'click', ->
    content = $(this).parent().prev('.toggle-content')
    if !content.css('max-height') or content.css('max-height') == '250px'
      content.css 'max-height', '99999px'
      $(this).text 'Read More -'
    else
      content.css 'max-height', '250px'
      $(this).text 'Read More +'
    return
  # image lazy load
  $('div.lazy').lazyload {}
  $('img.lazy').lazyload {}
  $('.als-container').als
    visible_items: 1
    scrolling_items: 1
    orientation: 'horizontal'
    circular: 'no'
    autoscroll: 'no'
    start_from: 0
  $('.als-container').on 'click', '.als-next', ->
    timeout = setTimeout((->
      $('div.lazy').lazyload {}
      return
    ), 2000)
    return
  $('.als-container').on 'click', '.als-prev', ->
    timeout = setTimeout((->
      $('div.lazy').lazyload {}
      return
    ), 2000)
    return
  $('.als-container').on 'click', '[data-linkBtn]', ->
    timeout = setTimeout((->
      $('div.lazy').lazyload {}
      return
    ), 2000)
    return
  $('ul > li').each ->
    taskList =
      field: @textContent.substring(0, 2)
      check: (str) ->
        re = new RegExp(str)
        @field.match re
    string = ['[ ]', ['[x]', 'checked']]
    checked = taskList.check(string[1][0])
    unchecked = taskList.check(string[0])
    $current = $(this)

    update = (str, check) ->
      click = ['disabled', '',]
      $current.html $current.html().replace(str, '<input type=\'checkbox\' ' + check + ' ' + click[1] + ' >')
      return

    if checked or unchecked
      @classList.add 'task-list'
      if checked
        update string[1][0], string[1][1]
        @classList.add 'check'
      else
        update string[0], ''
    return

  setTagsColor = ->
    tags = $('.tagcloud a').not('[class*=color]')
    i = 0
    while i < tags.length
      num = Math.floor(Math.random() * 7)
      tags.eq(i).addClass 'color' + num
      i++
    $('.article-category a:nth-child(-n+2)').attr 'class', 'color0'
    return

  setTagsColor()
  return) jQuery