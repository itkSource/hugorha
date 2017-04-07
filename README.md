# hugorha

Hugo theme for lorhammer

## Use it

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

    [params.header]
    # The links (label, src) rendered in top /right site
    links = [ [ "itk", "http://www.itk.fr" ], [ "ForkMe ImFamous", "http://gitlab.com/itk.fr" ] ]

    [params.footer]
    # THe copyright rendered in footer
    copyrightHTML = "Copyright &#xA9; 2013 John Doe. All Rights Reserved."
```

## Dev

* Install [hugo](http://gohugo.io/overview/installing/)
* Run command :

```bash 
hugo server -wDs ./example
```

* Open browser [localhost:1313](http://localhost:1313/)