/**
 * Created by Alicex on 7/3/17.
 */
import jQuery from "jquery";
require('jquery.lazyload.cjs')(jQuery);
require('./jquery.als-1.7');
(function ($) {
  // Search

  // Share
  $('body').on('click', function () {
    $('.article-share-box.on').removeClass('on');
  }).on('click', '.article-share-link', function (e) {
    e.stopPropagation();

    var $this = $(this),
        url = $this.attr('data-url'),
        encodedUrl = encodeURIComponent(url),
        id = 'article-share-box-' + $this.attr('data-id'),
        offset = $this.offset();

    if ($('#' + id).length) {
      var box = $('#' + id);

      if (box.hasClass('on')) {
        box.removeClass('on');
        return;
      }
    } else {
      var html = [
        '<div id="' + id + '" class="article-share-box">',
        '<input class="article-share-input" value="' + url + '">',
        '<div class="article-share-links">',
        '<a href="https://twitter.com/intent/tweet?url=' + encodedUrl
        + '" class="article-share-twitter" target="_blank" title="Twitter"></a>',
        '<a href="https://www.facebook.com/sharer.php?u=' + encodedUrl
        + '" class="article-share-facebook" target="_blank" title="Facebook"></a>',
        '<a href="http://pinterest.com/pin/create/button/?url=' + encodedUrl
        + '" class="article-share-pinterest" target="_blank" title="Pinterest"></a>',
        '<a href="https://plus.google.com/share?url=' + encodedUrl
        + '" class="article-share-google" target="_blank" title="Google+"></a>',
        '</div>',
        '</div>'
      ].join('');

      var box = $(html);

      $('body').append(box);
    }

    $('.article-share-box.on').hide();

    box.css({
      top: offset.top + 25,
      left: offset.left
    }).addClass('on');
  }).on('click', '.article-share-box', function (e) {
    e.stopPropagation();
  }).on('click', '.article-share-box-input', function () {
    $(this).select();
  }).on('click', '.article-share-box-link', function (e) {
    e.preventDefault();
    e.stopPropagation();

    window.open(this.href, 'article-share-box-window-' + Date.now(),
        'width=500,height=450');
  });

  // Caption
  $('.article-entry').each(function (i) {
    $(this).find('img').each(function () {
      if ($(this).parent().hasClass('fancybox')) {
        return;
      }

      var alt = this.alt;

      if (alt) {
        $(this).after('<span class="caption">' + alt + '</span>');
      }

      $(this).wrap('<a href="' + this.src + '" title="' + alt
          + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function () {
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox) {
    $('.fancybox').fancybox();
  }

  // Mobile nav
  var $container = $('#container'),
      isMobileNavAnim = false,
      mobileNavAnimDuration = 200;

  var startMobileNavAnim = function () {
    isMobileNavAnim = true;
  };

  var stopMobileNavAnim = function () {
    setTimeout(function () {
      isMobileNavAnim = false;
    }, mobileNavAnimDuration);
  };

  $('#main-nav-toggle').on('click', function () {
    if (isMobileNavAnim) {
      return;
    }

    startMobileNavAnim();
    $container.toggleClass('mobile-nav-on');
    stopMobileNavAnim();
  });

  $('#wrap').on('click', function () {
    if (isMobileNavAnim || !$container.hasClass('mobile-nav-on')) {
      return;
    }

    $container.removeClass('mobile-nav-on');
  });

  $(".toggle-input a").on('click', function () {
    var content = $(this).parent().prev(".toggle-content");
    if (!content.css("max-height") || content.css("max-height") == "250px") {
      content.css("max-height", "99999px");
      $(this).text("Read More -");
    } else {
      content.css("max-height", "250px");
      $(this).text("Read More +");
    }
  });

// image lazy load
  $("div.lazy").lazyload({});

  $("img.lazy").lazyload({});

  $(".als-container").als({
    visible_items: 1,
    scrolling_items: 1,
    orientation: "horizontal",
    circular: "no",
    autoscroll: "no",
    start_from: 0
  });

  $(".als-container").on('click', ".als-next", function () {
    var timeout = setTimeout(function () {
      $("div.lazy").lazyload({});
    }, 2000);
  });
  $(".als-container").on('click', ".als-prev", function () {
    var timeout = setTimeout(function () {
      $("div.lazy").lazyload({});
    }, 2000);
  });
  $(".als-container").on('click', "[data-linkBtn]", function () {
    var timeout = setTimeout(function () {
      $("div.lazy").lazyload({});
    }, 2000);
  });

  $('ul > li').each(function () {
    var taskList = {
      field: this.textContent.substring(0, 2),
      check: function (str) {
        var re = new RegExp(str);
        return this.field.match(re);
      }
    };

    var string = ["[ ]", ["[x]", "checked"]];
    var checked = taskList.check(string[1][0]);
    var unchecked = taskList.check(string[0]);

    var $current = $(this);

    function update(str, check) {
      var click = ["disabled", ""];
      $current.html($current.html().replace(
          str, "<input type='checkbox' " + check + " " + click[1] + " >")
      )
    }

    if (checked || unchecked) {
      this.classList.add("task-list");
      if (checked) {
        update(string[1][0], string[1][1]);
        this.classList.add("check");
      } else {
        update(string[0], "");
      }
    }
  });
  var setTagsColor = function () {
    var tags = $(".tagcloud a").not("[class*=color]");
    for (var i = 0; i < tags.length; i++) {
      var num = Math.floor(Math.random() * 7);
      tags.eq(i).addClass("color" + num);
    }
    $(".article-category a:nth-child(-n+2)").attr("class", "color0");
  };
  setTagsColor();
})(jQuery);