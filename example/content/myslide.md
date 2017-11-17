---
title: "Slide"
type: "slide"
theme: "moon"
menu:
    main:
        weight: 3
        pre: '<i class="fa fa-slideshare" aria-hidden="true"></i>'
revealOptions:
  transition: 'slide'
  controls: true
  progress: true
  history: true
  center: false
  showNotes: true

---
# Slide Demo
Welcome to a [revealjs](https://github.com/hakimel/reveal.js) presentation

---
In the frontmatter of your page file, set ``` type=slide ```<!-- .element: style="color:white"--> and `revealOptions`<!-- .element: style="color:white"  --> params.
```yaml
 ---
title: "Slide"
type: "slide"
theme: "moon"
revealOptions:
  transition: 'slide'
  controls: true
  progress: true
  history: true
  center: false
  showNotes: true
 ---
```
[Reavealjs Options](https://github.com/hakimel/reveal.js/#configuration)

---
# Slide delimiters

### Vertical slide delimiter
```
  ---
  # Slide delimiters
```
### Horizontal slide delimiter
```
 ___
 # GO UP
```
___
# Go Up
---
# Special keys
1. Press **ESC**<!-- .element: style="color:white"--> to enter the slide overview.
2. **Ctrl + Alt + click**<!-- .element: style="color:white"--> anywhere to zoom back out.
3. Press the **S**<!-- .element: style="color:white"--> key to activate speaker view.
---
# Fragment
Special syntax (in html comment) is available for adding attributes to Markdown elements.
Fragment example:
```md
- element1  <!-- .element: class="fragment" data-fragment-index="1" -->
- element2  <!-- .element: class="fragment" data-fragment-index="3" -->
- element3  <!-- .element: class="fragment" data-fragment-index="2" -->
```
- element1  <!-- .element: class="fragment" data-fragment-index="1" -->
- element2  <!-- .element: class="fragment" data-fragment-index="3" -->
- element3  <!-- .element: class="fragment" data-fragment-index="2" -->
---
# Style
Comment can be used also to overrite class and css
```md
- element1  <!-- .element: style="blue" -->
- element2  <!-- .element: class="white" -->
- element3  <!-- .element: class="red" -->
```
- element1  <!-- .element: style="color:blue" -->
- element2  <!-- .element: style="color:white" -->
- element3  <!-- .element: style="color:red" -->

---
# Style
<!-- .slide: data-background-color="orange" -->
background color
```xml
<!-- .slide: data-background-color="orange" -->
```
---
# Style
<!-- .slide: data-background="../images/quickstart/simpleLaunch.png" -->
background with image
```xml
<!-- .slide: data-background="../images/quickstart/simpleLaunch.png" -->
```
---
# Style
and gif
<!-- .slide: data-background="url('https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif')" data-background-size="100%"-->
```xml
<!-- .slide: data-background="url('https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif')" data-background-size="100%"-->
```

---
# Code
Syntax highlight for <code> elements
<section>
	<pre><code data-trim data-noescape>

  \`\`\`java
    public static void main(String... args) {}
  \`\`\`
	</code></pre>
</section>

```java
  public static void main(String... args) {}
```

---
# Transition
<!-- .slide: data-transition="zoom" -->
You can select from different transitions, like:

**convex, none, fade, slide, convex, concave, zoom**
```YAML
<!-- .slide: data-transition="zoom" -->
```
---
# Theme
<p>
						reveal.js comes with a few themes built in: <br>
						<!-- Hacks to swap themes after the page has loaded. Not flexible and only intended for the reveal.js demo deck. -->
						<a href="#" onclick="document.getElementById('theme').setAttribute('href','/revealjs/css/theme/black.css'); return false;">Black (default)</a> -
						<a href="#" onclick="document.getElementById('theme').setAttribute('href','/revealjs/css/theme/white.css'); return false;">White</a> -
						<a href="#" onclick="document.getElementById('theme').setAttribute('href','/revealjs/css/theme/league.css'); return false;">League</a> -
						<a href="#" onclick="document.getElementById('theme').setAttribute('href','/revealjs/css/theme/sky.css'); return false;">Sky</a> -
						<a href="#" onclick="document.getElementById('theme').setAttribute('href','/revealjs/css/theme/beige.css'); return false;">Beige</a> -
						<a href="#" onclick="document.getElementById('theme').setAttribute('href','/revealjs/css/theme/simple.css'); return false;">Simple</a> <br>
						<a href="#" onclick="document.getElementById('theme').setAttribute('href','/revealjs/css/theme/serif.css'); return false;">Serif</a> -
						<a href="#" onclick="document.getElementById('theme').setAttribute('href','/revealjs/css/theme/blood.css'); return false;">Blood</a> -
						<a href="#" onclick="document.getElementById('theme').setAttribute('href','/revealjs/css/theme/night.css'); return false;">Night</a> -
						<a href="#" onclick="document.getElementById('theme').setAttribute('href','/revealjs/css/theme/moon.css'); return false;">Moon</a> -
						<a href="#" onclick="document.getElementById('theme').setAttribute('href','/revealjs/css/theme/solarized.css'); return false;">Solarized</a>
</p>


---
# Array
classical
```
| title   | title   | title   | title   | title   |
|---------|---------|---------|---------|---------|
| 1       |      2  |       3 |      4  |      5  |
```
| title   | title   | title   | title   | title   |
|---------|---------|---------|---------|---------|
| 1       |      2  |       3 |      4  |      5  |


---
<!-- .slide: data-background="url('https://media.giphy.com/media/26AHC0kdj8IeLkmBy/giphy.gif')" data-background-size="100px"-->
