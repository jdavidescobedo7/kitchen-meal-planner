/* Shared recipe library — single source of truth for planner (index.html) + kitchen dashboard (dashboard.html). */
const i = (name, qty, aisle) => ({name, qty, aisle});
window.RECIPES = [
  /* ===== ASIAN ===== */
  {id:"korean-beef-bowl",name:"Korean Ground Beef Bowls",cuisine:"Asian",effort:["fast"],protein:"beef",time:25,
   tags:["high-protein","one-pan-ish"],
   ing:[i("Ground beef (90/10)","1 lb","Meat"),i("Jasmine rice","1 cup","Pantry & Dry Goods"),i("Gochujang","1 tbsp (mild)","Sauces & Condiments"),i("Soy sauce","3 tbsp","Sauces & Condiments"),i("Garlic","3 cloves","Produce"),i("Fresh ginger","1 in","Produce"),i("Green onions","1 bunch","Produce"),i("Sesame oil","1 tbsp","Sauces & Condiments"),i("Eggs","2","Dairy & Eggs"),i("Sesame seeds","1 tsp","Spices & Baking")],
   steps:["Cook rice.","Brown beef with garlic + ginger; drain.","Stir in gochujang, soy, sesame oil; simmer 2 min.","Serve over rice with fried egg, green onion, sesame."]},

  {id:"teriyaki-salmon",name:"Sheet-Pan Teriyaki Salmon + Broccolini",cuisine:"Asian",effort:["fast","one-pan"],protein:"salmon",time:25,
   tags:["high-protein","sheet-pan"],
   ing:[i("Salmon fillets","2 (6 oz)","Seafood"),i("Broccolini","2 bunches","Produce"),i("Teriyaki sauce","1/3 cup","Sauces & Condiments"),i("Honey","1 tbsp","Pantry & Dry Goods"),i("Garlic","2 cloves","Produce"),i("Sesame seeds","1 tsp","Spices & Baking"),i("Jasmine rice","1 cup","Pantry & Dry Goods")],
   steps:["Toss broccolini with oil on a sheet pan; roast 425°F 8 min.","Add salmon, brush with teriyaki+honey; roast 10–12 min.","Serve over rice, sprinkle sesame."]},

  {id:"chicken-stirfry",name:"Garlic-Ginger Chicken Stir-Fry",cuisine:"Asian",effort:["fast","one-pan"],protein:"chicken",time:25,
   tags:["high-protein","veg-forward"],
   ing:[i("Chicken thighs (boneless)","1.25 lb","Meat"),i("Broccoli","1 head","Produce"),i("Bell pepper","1","Produce"),i("Soy sauce","3 tbsp","Sauces & Condiments"),i("Oyster sauce","2 tbsp","Sauces & Condiments"),i("Garlic","3 cloves","Produce"),i("Fresh ginger","1 in","Produce"),i("Cornstarch","1 tbsp","Spices & Baking"),i("Jasmine rice","1 cup","Pantry & Dry Goods")],
   steps:["Sear chicken; remove.","Stir-fry broccoli + pepper.","Add garlic, ginger, sauces + cornstarch slurry; return chicken.","Serve over rice."]},

  {id:"beef-broccoli",name:"Beef & Broccoli",cuisine:"Asian",effort:["fast","one-pan"],protein:"beef",time:30,
   tags:["high-protein","veg-forward"],
   ing:[i("Flank steak","1 lb","Meat"),i("Broccoli","1 head","Produce"),i("Soy sauce","1/4 cup","Sauces & Condiments"),i("Oyster sauce","2 tbsp","Sauces & Condiments"),i("Garlic","3 cloves","Produce"),i("Cornstarch","2 tbsp","Spices & Baking"),i("Brown sugar","1 tbsp","Spices & Baking"),i("Jasmine rice","1 cup","Pantry & Dry Goods")],
   steps:["Slice steak thin, toss with cornstarch.","Sear; remove.","Stir-fry broccoli, add garlic + sauces.","Return beef, toss to glaze; serve over rice."]},

  {id:"pad-krapow",name:"Thai Basil Chicken (Pad Krapow)",cuisine:"Asian",effort:["fast","one-pan"],protein:"chicken",time:20,
   tags:["high-protein"],
   ing:[i("Ground chicken","1 lb","Meat"),i("Thai basil","1 bunch","Produce"),i("Garlic","4 cloves","Produce"),i("Thai chili or serrano","1 (optional — omit for mild)","Produce"),i("Soy sauce","2 tbsp","Sauces & Condiments"),i("Fish sauce","1 tbsp","Sauces & Condiments"),i("Oyster sauce","1 tbsp","Sauces & Condiments"),i("Eggs","2","Dairy & Eggs"),i("Jasmine rice","1 cup","Pantry & Dry Goods")],
   steps:["Fry garlic + chili.","Add chicken; brown.","Add sauces, then basil to wilt.","Serve over rice with a fried egg."]},

  {id:"salmon-rice-bowl",name:"Salmon & Cucumber Rice Bowls",cuisine:"Asian",effort:["fast"],protein:"salmon",time:25,
   tags:["high-protein","veg-forward"],
   ing:[i("Salmon fillets","2 (6 oz)","Seafood"),i("Persian cucumbers","3","Produce"),i("Avocado","1","Produce"),i("Soy sauce","2 tbsp","Sauces & Condiments"),i("Sriracha","1 tbsp","Sauces & Condiments"),i("Mayonnaise","2 tbsp","Sauces & Condiments"),i("Rice vinegar","1 tbsp","Sauces & Condiments"),i("Jasmine rice","1 cup","Pantry & Dry Goods"),i("Sesame seeds","1 tsp","Spices & Baking")],
   steps:["Cook rice; season with rice vinegar.","Sear or bake salmon.","Top rice with flaked salmon, cucumber, avocado, sriracha-mayo."]},

  {id:"miso-salmon",name:"Miso-Glazed Salmon + Bok Choy",cuisine:"Asian",effort:["fast","one-pan"],protein:"salmon",time:25,
   tags:["high-protein","veg-forward"],
   ing:[i("Salmon fillets","2 (6 oz)","Seafood"),i("Baby bok choy","3 heads","Produce"),i("White miso","2 tbsp","Sauces & Condiments"),i("Honey","1 tbsp","Pantry & Dry Goods"),i("Soy sauce","1 tbsp","Sauces & Condiments"),i("Fresh ginger","1 in","Produce"),i("Jasmine rice","1 cup","Pantry & Dry Goods")],
   steps:["Whisk miso, honey, soy, ginger; brush on salmon.","Broil salmon 8–10 min.","Sauté bok choy.","Serve over rice."]},

  /* ===== AMERICAN COMFORT ===== */
  {id:"smash-burgers",name:"Smash Burgers + Crispy Brussels",cuisine:"American",effort:["fast"],protein:"beef",time:30,
   tags:["high-protein"],
   ing:[i("Ground beef (80/20)","1 lb","Meat"),i("Brussels sprouts","1 lb","Produce"),i("Burger buns","4","Bakery"),i("American cheese","4 slices","Dairy & Eggs"),i("Onion","1","Produce"),i("Pickles","1 jar","Sauces & Condiments"),i("Balsamic vinegar","1 tbsp","Sauces & Condiments")],
   steps:["Roast halved brussels 425°F 22 min, finish with balsamic.","Smash beef balls on hot skillet; cheese + onion.","Build burgers."]},

  {id:"steak-broccolini",name:"Pan-Seared Steak + Garlic Broccolini",cuisine:"American",effort:["fast"],protein:"steak",time:30,
   tags:["high-protein","veg-forward"],
   ing:[i("Ribeye or NY strip steaks","2","Meat"),i("Broccolini","2 bunches","Produce"),i("Garlic","4 cloves","Produce"),i("Butter","3 tbsp","Dairy & Eggs"),i("Baby potatoes","1.5 lb","Produce"),i("Fresh thyme","few sprigs","Produce")],
   steps:["Roast potatoes.","Sear steak, baste with butter, garlic, thyme; rest.","Sauté broccolini in same pan.","Plate."]},

  {id:"roast-chicken-thighs",name:"One-Pan Roast Chicken Thighs + Potatoes",cuisine:"American",effort:["one-pan","involved"],protein:"chicken",time:50,
   tags:["high-protein","sheet-pan"],
   ing:[i("Chicken thighs (bone-in)","6","Meat"),i("Baby potatoes","1.5 lb","Produce"),i("Carrots","4","Produce"),i("Lemon","1","Produce"),i("Garlic","1 head","Produce"),i("Rosemary","few sprigs","Produce"),i("Olive oil","3 tbsp","Pantry & Dry Goods")],
   steps:["Toss potatoes + carrots with oil on sheet pan.","Nestle chicken, season, add garlic + lemon.","Roast 425°F 40 min."]},

  {id:"honey-garlic-chicken-bowl",name:"Honey-Garlic Chicken & Ranch Bowls",cuisine:"American",effort:["fast"],protein:"chicken",time:25,
   tags:["high-protein","veg-forward","mild","low-carb"],
   ing:[i("Chicken breast","1.25 lb","Meat"),i("Honey","2 tbsp","Pantry & Dry Goods"),i("Soy sauce","2 tbsp","Sauces & Condiments"),i("Garlic","3 cloves","Produce"),i("Romaine","1 head","Produce"),i("Celery","3 stalks","Produce"),i("Carrots","2","Produce"),i("Ranch dressing","1/2 cup","Sauces & Condiments")],
   steps:["Sear + chop chicken; glaze with honey, soy, garlic.","Build bowls over chopped romaine + veg with ranch (add rice if you want)."]},

  {id:"sausage-peppers",name:"Sheet-Pan Chicken Sausage + Peppers",cuisine:"American",effort:["one-pan","fast"],protein:"chicken",time:30,
   tags:["high-protein","sheet-pan"],
   ing:[i("Chicken sausage","1 pkg (4)","Meat"),i("Bell peppers","3","Produce"),i("Onion","1","Produce"),i("Baby potatoes","1 lb","Produce"),i("Olive oil","2 tbsp","Pantry & Dry Goods"),i("Italian seasoning","1 tsp","Spices & Baking")],
   steps:["Toss everything with oil + seasoning on a sheet pan.","Roast 425°F 28 min, tossing once."]},

  {id:"pork-chops-apples",name:"Pan-Seared Pork Chops + Apples",cuisine:"American",effort:["fast"],protein:"pork",time:30,
   tags:["high-protein"],
   ing:[i("Bone-in pork chops","2","Meat"),i("Apples","2","Produce"),i("Onion","1","Produce"),i("Butter","2 tbsp","Dairy & Eggs"),i("Dijon mustard","1 tbsp","Sauces & Condiments"),i("Chicken stock","1/2 cup","Pantry & Dry Goods"),i("Green beans","1 lb","Produce")],
   steps:["Sear chops; rest.","Sauté apples + onion in butter.","Deglaze with stock + Dijon; sauce chops.","Steam green beans."]},

  /* ===== PERSIAN ===== */
  {id:"joojeh-kabab",name:"Joojeh Kabab (Saffron Chicken) + Rice",cuisine:"Persian",effort:["involved"],protein:"chicken",time:55,
   tags:["high-protein"],
   ing:[i("Chicken thighs (boneless)","1.5 lb","Meat"),i("Saffron","1 pinch","Spices & Baking"),i("Greek yogurt","1/2 cup","Dairy & Eggs"),i("Lemon","2","Produce"),i("Onion","1","Produce"),i("Basmati rice","1.5 cups","Pantry & Dry Goods"),i("Butter","2 tbsp","Dairy & Eggs")],
   steps:["Marinate chicken in saffron, yogurt, lemon, grated onion 2+ hr.","Grill or broil until charred.","Serve with buttered basmati."]},

  {id:"koobideh",name:"Beef Koobideh Kababs",cuisine:"Persian",effort:["involved"],protein:"beef",time:45,
   tags:["high-protein"],
   ing:[i("Ground beef (80/20)","1.5 lb","Meat"),i("Onion","1","Produce"),i("Saffron","1 pinch","Spices & Baking"),i("Sumac","1 tsp","Spices & Baking"),i("Basmati rice","1.5 cups","Pantry & Dry Goods"),i("Butter","2 tbsp","Dairy & Eggs"),i("Persian cucumbers","2","Produce")],
   steps:["Mix beef with grated+drained onion, salt; rest 30 min.","Form on skewers; broil/grill.","Serve over basmati, dust with sumac."]},

  {id:"zereshk-polo",name:"Zereshk Polo ba Morgh (Barberry Rice + Chicken)",cuisine:"Persian",effort:["involved"],protein:"chicken",time:60,
   tags:["high-protein"],
   ing:[i("Chicken thighs (bone-in)","6","Meat"),i("Basmati rice","1.5 cups","Pantry & Dry Goods"),i("Dried barberries (zereshk)","1/3 cup","Pantry & Dry Goods"),i("Saffron","1 pinch","Spices & Baking"),i("Onion","1","Produce"),i("Butter","3 tbsp","Dairy & Eggs"),i("Slivered almonds","2 tbsp","Spices & Baking")],
   steps:["Braise chicken with onion + saffron.","Parboil + steam basmati.","Sauté barberries in butter; fold into rice with chicken."]},

  {id:"kuku-sabzi",name:"Kuku Sabzi (Persian Herb Frittata)",cuisine:"Persian",effort:["fast"],protein:"egg",time:30,
   tags:["veg-forward"],
   ing:[i("Eggs","6","Dairy & Eggs"),i("Parsley","1 bunch","Produce"),i("Cilantro","1 bunch","Produce"),i("Dill","1 bunch","Produce"),i("Green onions","1 bunch","Produce"),i("Walnuts","1/4 cup","Spices & Baking"),i("Flatbread / pita","1 pkg","Bakery")],
   steps:["Chop herbs fine; mix with beaten eggs + walnuts.","Cook low in oiled pan until set; flip.","Serve with flatbread + yogurt."]},

  /* ===== TAPAS / SPANISH ===== */
  {id:"pollo-ajillo",name:"Pollo al Ajillo (Garlic Chicken)",cuisine:"Tapas",effort:["fast"],protein:"chicken",time:30,
   tags:["high-protein"],
   ing:[i("Chicken thighs (boneless)","1.5 lb","Meat"),i("Garlic","1 head","Produce"),i("Dry sherry or white wine","1/2 cup","Sauces & Condiments"),i("Olive oil","1/4 cup","Pantry & Dry Goods"),i("Parsley","1 bunch","Produce"),i("Crusty bread","1 loaf","Bakery"),i("Baby potatoes","1 lb","Produce")],
   steps:["Brown chicken in olive oil.","Add sliced garlic, deglaze with sherry; reduce.","Finish with parsley.","Serve with roasted potatoes + bread."]},

  {id:"gambas-style-salmon",name:"Garlic-Paprika Salmon (Gambas-Style)",cuisine:"Tapas",effort:["fast"],protein:"salmon",time:25,
   tags:["high-protein"],
   ing:[i("Salmon fillets","2 (6 oz)","Seafood"),i("Garlic","5 cloves","Produce"),i("Smoked paprika","1 tsp","Spices & Baking"),i("Olive oil","1/4 cup","Pantry & Dry Goods"),i("Lemon","1","Produce"),i("Crusty bread","1 loaf","Bakery"),i("Asparagus","1 bunch","Produce")],
   steps:["Warm olive oil with sliced garlic + paprika.","Spoon over seared salmon.","Roast asparagus; serve with bread for the oil."]},

  {id:"steak-romesco",name:"Steak with Romesco + Charred Scallions",cuisine:"Tapas",effort:["involved"],protein:"steak",time:40,
   tags:["high-protein","veg-forward"],
   ing:[i("Flat-iron or strip steaks","2","Meat"),i("Roasted red peppers","1 jar","Pantry & Dry Goods"),i("Almonds","1/3 cup","Spices & Baking"),i("Garlic","2 cloves","Produce"),i("Sherry vinegar","1 tbsp","Sauces & Condiments"),i("Green onions","2 bunches","Produce"),i("Olive oil","1/4 cup","Pantry & Dry Goods")],
   steps:["Blend peppers, almonds, garlic, vinegar, oil → romesco.","Sear steak; rest.","Char scallions.","Slice steak over romesco."]},

  /* ===== PASTA (non-tomato) ===== */
  {id:"cacio-pepe-chicken",name:"Cacio e Pepe with Chicken",cuisine:"Pasta",effort:["fast"],protein:"chicken",time:25,
   tags:["high-protein"],
   ing:[i("Spaghetti","12 oz","Pantry & Dry Goods"),i("Chicken breast","1 lb","Meat"),i("Pecorino Romano","4 oz","Dairy & Eggs"),i("Parmesan","2 oz","Dairy & Eggs"),i("Black pepper","2 tsp","Spices & Baking"),i("Butter","2 tbsp","Dairy & Eggs")],
   steps:["Cook pasta, reserve water.","Sear + slice chicken.","Toss pasta with cheese, pepper, butter + starchy water to emulsify."]},

  {id:"lemon-garlic-chicken-pasta",name:"Lemon-Garlic Chicken Pasta + Broccolini",cuisine:"Pasta",effort:["fast"],protein:"chicken",time:30,
   tags:["high-protein","veg-forward"],
   ing:[i("Fettuccine","12 oz","Pantry & Dry Goods"),i("Chicken breast","1.25 lb","Meat"),i("Broccolini","1 bunch","Produce"),i("Lemon","2","Produce"),i("Garlic","4 cloves","Produce"),i("Parmesan","3 oz","Dairy & Eggs"),i("Butter","3 tbsp","Dairy & Eggs"),i("Heavy cream","1/2 cup","Dairy & Eggs")],
   steps:["Cook pasta + broccolini together last 2 min.","Sear chicken.","Make lemon-garlic butter-cream sauce; toss everything with parm."]},

  {id:"pesto-salmon-pasta",name:"Pesto Salmon Pasta",cuisine:"Pasta",effort:["fast"],protein:"salmon",time:25,
   tags:["high-protein"],
   ing:[i("Penne","12 oz","Pantry & Dry Goods"),i("Salmon fillets","2 (6 oz)","Seafood"),i("Basil pesto","1/2 cup","Sauces & Condiments"),i("Peas","1 cup","Frozen"),i("Parmesan","2 oz","Dairy & Eggs"),i("Lemon","1","Produce")],
   steps:["Cook penne with peas added at the end.","Bake/sear salmon; flake.","Toss pasta with pesto, fold in salmon, finish with parm + lemon."]},

  {id:"brown-butter-pasta",name:"Brown-Butter Sage Pasta + Chicken",cuisine:"Pasta",effort:["fast"],protein:"chicken",time:25,
   tags:["high-protein"],
   ing:[i("Rigatoni","12 oz","Pantry & Dry Goods"),i("Chicken thighs (boneless)","1.25 lb","Meat"),i("Butter","4 tbsp","Dairy & Eggs"),i("Fresh sage","1 pkg","Produce"),i("Parmesan","3 oz","Dairy & Eggs"),i("Walnuts","1/4 cup","Spices & Baking")],
   steps:["Cook pasta.","Sear + slice chicken.","Brown butter with sage; toss pasta, chicken, parm, toasted walnuts."]},

  {id:"garlic-parm-broccolini-pasta",name:"Garlic-Parm Broccolini Pasta",cuisine:"Pasta",effort:["fast"],protein:"chickpea",time:25,
   tags:["veg-forward"],
   ing:[i("Orecchiette","12 oz","Pantry & Dry Goods"),i("Broccolini","2 bunches","Produce"),i("Chickpeas","1 can","Pantry & Dry Goods"),i("Garlic","5 cloves","Produce"),i("Parmesan","3 oz","Dairy & Eggs"),i("Red pepper flakes","1 tsp","Spices & Baking"),i("Olive oil","1/4 cup","Pantry & Dry Goods")],
   steps:["Cook pasta.","Sauté garlic + chickpeas + broccolini in olive oil + chili flakes.","Toss with pasta, parm, starchy water."]},

  /* ===== AIR-FRYER / INSTANT POT / LOWER-CARB ADDITIONS ===== */
  {id:"af-salmon-brussels",name:"Air-Fryer Salmon Bites + Crispy Brussels",cuisine:"Asian",effort:["fast","one-pan"],protein:"salmon",time:25,
   tags:["high-protein","low-carb","air-fryer","mild"],
   ing:[i("Salmon fillets","2 (6 oz)","Seafood"),i("Brussels sprouts","1 lb","Produce"),i("Soy sauce","2 tbsp","Sauces & Condiments"),i("Honey","1 tbsp","Pantry & Dry Goods"),i("Garlic","2 cloves","Produce"),i("Sesame seeds","1 tsp","Spices & Baking"),i("Olive oil","2 tbsp","Pantry & Dry Goods")],
   steps:["Cube salmon; toss with soy, honey, garlic.","Air-fry brussels 380°F 12 min.","Add salmon, air-fry 7 min more.","Sprinkle sesame."]},

  {id:"af-steak-bites",name:"Air-Fryer Steak Bites + Potatoes",cuisine:"American",effort:["fast"],protein:"steak",time:30,
   tags:["high-protein","air-fryer","mild"],
   ing:[i("Sirloin steak","1.25 lb","Meat"),i("Baby potatoes","1.5 lb","Produce"),i("Butter","2 tbsp","Dairy & Eggs"),i("Garlic","3 cloves","Produce"),i("Fresh thyme","few sprigs","Produce"),i("Broccolini","1 bunch","Produce")],
   steps:["Halve potatoes; air-fry 400°F 15 min.","Add cubed steak + garlic butter; air-fry 7 min.","Steam broccolini alongside."]},

  {id:"af-chicken-brussels",name:"Air-Fryer Crispy Chicken Thighs + Brussels",cuisine:"American",effort:["fast","one-pan"],protein:"chicken",time:30,
   tags:["high-protein","low-carb","air-fryer","mild"],
   ing:[i("Chicken thighs (bone-in)","6","Meat"),i("Brussels sprouts","1 lb","Produce"),i("Garlic powder","1 tsp","Spices & Baking"),i("Smoked paprika","1 tsp","Spices & Baking"),i("Olive oil","2 tbsp","Pantry & Dry Goods"),i("Lemon","1","Produce")],
   steps:["Season thighs; air-fry 380°F 22 min, skin up.","Add halved brussels last 12 min.","Finish with lemon."]},

  {id:"korean-beef-wraps",name:"Korean Beef Lettuce Wraps",cuisine:"Asian",effort:["fast"],protein:"beef",time:20,
   tags:["high-protein","low-carb","mild"],
   ing:[i("Ground beef (90/10)","1 lb","Meat"),i("Butter lettuce","2 heads","Produce"),i("Soy sauce","3 tbsp","Sauces & Condiments"),i("Honey","1 tbsp","Pantry & Dry Goods"),i("Garlic","3 cloves","Produce"),i("Fresh ginger","1 in","Produce"),i("Green onions","1 bunch","Produce"),i("Persian cucumbers","2","Produce"),i("Sesame oil","1 tbsp","Sauces & Condiments")],
   steps:["Brown beef with garlic + ginger.","Glaze with soy, honey, sesame oil.","Spoon into lettuce cups; top cucumber + green onion."]},

  {id:"ip-shredded-chicken",name:"Instant Pot Shredded Chicken Bowls",cuisine:"American",effort:["fast","involved"],protein:"chicken",time:35,
   tags:["high-protein","instant-pot","mild","batch"],
   ing:[i("Chicken breast","2 lb","Meat"),i("Chicken stock","1 cup","Pantry & Dry Goods"),i("Garlic","3 cloves","Produce"),i("Smoked paprika","1 tsp","Spices & Baking"),i("Jasmine rice","1 cup","Pantry & Dry Goods"),i("Romaine","1 head","Produce"),i("Avocado","1","Produce"),i("Lime","1","Produce")],
   steps:["Pressure-cook chicken with stock, garlic, paprika 12 min.","Shred.","Serve over rice or greens with avocado + lime (great for leftovers)."]},

  {id:"steak-cobb",name:"Steak Cobb Salad",cuisine:"American",effort:["fast"],protein:"steak",time:25,
   tags:["high-protein","low-carb","mild"],
   ing:[i("Sirloin or flat-iron steak","1 lb","Meat"),i("Romaine","2 hearts","Produce"),i("Eggs","3","Dairy & Eggs"),i("Bacon","4 slices","Meat"),i("Avocado","1","Produce"),i("Blue cheese or feta","3 oz","Dairy & Eggs"),i("Ranch or vinaigrette","1/2 cup","Sauces & Condiments")],
   steps:["Sear steak; rest + slice.","Hard-boil eggs; crisp bacon.","Build salad; arrange rows; dress."]},

  {id:"shirazi-kabab",name:"Chicken Kabab + Shirazi Salad",cuisine:"Persian",effort:["fast"],protein:"chicken",time:30,
   tags:["high-protein","low-carb","mild"],
   ing:[i("Chicken thighs (boneless)","1.5 lb","Meat"),i("Greek yogurt","1/3 cup","Dairy & Eggs"),i("Lemon","2","Produce"),i("Persian cucumbers","3","Produce"),i("Tomato","2","Produce"),i("Onion","1","Produce"),i("Mint","1 bunch","Produce"),i("Olive oil","2 tbsp","Pantry & Dry Goods")],
   steps:["Marinate chicken in yogurt + lemon; broil or air-fry.","Dice cucumber, tomato, onion fine for shirazi; dress with lemon + oil + mint."]}
];
