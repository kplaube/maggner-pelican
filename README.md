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


Installing
----------

We use *Sass* + *Compass* to write our *CSS*, so first of all, we need to install them all:

```
$ bundle install
```

To automate the process of compiling the *Sass*, we use *Grunt*. Once [it is installed][install_grunt], we need to install **grunt-contrib-compass** and **grunt-contrib-watch**, through the following command:

```
$ npm install
```

Now, we can start *Grunt* and see the magic happens:

```
$ grunt
```


Configuration
-------------

You need to edit your settings and add the following parameters (they aren't required):

```
SITEDESCRIPTION = 'A brief content for meta description'
FAVICON_URL = 'The favicon url'
DEFAULT_OG_IMAGE = 'The og:image url' 

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


Plugins
-------

The theme uses the following plugins:

* [Better Meta]
* [Liquid-style Tags]
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
    "This plugin adds the related_posts variable to the article's context"
  [install_grunt]: http://gruntjs.com/installing-grunt
    "Installing Grunt"
  [Better Meta]: https://github.com/kplaube/better_meta
    "This plugin addds the meta variable to the article's context"
  [Liquid-style Tags]: https://github.com/getpelican/pelican-plugins/tree/master/liquid_tags
    "This plugin allows liquid-style tags to be inserted into markdown within Pelican documents"
