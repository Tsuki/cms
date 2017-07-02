import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    global: {
      title: "Tsuki Blog",
      subtitle: "My Tsuki",
      "description": null,
      "author": "Tsuki",
      "language": [
        "zh-TW"
      ],
      "timezone": null,
      "url": "http://Tsuki.github.io",
      "root": "/",
      "permalink": ":year/:month/:day/:title/",
      "permalink_defaults": null,
      "source_dir": "source",
      "public_dir": "public",
      "tag_dir": "tags",
      "archive_dir": "archives",
      "category_dir": "categories",
      "code_dir": "downloads/code",
      "i18n_dir": ":lang",
      "skip_render": null,
      "new_post_name": ":year/:month/:day-:title.md",
      "default_layout": "post",
      "titlecase": false,
      "external_link": true,
      "filename_case": 0,
      "render_drafts": false,
      "post_asset_folder": true,
      "relative_link": false,
      "future": true,
      "highlight": {
        "enable": true,
        "line_number": true,
        "auto_detect": false,
        "tab_replace": null
      },
      "default_category": "uncategorized",
      "category_map": null,
      "tag_map": null,
      "date_format": "YYYY-MM-DD",
      "time_format": "HH:mm:ss",
      "per_page": 10,
      "pagination_dir": "page",
      "theme": "landscape",
      "deploy": {
        "type": "git",
        "repo": "git@github.com:Tsuki/Tsuki.github.io.git"
      },
      "disqus_shortname": "TsukiBlog",
      "marked": {
        "gfm": true,
        "pedantic": false,
        "sanitize": false,
        "tables": true,
        "breaks": true,
        "smartLists": true,
        "smartypants": true
      },
    },
    theme: {
      "menu": [
        {
          "name": "Home",
          "path": "/",
          "class": "icon-home",
          "layout": 1,
        },
        {
          "name": "About",
          "path": "/about",
          "class": "icon-user",
          "layout": 2
        },
        {
          "name": "Archives",
          "path": "/archives",
          "class": "icon-archive",
          "layout": 2
        },
        {
          "name": "Tags",
          "path": "/tags",
          "class": "icon-tags",
          "layout": 2
        },
        {
          "name": "Pictures",
          "path": "/picture",
          "class": "icon-camera",
          "layout": 2,
          enable: false
        },
        {
          "name": "Works",
          "path": "/works",
          "class": "icon-trophy",
          "layout": 2,
          enable: false
        }
      ],
      "rss": "/atom.xml",
      "excerpt_link": "Read More",
      "fancybox": true,
      "sidebar": "right",
      "widgets": [
        "category",
        "recent_posts",
        "tag",
        "tagcloud",
        "links",
        "recent_comment",
        "ukagaka"
      ],
      "google_analytics": "UA-77760032-1",
      "favicon": "/f.ico",
      "twitter": "TsukiAlex",
      "google_plus": "+IzayoiKana",
      "fb_admins": null,
      "fb_app_id": null,
      "google_siteVerification": {
        "id": "t2O2EjBohDKVx7CnlLKRymUgj_2_47RaJjbZwCj9Bj0"
      },
      "toc": {
        "article": true,
        "aside": false
      },
      "facebook_url": "https://www.facebook.com/KanadeLeung",
      "github_url": "https://github.com/Tsuki",
      "google_plus_url": "https://plus.google.com/+IzayoiKana",
      "sitemap": {
        "path": "sitemap.xml"
      },
      "feed": {
        "type": "atom",
        "path": "atom.xml",
        "limit": 20,
        "hub": null
      },
      "friends": {
        "梦路": "https://blog.ikke.moe/"
      }
    },
  },
})