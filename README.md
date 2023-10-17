# Shakeri-Lab Website

This is the Shakeir-Lab website.

## To add your [publications](https://shakeri-lab.github.io/publications)

Update [`_data/publications.yml`](./_data/publications.yml) to include a new YAML array entry of the form:

```yaml
- title: CoolStuff: Cool stuff
  year: 2020
  authors: me, you, and Heman Shakeri
  venue: X's International Conference on Unsupervised Probability
  links:
    - text: "pdf"
      url: https://arxiv.org/pdf/XXXX.YYYYY.pdf
    - text: "code"
      url: https://github.com/dtak/ZZZZZZ
```

The `links` section is a sub-array where you can list any number of links (which will appear in brackets at the end of the entry, with your specified `text` and `url`). For consistency, we recommend using `pdf` to link directly to the paper PDF, `link` to link to the paper in the context of its publication venue, and `code` to link to an associated Github repository.

Note that the list is not automatically sorted, so please try to insert your publication in the appropriate place chronologically!

## To update your [profile](https://dtak.github.io/people)

Find and edit your entry in [`_data/people.yml`](./_data/people.yml), which should look something like this:

```yaml
- name: (your name, e.g. Knickerbocker Thaddeus P. Flufferkins)
  site: (your optional personal website, e.g. https://youtu.be/oHg5SJYRHA0)
  title: (your title, e.g. Extremely Tired PhD Candidate)
  image: (a link to your 400x400 picture, e.g. /images/people/flufferkins.png)
  hover: (a link to an easter egg picture that will be overlaid on hover, e.g. /images/pony_blue.png)
  blurb: |-
    (an optional very short description of your work that will appear on hover)
```

Personal `image`s should be square, 400 by 400 pixels, and uploaded to the [.assets/images/people](.assets/images/people) directory. You can compress images down to 400x400 using [this compressor](https://imagecompressor.com/) if you need.

## To run locally (not on GitHub Pages, to serve on your own computer)

Although you can make the above edits through the Github web interface if you wish, it's better if you can get it running locally on your computer to confirm your changes have the intended effect before committing to master (which will automatically deploy the site). Here are instructions for how to do that:

1. Clone the repository and cd into the directory
1. Make sure you have [ruby](https://www.ruby-lang.org/en/) and [node](https://nodejs.org/en/) installed
    - On Linux, something like `sudo apt install ruby-dev ruby-bundler nodejs` should work
    - On Mac, if you've installed [homebrew](https://brew.sh/), `brew install ruby` and `brew install node` should hopefully do the trick (though using a Ruby version manager like [rbenv](https://github.com/rbenv/rbenv) is recommended if slightly more complicated)
    - Run `gem install bundler` if you've just installed (a new version of) Ruby
1. Run `bundle install` to install Ruby dependencies.
1. Run `bundle exec jekyll serve` to generate the HTML and serve it from `localhost:4000`. The local server will automatically rebuild changed pages, though it may take a few seconds and require refreshing.

## Adding additional pages

To add additional pages to the website, create a new HTML or markdown file under `_pages/`, e.g. `_pages/mypage.html` or `_pages/mypage.md`.

The first five lines of this new file should be:

```
---
layout: archive
title: "My new page title"
permalink: /mypage/
---
```

where the `permalink` field matches the file name. Then you can fill in the rest of the page with whatever content you want!

If you want this page to appear in the top-level navigation, you can edit [`_data/navigation.yml`](./_data/navigation.yml) and add a new entry for the new page, e.g.:

```yaml
- title: "My New Page"
  url: /mypage/
```
