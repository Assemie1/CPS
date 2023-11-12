# Catching Photon Studios Website

## Structure

1. Folder structure
2. Standard variables 
3. Naming System (IDs, classes, funtions)
4. JS functions and standard link references

## 1. Folder structure

The main HTML-Pages are directly in the main Folder, everything else (except some generals like this readme) is packed in different folder.

### allgemein
The folder *allgemein* is for everything which is used by multiple or all Pages (HTML + CSS +JS).
- Navbar
- Top buttons (language and dark-/lightmode)
- Alerts (currently not used)
- Translation function

### bilder
All pictures are stored inside the folder *bilder* folder.
It is grouped in Folder for each page but is not well maintained so it needs some clean up.

### stylesheets
In *stylesheets* are alle CSS files for the main Pages. For each Page exists one version for desktop and one for Mobile (...m.CSS).

### translations
Inside the *translations* folder are JSON-files which are needed for the switching of the language (English - German).
Each Page has its own JSON document which will be loaded by the translation.js in the *allgemein* folder.

## 2. Standard variables

To maintain a clean and standardized appearance, the default values here are (Exceptions may be included, Especially for alignments)

### Lightmode:

| Variable | Value |
|----|-----|
| Background | rgb(255, 255, 255) |
| Font Color | rgb(33, 33, 33) |

### Darkmode:

| Variable | Value |
|----|-----|
| Background | rgb(33, 33, 33) |
| Font Color | rgb(247, 247, 247) |

### NavBar

| Variable | Value |
|----|-----|
| Background | rgb(91, 87, 92)|
| @hover | rgb(34, 31, 31) |
| @active | rgb(255, 65, 55) |

### Fontsize

| Variable | Value (desktop) | Value (mobile) |
|----|-----|----|
| Mainheading | 3.5vw | 5vw |
| subheading | 2vw | 3vw |
| Text | 1.5vw | 2.5 vw |

### Alignments

| Variable | Value |
|----|-----|
| Padding, Margin | 1%, 2%, 5% |

### Pictures 
| Variable | Value |
|----|-----|
| Width | about 35% |
| Borderradius | 10px |

## 3. Naming System

All classes start with a Capital letter and all IDs with lower case letters

IDs fot Text parts are marked with the following names:
- uberschrift (main headding)
- unterschrift (sub heading)
- t1, t2 , ..., tn

<br></br>

Images should be marked arcordingly:
- img1, img2, ..., imgn (*evolution.html* is completely wrong)
Currently theyer IDs are "img"+ "Number" + "PageShortReference" e. g. img2NY. 
The PageReference will be removed in the future.

## 4. JS functions and standard link references

### Standard references
in the `<head>` element

```
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="allgemein\navbar.css">
    <link rel="stylesheet" href="allgemein\topbuttons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

<br></br>

Bootom of the `body` element
```
  <script language="javascript" type="text/javascript" src="allgemein\topbuttons.js"></script>
  <script language="javascript" type="text/javascript" src="allgemein\alerts.js"></script>
  <script language="javascript" type="text/javascript" src="allgemein\navbar.js"></script>
  <script language="javascript" type="text/javascript" src="allgemein\translation.js"></script>
```

### JS functions
---

**Inside all HTML pages**

To get a responsive navbar, the resnav() function must be called inside the body tag when the page gets resized

```
<body onresize="resnav()">
```

We need two containers to load the navbar and the top buttons (currently called `darkmodeContainer`)

```
  <div id="navbarContainer"></div>
  <div id="darkmodeContainer"></div>
```
---

***alets.js***

Currently a container for not existing alerts

---
***navbar.js*** contains:
- The function to load the navbar with a Http request from the `navbar.html`
- To get the active page the current domain gets compared with the elements inside the navbar
- The functions to open the SubNavBar on mobile and desktop
- Also to open the navigationmenu on mobile
- The last one ist to get a responsive navbar and a smove change between mobile and desktop

---

**topbutton.js**
- Similar to the navbar gets the darkmode and language button loaded via a Http request
- To prevent problems the mode switch process is inside a timeout function, so that the page is fully build before changes will be applyed 
  - Setting the correct darkmode button and figure on the start page
  - Applys the whole chage after the darkmode button got pressed
  - Loading the language and mode out of the local storage and sets the correct values
- The last function changes the flag/the in the local storage saved language and calls the `translate()` function inside `translation.js`

---

**translation.js**
- The JSON file for this explicit page gets loaded with a comparison between the pathname and the JSON file Name
- After the fetch every text element gets changed to the correct language if the function `translate()` is called