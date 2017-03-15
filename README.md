# What is this ?

A pure javascript plugin for retrieve culture meanings for a color.

# How to use

```javascript

  import whichCulture   	from 'plugins/coloursInCulture';

  let colorMatch = new whichCulture(colors[index].hex, culture);
  colorMatch.init();
  console.log(colorMatch.cultures);
  console.log(colorMatch.name);

```

# Sources

This is based on the excellent work of David McCandless
http://www.informationisbeautiful.net/visualizations/colours-in-cultures/

The original work document is Here
https://docs.google.com/spreadsheets/d/1kdEOmMxo-Shy2gGlUpPe_Low3s27ZXIw15hybMmtMDU/edit#gid=0

Pantone: Communicating With Colour	http://www.amazon.com/exec/obidos/ASIN/0966638328/titb-20/
John Gage: Color and Meaning: Art, Science, and Symbolism	http://www.amazon.com/exec/obidos/ASIN/0520226119/titb-20/
ColorMatters	http://www.colormatters.com/search.html
BrandCurve	http://www.brandcurve.com/color-meanings-around-the-world/
About	http://webdesign.about.com/od/color/a/bl_colorculture.htm
