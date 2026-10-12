/* Farben für den Marker-Konfigurator.
   EINE gemeinsame Liste "colors" für Markerfarbe UND Gravurfarbe — eine neue Farbe
   hier eintragen, und sie erscheint automatisch bei beiden. Bei der Gravurfarbe wird
   zusätzlich automatisch der Spezialeintrag "wie Markerfarbe" vorangestellt, der
   braucht hier keinen eigenen Eintrag.

   Zeile hinzufügen = neuer Button (bei Markerfarbe UND Gravurfarbe), Zeile entfernen =
   Button verschwindet (bei beiden), "hex" ändern = Farbton ändert sich (bei beiden).
   "glitter": true streut feine Punkte auf die Oberfläche (Glitzer-Filament-Look,
   z. B. wie "Vertigo Cherry"). "hex_glitter" ist optional und legt die Farbe
   dieser Punkte fest (weglassen = Weiß).
   "name_en" ist optional: englischer Anzeigename für diese Farbe, wird benutzt,
   wenn der Konfigurator auf Englisch (EN) umgeschaltet wird. Fehlt er, wird
   ersatzweise der deutsche "name" angezeigt.

   WICHTIG: Diese Datei muss im selben Ordner wie die HTML-Datei liegen, dann
   funktioniert sie auch ganz ohne Webserver — einfach die HTML-Datei per
   Doppelklick im Browser öffnen, Änderungen hier speichern und die Seite neu
   laden (F5).

   "stl_export": true blendet den Button "Als STL exportieren" ein (Standard:
   ausgeblendet, also false oder die Zeile ganz weglassen). */
var MARKER_COLORS = {

  "stl_export": false,

  "colors": [
       { "name": "Jade",			      "hex": "#08776d", "glitter": true, "hex_glitter": "#ffffff", "name_en": "Jade" },
       { "name": "Gold",			      "hex": "#a37f29", "glitter": true, "hex_glitter": "#ffffff", "name_en": "Gold" },
       { "name": "Silber",			      "hex": "#a3a9a7", "glitter": true, "hex_glitter": "#ffffff", "name_en": "Silver" },
       { "name": "Kirschrot", 		   "hex": "#7e2430", "glitter": true, "hex_glitter": "#ffffff", "name_en": "Cherry Red" },
       { "name": "Mystique", 		      "hex": "#45192d", "glitter": true, "hex_glitter": "#ffffff", "name_en": "Mystique" },
       { "name": "Mocha",			      "hex": "#b98a58", "glitter": true, "hex_glitter": "#643414", "name_en": "Mocha" },
       { "name": "Weiß",              	"hex": "#f0ece4", "glitter": false, "name_en": "White" },
       { "name": "Schwarz",           	"hex": "#141516", "glitter": false, "name_en": "Black" },
       { "name": "Rot",               	"hex": "#d8382c", "glitter": false, "name_en": "Red" },
       { "name": "Orange",            	"hex": "#ee7d1f", "glitter": false, "name_en": "Orange" },
       { "name": "Gelb",              	"hex": "#f1c21b", "glitter": false, "name_en": "Yellow" },
       { "name": "Melonengelb",        "hex": "#ffab01", "glitter": false, "name_en": "Melone-Yellow" },
       { "name": "Elfenbein",          "hex": "#eddfc9", "glitter": false, "name_en": "Ivory" },     
       { "name": "Grün",              	"hex": "#438931", "glitter": false, "name_en": "Green" },
       { "name": "Magenta",            "hex": "#e41371", "glitter": false, "name_en": "Magenta" },
       { "name": "Lila",            	"hex": "#ca379b", "glitter": false, "name_en": "Purple" },
       { "name": "Blau",              	"hex": "#0d87bd", "glitter": false, "name_en": "Blue" },
       { "name": "Dunkelblau",         "hex": "#101c45", "glitter": false, "name_en": "Dark Blue" },     
       { "name": "Braun",              "hex": "#493529", "glitter": false, "name_en": "Brown" },
       { "name": "Türkis",             "hex": "#2dd3e0", "glitter": false, "name_en": "Turquoise" },
       { "name": "Rosa",              	"hex": "#f77885", "glitter": false, "name_en": "Rose" },
       { "name": "Olivengrün",         "hex": "#59703e", "glitter": false, "name_en": "Olive" }
  ]

};
