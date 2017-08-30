# hugorha

Hugo theme for lorhammer

## Hugo project

https://gohugo.io/

## Use hugorha

```bash
cd themes
git clone https://github.com/itkSource/hugorha.git
```

Add `hugorha` has theme in your config.toml.

All your page of first level menu must have `menu: "main"` in there meta.

In your config you must have :

```toml
[params]
# The title of your homepage (to be rendered in /)
homePageTitle = "Hugorha"
# The logo path (placed in /static) and name with the extention
logoFileName = "images/headerLogo.svg"
# Favicons links
favicons = [
    '<link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/apple-icon-57x57.png">',
    '...'
]

    [params.header]
    # The links (label, src) rendered in top /right site
    links = [ [ "itk", "http://www.itk.fr" ], [ "ForkMe ImFamous", "http://gitlab.com/itk.fr" ] ]

    [params.footer]
    # The copyright rendered in footer
    copyrightHTML = "Copyright &#xA9; 2013 John Doe. All Rights Reserved."


    [params.css]
    # The font files path (placed in /static) and name with the extention. Only need WOFF2 and WOFF format
    specialFontName = "font/minspsw"
    # the background color
    bgColor = "#fff"
    # the main color
    mainColor = "#60adea"
    # If true the Site Name in the header will be white and outlined with the main color
    nameColorInverted = false
    
```

> Full configuration can be found in [example/config.toml](https://github.com/itkSource/hugorha/blob/master/example/config.toml)

## Dev on hugorha

* Install [hugo](http://gohugo.io/overview/installing/)
* Run command :

```bash 
hugo server -wDs ./example
```

* Open browser [localhost:1313](http://localhost:1313/)

## Publish new gh-pages

```bash
HUGO_BASEURL="https://itksource.github.io/hugorha/" hugo -s ./example
git add -A .
git commit -m "deploy new gh-pages"
git push origin master
```