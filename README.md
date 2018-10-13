
# Colours in culture

Get cultural meanings from all around the world.
Based on the excellent [work](http://www.informationisbeautiful.net/visualizations/colours-in-cultures/) of David McCandless. 

[Demo](https://coloursinculture.io) - [Codepen example](http://codepen.io/tfrere/pen/VpMWwv)

####

- [API](#API)
-- [.getColorList](#get-color-list)
-- [.getClosestColor](#get-closest-color)
-- [.searchByColor](#search-by-color)
-- [.getCultureList](#get-culture-list)
-- [.searchByCulture](#search-by-culture)
-- [.getConceptList](#get-concept-list)
-- [.searchByConcept](#search-by-concept)
-- [.getDominantColorByConcept](#get-dominant-color-by-concept)
--
-- get("color")
-- search("color", "blue")
-- getClosestColor("#000")
-- getDominantColorByConcept("culture")
- [Sources](#sources)
- [Contribute](#contribute)
- [License](#license)

## API

## API

 - [.getColorList](#get-color-list)
 - [.getClosestColor](#get-closest-color)
 - [.searchByColor](#search-by-color)
 ######
 - [.getCultureList](#get-culture-list)
 - [.searchByCulture](#search-by-culture)
######
 - [.getConceptList](#get-concept-list)
 - [.searchByConcept](#search-by-concept)
 - [.getDominantColorByConcept](#get-dominant-color-by-concept)
  
  OR

- get("color")
- search("color", "blue")
- getClosestColor("#000")
- getDominantColorByConcept("culture")
  
### Get color list
**Return** list of all colors in database

**Sorted by** count of associated concepts in all cultures
```javascript
api.getColorList() = ["color"]

// Example
// api.getColorList() = ["blue", "red", "green", ...];
```

### Get closest color

**Return** closest color found in database from a given hex

**Sorted by** count of associated concepts in all cultures
```javascript
api.getClosestColor("hex") = [["color"]]
// Example
// api.getClosestColor("mourning") = [{"westernAmerican": ["blue", "red"]}];
```

### Search by color

**Return** list of cultures and their associated concepts

**Sorted by** count of associated concepts in all cultures
```javascript
api.searchByColor("color") = [{"culture": ["concept"]}];

// Example
// api.searchByColor("blue") = [{"westernAmerican": ["mourning", "glory"]}];
```
  
### Get culture list

**Return** list of all cultures in database

**Sorted by** count of associated concepts for all colors
```javascript
// sort by : nombre de concepts associés toutes cultures confondues

api.getCultureList() = ["culture"]
// Example
// api.getCultureList() = ["westernAmerican", "asian"];
```

### Search by culture

**Return** list of colors and their associated concepts

**Sorted by** count of associated concepts for all colors
```javascript
api.searchByCulture("culture") = [{"color": ["concept"]} | null
// Example
// api.searchByColor("westernAmerican") = [{"blue": ["mourning", "glory"]}];
```


### Get concept list

**Return** list of all concepts in database

**Sorted by** count of associated colors for all cultures
```javascript
api.getConceptList() = ["concept"]
// Example
// api.getConceptList() = ["love", "passion"]
```


### Search by concept

**Return** list of cultures and their associated colors

**Sorted by** count of associated concepts for all colors
```javascript
api.searchByCulture("concept") = [{"culture": ["color"]} | null
// Example
// api.searchByColor("mourning") = [{"westernAmerican": ["blue", "red"]}];
```

### Get dominant color by concept

**Return** Color that is massively associated to a given concept
```javascript
api.getDominantColorByConcept("concept") = "color" | null
// Example
// api.getDominantColorByConcept("mourning") = [{"westernAmerican": ["blue", "red"]}];
```


## Sources

- [The original image](http://www.informationisbeautiful.net/visualizations/colours-in-cultures/)
- [The original data sheet](https://docs.google.com/spreadsheets/d/1kdEOmMxo-Shy2gGlUpPe_Low3s27ZXIw15hybMmtMDU/edit#gid=0) 
- [Pantone: Communicating With Colour](http://www.amazon.com/exec/obidos/ASIN/0966638328/titb-20/)
- [John Gage: Color and Meaning: Art, Science, and Symbolism](http://www.amazon.com/exec/obidos/ASIN/0520226119/titb-20/)
- [ColorMatters](http://www.colormatters.com/search.html)
- [BrandCurve](http://www.brandcurve.com/color-meanings-around-the-world/)
- [About](http://webdesign.about.com/od/color/a/bl_colorculture.htm)


## Contribute

Feel free to send me an e-mail or submit a pull request. 
To be validated, please consider adding some sources to your additionnal informations.

[Data file](https://github.com/tfrere/colours-in-culture/blob/master/data.json)

## Licence

Released under the MIT [License](https://github.com/tfrere/colours-in-culture/blob/master/LICENSE)
