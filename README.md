maggner-pelican
===============

**maggner-pelican** is a simple (and responsive) theme built for [Pelican][], based on [Maggner][] theme, created by [Templateify][].

You can check it live in my [blog][].

We are still coding, so, feel free to contribute!


Requirements
------------

It uses some cool technologies, like:

* [Sass][]
* [Compass][]
* [Grunt][]
* [PureCSS][]

Configuration
-------------

You need to edit your settings and add the following parameters (they aren't required):

```
SITEDESCRIPTION = 'A brief content for meta description'

LICENSE_URL = 'The license url'
LICENSE_TITLE = 'A brief summary to print in a\'s title attribute'
LICENSE = 'The license'
SOURCE_CODE_REPOSITORY = 'GitHub'
SOURCE_CODE_URL = 'Where the source code of your blog is'

GOOGLE_ANALYTICS = 'Your GA ID'
DISQUS_SITENAME = 'Your Disqus sitename'
FB_ADMINS = 'Add your Facebook user id to check out insigths'

SOCIAL = (
  ('Name', 'URL'),
)
```

It's important to add these static files to your project:

```
{{ SITEURL }}/images/opengraph.jpg
{{ SITEURL }}/images/favicon.ico
```

Plugins
-------

The theme uses the following plugins:

* [Related posts]

Preview
-------

![home-desktop](https://raw2.github.com/kplaube/maggner-pelican/master/docs/preview-home.png)


  [Pelican]: http://docs.getpelican.com/
    "A static site generator, written in Python"
  [Maggner]: http://maggner.templateify.com/
    "Check the original theme"
  [Templateify]: http://templateify.com/
    "20+ Unique, Professional & Responsive Blogger.com Templates"
  [Sass]: http://sass-lang.com/
    "Syntactically Awesome Style Sheets"
  [Compass]: http://compass-style.org
    "An open-source CSS Authoring Framework"
  [Grunt]: http://gruntjs.com/ 
    "The JavaScript Task Runner"
  [PureCSS]: http://purecss.io/
    "A set of small, responsive CSS modules that you can use in every web project"
  [blog]: http://klauslaube.com.br
    "See the theme live"
  [Related posts]: https://github.com/getpelican/pelican-plugins/tree/master/related_posts
    "This plugin adds the related_posts variable to the article's context."
