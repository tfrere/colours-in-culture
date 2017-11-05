Array.min = function( array ){
       return Math.min.apply( Math, array );
};

const hexc = (colorval) => {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    return '#' + parts.join('');
}


const whichCulture = function(color, culture) {

  this.currentCulture = culture;
  this.differenceArray = [];
  this.lowest = "";

  this.currentColor = {
    hex: color,
    rgb: {
      r: 0,
      g: 0,
      b: 0,
    }
  }

  this.data = [
      {
          "hex": "#e20613",
          "name": "red",
          rgb: {r:0,g:0,b:0},
          "cultures": {
            "westernAmerican": ["hot", "love", "passion", "power", "eroticism", "radical (political)", "excitement", "boldness", "devil", "danger", "desire", "anger", "spiceness"],
            "westernEuropean": ["danger"],
            "southAmerican": ["success", "triumph"],
            "russia": ["revolution", "beauty", "luck"],
            "india": ["heat", "passion", "sensuality", "energy", "the bride"],
            "northAfrica": ["good luck"],
            "southAfrica": ["mourning"],
            "muslim": ["fire"],
            "asia": ["marriage", "happiness", "prosperity"],
            "chinese": ["wedding", "fertility", "happiness", "success", "fortune", "good luck"],
            "japanese": ["love", "passion", "excitement", "strength", "danger", "profound urges", "aggression", "celebration"],
            "nativeAmericans": ["warmth", "passion", "heart", "emotions", "success"],
          }
      },
      {
          "hex": "#f29101",
          "name": "orange",
          rgb: {r:0,g:0,b:0},
          "cultures": {
            "westernAmerican": ["friendly", "reliable", "warmth"],
            "westernEuropean": [""],
            "southAmerican": [""],
            "russia": [""],
            "india": ["auspicious", "desire", "energising", "holy", "fertility"],
            "northAfrica": [""],
            "southAfrica": [""],
            "muslim": [""],
            "asia": [""],
            "chinese": ["learning", "kinship"],
            "japanese": ["enthusiasm", "balance", "warmth", "energy", "flamboyance"],
            "nativeAmericans": ["learning", "healing"],
          }
      },
      {
          "hex": "#ffe500",
          "name": "yellow",
          rgb: {r:0,g:0,b:0},
          "cultures": {
            "westernAmerican": ["fun", "energetic", "jubilant", "peace", "overpowering", "cowardly", "quarantine", "jaundice"],
            "westernEuropean": [""],
            "southAmerican": ["mourning"],
            "russia": [""],
            "india": ["divinity", "laughter", "energising", "joy", "attracts", "love", "willpower", "repels evil", "sensuality"],
            "northAfrica": [""],
            "southAfrica": [""],
            "muslim": ["strenght", "mourning"],
            "asia": ["sacred", "against evil", "imperial"],
            "chinese": ["royalty", "nourishing", "respect"],
            "japanese": ["joy", "deceit", "courage", "cowardice", "hazard", "illness", "idealism"],
            "nativeAmericans": ["illumination", "love", "overcoming challenges", "trouble", "inspiration"],
          }
      },
      {
          "hex": "#33aa52",
          "name": "green",
          rgb: {r:0,g:0,b:0},
          "cultures": {
            "westernAmerican": ["earthy", "grow", "natural", "environmental", "trust", "jealousy", "calm", "luck", "money"],
            "westernEuropean": [""],
            "southAmerican": ["death"],
            "russia": [""],
            "india": ["fertility", "vitality", "life", "islam", "love", "compassion", "soothes", "universal oneness", "happiness", "tradition"],
            "northAfrica": ["islam"],
            "southAfrica": [""],
            "muslim": ["islam", "heaven", "paradise", "god"],
            "asia": ["harmony", "peace", "eternity", "prosperity", "family"],
            "chinese": ["growth", "life", "infidelity", "exorcism", "sunrise", "vigour"],
            "japanese": ["nature", "environment", "jealousy / envy", "eternal life", "misfortune", "good luck", "youth", "living willfully"],
            "nativeAmericans": [""],
          }
      },
      {
          "hex": "#4980c0",
          "name": "blue",
          rgb: {r:0,g:0,b:0},
          "cultures": {
            "westernAmerican": ["quiet", "serious", "passivity", "corporate", "liberal", "cold", "smart", "progress", "music", "trust", "freedom", "royal", "medicine", "loyalty", "depression", "peaceful", "objective / rational"],
            "westernEuropean": [""],
            "southAmerican": ["defeat / trouble"],
            "russia": [""],
            "india": ["creativity", "communication", "calm", "gods", "sacred"],
            "northAfrica": [""],
            "southAfrica": [""],
            "muslim": ["heaven", "spirituality", "immortality", "mourning", "merciful"],
            "asia": ["wealth", "self-cultivation"],
            "chinese": [""],
            "japanese": ["staility", "purity", "cold", "wealth", "loyalty", "depression", "peace", "technology", "femininity", "life"],
            "nativeAmericans": ["trouble", "north", "cold", "intuition", "defeat"],
          }
      },
      {
          "hex": "#a777b1",
          "name": "purple",
          rgb: {r:0,g:0,b:0},
          "cultures": {
            "westernAmerican": ["ambivalence", "extravagant", "mystery", "modesty", "virtue", "power", "sexiness", "sophistication", "artificial", "eclectic", "sensual", "vanity", "royal", "decadent", "romantic", "elegant"],
            "westernEuropean": [""],
            "southAmerican": ["mourning"],
            "russia": [""],
            "india": ["air", "intuition", "understanding"],
            "northAfrica": [""],
            "southAfrica": [""],
            "muslim": [""],
            "asia": ["mourning", "expensive"],
            "chinese": [""],
            "japanese": ["ceremony", "spirituality", "enlightenment", "mourning", "nobility", "wisdom", "royalty", "cruelty", "arrogance", "mysterious"],
            "nativeAmericans": ["healing", "gratitude", "wisdom"],
          }
      },
      {
          "hex": "#4b0082",
          "name": "indigo",
          rgb: {r:0,g:0,b:0},
          "cultures": {
            "westernAmerican": [""],
            "westernEuropean": [""],
            "southAmerican": [""],
            "russia": [""],
            "india": ["seeing", "knowing"],
            "northAfrica": [""],
            "southAfrica": [""],
            "muslim": [""],
            "asia": [""],
            "chinese": [""],
            "japanese": [""],
            "nativeAmericans": [""],
          }
      },
      {
          "hex": "#a9713d",
          "name": "brown",
          rgb: {r:0,g:0,b:0},
          "cultures": {
            "westernAmerican": ["uncultivated", "laziness", "security", "spoiled", "reliable", "solid", "romantic", "warm", "earthy", "rustic"],
            "westernEuropean": [""],
            "southAmerican": [""],
            "russia": [""],
            "india": [""],
            "northAfrica": [""],
            "southAfrica": [""],
            "muslim": [""],
            "asia": [""],
            "chinese": [""],
            "japanese": ["the outdoors", "simplicity", "endurance", "home", "earth", "comfort"],
            "nativeAmericans": ["self-discipline", "knowing", "good"],
          }
      },
      {
          "hex": "#1d1d1b",
          "name": "black",
          rgb: {r:0,g:0,b:0},
          "cultures": {
            "westernAmerican": ["mourning", "death", "overpowering", "aloof", "evil", "submission", "eternity", "style", "power", "authority"],
            "westernEuropean": ["mourning"],
            "southAmerican": [""],
            "russia": [""],
            "india": ["anger", "darkness", "negativity", "inertia", "evil", "penance"],
            "northAfrica": [""],
            "southAfrica": [""],
            "muslim": ["mourning", "clergy", "devotion (Shi'ite women)"],
            "asia": ["career", "knowledge", "self-cultivation", "mourning", "evil influences", "penance"],
            "chinese": ["young boys", "reliability", "trust"],
            "japanese": ["age", "fear", "mystery", "wealth", "bad luck", "experience", "depth", "mourning", "unhappiness", "evil", "solemnity", "style", "class", "nobility"],
            "nativeAmericans": ["harmony", "reflection", "self-examination", "death", "west", "problems"],
          }
      },
      {
          "hex": "#ffffff",
          "name": "white",
          rgb: {r:0,g:0,b:0},
          "cultures": {
            "westernAmerican": ["perishability", "clarity", "tranquility", "luxury", "vagueness", "emptyness", "bride", "sterility", "neutral", "purity", "summer", "truce"],
            "westernEuropean": [""],
            "southAmerican": [""],
            "russia": ["truce"],
            "india": ["death and rebirth", "brightness", "peace", "tranquility", "truce"],
            "northAfrica": [""],
            "southAfrica": ["truce"],
            "muslim": ["prayer", "death", "peace", "putiry", "truce"],
            "asia": ["mourning", "travel", "children", "peace", "putiry", "marriage"],
            "chinese": ["mourning", "death", "truce"],
            "japanese": ["humilty", "mourning", "death", "youth", "sacred", "reverence", "cleanliness", "putiry", "truce"],
            "nativeAmericans": ["sharing", "magnetism", "happiness", "peace", "warmth"],
          }
      },
      {
          "hex": "#ed7aa2",
          "name": "pink",
          rgb: {r:0,g:0,b:0},
          "cultures": {
          "westernAmerican": ["girl", "feminine", "cute", "tranquillising"],
          "westernEuropean": [""],
          "southAmerican": [""],
          "russia": [""],
          "india": [""],
          "northAfrica": [""],
          "southAfrica": [""],
          "muslim": [""],
          "asia": ["marriage"],
          "chinese": [""],
          "japanese": ["flirtatious", "purity", "sexuality", "life", "good health", "girlish", "feminine", "child-like personality"],
          "nativeAmericans": ["motivation", "seeing", "working", "creativity"],
        }
      },
      {
          "hex": "#7c7b7a",
          "name": "grey",
          rgb: {r:0,g:0,b:0},
          "cultures": {
            "westernAmerican": ["pollution", "decay", "boredom", "respect", "elegance", "humility"],
            "westernEuropean": [""],
            "southAmerican": [""],
            "russia": [""],
            "india": [""],
            "northAfrica": [""],
            "southAfrica": [""],
            "muslim": [""],
            "asia": ["travel", "helpful people"],
            "chinese": [""],
            "japanese": ["staid", "intelligence", "reliability", "old age", "conservative", "modesty"],
            "nativeAmericans": ["honouring", "friendship"],
          }
      },
      {
          "hex": "#ffe500",
          "name": "gold",
          rgb: {r:0,g:0,b:0},
          "cultures": {
            "westernAmerican": ["wealth", "money"],
            "westernEuropean": [""],
            "southAmerican": [""],
            "russia": [""],
            "india": [""],
            "northAfrica": [""],
            "southAfrica": [""],
            "muslim": [""],
            "asia": ["strength", "wealth"],
            "chinese": ["happiness", "wealth"],
            "japanese": ["the heavens", "religion", "royalty"],
            "nativeAmericans": [""],
          }
      }
  ];

  this.hex2rgb = function( object ) {

    object.rgb.r = "";
    object.rgb.g = "";
    object.rgb.b = "";

  	if ( object.hex.charAt(0) == '#' ) {
  		object.hex = object.hex.substr(1);
  	}

  	object.rgb.r = object.hex.charAt(0) + object.hex.charAt(1);
  	object.rgb.g = object.hex.charAt(2) + object.hex.charAt(3);
  	object.rgb.b = object.hex.charAt(4) + object.hex.charAt(5);

  	object.rgb.r = parseInt( object.rgb.r, 16 );
  	object.rgb.g = parseInt( object.rgb.g, 16 );
  	object.rgb.b = parseInt( object.rgb.b, 16 );

  }

  this.init = function() {

    var that = this;

    this.hex2rgb(this.currentColor);

    this.data.map(function(object) {
      that.hex2rgb(object);
    	that.differenceArray.push(Math.sqrt((object.rgb.r - that.currentColor.rgb.r) * (object.rgb.r - that.currentColor.rgb.r) + (object.rgb.g - that.currentColor.rgb.g) * (object.rgb.g - that.currentColor.rgb.g) + (object.rgb.b - that.currentColor.rgb.b) * (object.rgb.b - that.currentColor.rgb.b)));
      that.lowest = Array.min(that.differenceArray);
    });

    const indexOfAnswer = this.differenceArray.indexOf(this.lowest);
    const cultures = Object.keys(this.data[indexOfAnswer].cultures);
    let culture = "";

    for(var i = 0; cultures.length > i; i++)
      if(this.currentCulture == cultures[i])
        culture = Object.values(this.data[indexOfAnswer].cultures)[i];

    let answer = {
      name: this.data[indexOfAnswer].name,
      cultures: culture,
    };

    return answer;

  }

};

var culture = "westernAmerican";
var update = function(culture) {
  $('.card-box').each(function(index) {
    var colors = [];
    colors[index] = {};
    colors[index].hex = hexc($(this).css('backgroundColor'));
    // console.log(colors[index].hex);
    var colorMatch = new whichCulture(colors[index].hex, culture);
    var cultures = colorMatch.init().cultures;
    var name = colorMatch.init().name;
    $(this).find('.culture').html("");
    $(this).find('.card-label span.name').html(name);
    $(this).find('.card-label span.color').html(colors[index].hex);
    $(this).removeClass('empty');
    let text = "";
    // console.log(cultures);
    if(cultures.length > 0 && cultures[0] != "") {
      for(var i = 0; i < cultures.length; i++) {
        text += "<div class='tag'><span>" + cultures[i] + "</span></div>";
      }
    }
    else {
      $(this).addClass('empty');
      text = "<div class='card-empty'><div>¯\\(ツ)/¯</div>Oops, there's no data yet.<span>";
    }
    $(this).find('.culture').html(text);
  });
}
