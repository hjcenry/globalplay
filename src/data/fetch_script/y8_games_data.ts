// Game data for GlobalPlay Games Website
// Updated with CrazyGames hot games and Y8 popular games collection

export interface Game {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  thumbnail: string;
  gameUrl: string;
  rating: number;
  playCount: number;
  tags: string[];
  controls: string;
  featured: boolean;
  trending: boolean;
  isNew: boolean;
}

export const categories = [
  { id: 'action', name: 'Action Games', icon: '⚔️', count: 94 },
  { id: 'puzzle', name: 'Puzzle Games', icon: '🧩', count: 3 },
  { id: 'strategy', name: 'Strategy Games', icon: '🏰', count: 6 },
  { id: 'racing', name: 'Racing Games', icon: '🏁', count: 2 },
  { id: 'shooting', name: 'Shooting Games', icon: '🎯', count: 1 },
  { id: 'adventure', name: 'Adventure Games', icon: '🏃', count: 3 },
];

// Y8 Games Collection
export const y8Games: Game[] = [
  {
    "id": "hide_online",
    "slug": "hide_online",
    "title": "Hide Online",
    "description": "Hide Online is a multiplayer game with a very unique game play. This game consists of two teams, the Props and the Hunters. The Props are the ones who transform to objects. They hide and taunt just to confuse the Hunters. The only objective of the Hunters is to shoot the Props. In this game the Props have only 30 sec to hide by transforming to any object they wish and after that the next 30 second they will taunt or make a sound and it's up to the Hunters to look for them. Just remember not to shoot the wrong object or else you'll lose some life points. You have got a couple of minutes to search and kill the Props or else they will win the game.It's a game of hide and seek with a twist!",
    "shortDescription": "Hide Online is a multiplayer game with a very unique game play.",
    "category": "action",
    "thumbnail": "/images/games/y8/hide_online.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/unity/Ankit/hide_online/?key=3129416&ratio_tolerant=true&value=129832",
    "rating": 0.5,
    "playCount": 67258,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "slope",
    "slug": "slope",
    "title": "Slope",
    "description": "Slope is the ultimate running game that will put your skills to the test. Speed down on a randomized slope. The farther you go, the faster your ball travels. This game might look simple but playing this will give you extreme adrenaline rush. Just remember to avoid obstacles and those red blocks. Always be on track to get a high score and you might have your name on the leaderboard!",
    "shortDescription": "Slope is the ultimate running game that will put your skills to the test.",
    "category": "action",
    "thumbnail": "/images/games/y8/slope.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/unity_webgl/Gani/slope-game_2025_v3/?key=9757549&value=80527",
    "rating": 0.4,
    "playCount": 72288,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "turbo_moto_racer",
    "slug": "turbo_moto_racer",
    "title": "Turbo Moto Racer",
    "description": "Hey adrenaline junkie!. Drive through the highway and avoid all the vehicles on your way. Choose four challenging game modes and select between one or two way. Earn coins for every game and use that in purchasing all the awesome bikes! You can also improve the settings of your bike to suit your kind of driving. Play now and enjoy the ride!",
    "shortDescription": "Hey adrenaline junkie!.",
    "category": "action",
    "thumbnail": "/images/games/y8/turbo_moto_racer.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/unity_webgl/gamosoftstudios/TurboMotoRacer-2022-v1/?key=6842727&value=170775",
    "rating": 0.4,
    "playCount": 119341,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "pool_live_pro",
    "slug": "pool_live_pro",
    "title": "Pool Live Pro",
    "description": "Play your favorite billiards for free! Real-world physics, global rankings, variety of game types and really nice collection of cues provide a great gaming experience for every pool fan! Join the table and show your skills now!",
    "shortDescription": "Play your favorite billiards for free! Real-world physics, global rankings, variety of game types and really nice collection of cues provide a grea...",
    "category": "action",
    "thumbnail": "/images/games/y8/pool_live_pro.jpg",
    "gameUrl": "https://www-billiards.ganymede.eu/y8/?key=y8&value=default",
    "rating": 0.5,
    "playCount": 55712,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "blade_bedlam",
    "slug": "blade_bedlam",
    "title": "Blade & Bedlam",
    "description": "Blade and Bedlam is a thrilling top-down melee game focused on physics-based swordplay. Use your sword to parry, deflect, and attack enemies. Face off against challenging foes as you progress through intense levels. Enhance your knight with powerful items and unique abilities in your quest for survival. Enjoy playing this sword fighting game here at Y8.com!",
    "shortDescription": "Blade and Bedlam is a thrilling top-down melee game focused on physics-based swordplay.",
    "category": "action",
    "thumbnail": "/images/games/y8/blade_bedlam.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/unity_webgl/dpolk/blade-and-bedlam/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 133489,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "bartender_the_right_mix",
    "slug": "bartender_the_right_mix",
    "title": "Bartender: The Right Mix",
    "description": "Welcome to out pre-part cocktail mixing game for cocktail connoisseurs! Pour, shake and serve! Our barman Miguel is in your hands, but watch out, he's a bit partial to a cocktail himself!",
    "shortDescription": "Welcome to out pre-part cocktail mixing game for cocktail connoisseurs! Pour, shake and serve! Our barman Miguel is in your hands, but watch out, h...",
    "category": "action",
    "thumbnail": "/images/games/y8/bartender_the_right_mix.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/html5/akeemywka/bartender_make_right_mix_v6/?key=y8&ratio_tolerant=true&value=default",
    "rating": 0.4,
    "playCount": 59931,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "vex_3",
    "slug": "vex_3",
    "title": "Vex 3",
    "description": "The challenging platformer is back with more dangerous platform to get through. Added ghost recording, stage builder, achievements, and more features.",
    "shortDescription": "The challenging platformer is back with more dangerous platform to get through. Added ghost recording, stage builder, achievements, and more features.",
    "category": "action",
    "thumbnail": "/images/games/y8/vex_3.jpg",
    "gameUrl": "https://html5.gamedistribution.com/762c932b4db74c6da0c1d101b2da8be6/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fvex_3&key=y8&value=default",
    "rating": 0.4,
    "playCount": 161418,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "farm_frenzy_2",
    "slug": "farm_frenzy_2",
    "title": "Farm Frenzy 2",
    "description": "Play Farm Frenzy 2 and enjoy Y8 Games version of the popular farming simulation game genre popularized by games like FarmVille. Starting using your land to grow products and earn a respectable living.",
    "shortDescription": "Play Farm Frenzy 2 and enjoy Y8 Games version of the popular farming simulation game genre popularized by games like FarmVille.",
    "category": "action",
    "thumbnail": "/images/games/y8/farm_frenzy_2.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/html5/akeemywka/farm_frenzy_2/?key=y8&value=default",
    "rating": 0.5,
    "playCount": 104074,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "gunblood",
    "slug": "gunblood",
    "title": "Gunblood",
    "description": "Gunblood is a game that was ported from Flash to HTML5. It's a gun dueling game where the player will master the marksmanship of a pistol or risk being shot. It does feature animated blood. The game play was incredibly well done to last more than a decade. Do you have the aim needed to win in a Gunblood duel?",
    "shortDescription": "Gunblood is a game that was ported from Flash to HTML5.",
    "category": "action",
    "thumbnail": "/images/games/y8/gunblood.jpg",
    "gameUrl": "https://www.gunblood.com/gbhtmlwestern.html?key=y8&value=default",
    "rating": 0.4,
    "playCount": 95373,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "legacy_",
    "slug": "legacy_",
    "title": "Legacy",
    "description": "Legacy is a puzzle-adventure game with the nostalgic vibe and mechanics of classics like Alone in the Dark and Resident Evil. Even though it's short, Legacy manages to create an immersive world that's totally worth spending some time in. Play the Legacy game at Y8 now and have fun.",
    "shortDescription": "Legacy is a puzzle-adventure game with the nostalgic vibe and mechanics of classics like Alone in the Dark and Resident Evil.",
    "category": "action",
    "thumbnail": "/images/games/y8/legacy_.jpg",
    "gameUrl": "https://gamaverse.com/c/f/g/legacy-1732975200/index.html?key=y8&value=default",
    "rating": 0.3,
    "playCount": 23851,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "friday_night_funkin",
    "slug": "friday_night_funkin",
    "title": "Friday Night Funkin",
    "description": "A funny rhythm game where you battle it with your hot girlfriend’s dad. Friday Night Funkin' is a cool music rhythm game. Match notes to score points and don't let the devil beat you. Press [Enter] to start the game. You have a very simple task here to play when the arrow marks coming from below, when the arrows are on the top arrow, then press the exact correct arrows. Play this cool and fun musical game with super jazz music with boosted bass. Boost your adrenaline and be quick to press the correct arrows. Play this fun game only on y8.com",
    "shortDescription": "A funny rhythm game where you battle it with your hot girlfriend’s dad.",
    "category": "action",
    "thumbnail": "/images/games/y8/friday_night_funkin.jpg",
    "gameUrl": "https://kdata1.com/2020/11/friday-night-funkin/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 165724,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "bomb_it_6",
    "slug": "bomb_it_6",
    "title": "Bomb It 6",
    "description": "The addicting two player game Bomb It returns for a sixth edition! Place bombs and attempt to blow up all of your opponents in each level. This version brings new graphics, new modes and a lot more addicting game play!",
    "shortDescription": "The addicting two player game Bomb It returns for a sixth edition! Place bombs and attempt to blow up all of your opponents in each level.",
    "category": "action",
    "thumbnail": "/images/games/y8/bomb_it_6.jpg",
    "gameUrl": "https://html5.gamedistribution.com/8350af18d1b440c99814f8a9b069ee19/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fbomb_it_6&key=y8&value=default",
    "rating": 0.4,
    "playCount": 45768,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "crime_city_3d_2",
    "slug": "crime_city_3d_2",
    "title": "Crime City 3D 2",
    "description": "In this third-person shooter action game, you play as an agent who's aim is to clear y8 city from crime.",
    "shortDescription": "In this third-person shooter action game, you play as an agent who's aim is to clear y8 city from crime.",
    "category": "action",
    "thumbnail": "/images/games/y8/crime_city_3d_2.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/unity/perion1111/CrimeCity3D2/?key=y8&ratio_tolerant=true&value=default",
    "rating": 0.5,
    "playCount": 79235,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "ultimate_douchebag_workout",
    "slug": "ultimate_douchebag_workout",
    "title": "Ultimate Douchebag Workout",
    "description": "In the Ultimate Douchebag Workout, you'll get ripped! Exercising and flexing your muscles will help you look sharp! Utilize some herbs and other (un)healthy substances to assist nature. It makes no difference how you get there as long as you do! Get some attitude, a tan, bigger arms, and the best abs the world has ever seen. It's all for the sake of being the Ultimate Douchebag!",
    "shortDescription": "In the Ultimate Douchebag Workout, you'll get ripped! Exercising and flexing your muscles will help you look sharp! Utilize some herbs and other (u...",
    "category": "action",
    "thumbnail": "/images/games/y8/ultimate_douchebag_workout.jpg",
    "gameUrl": "https://html5.gamedistribution.com/3c6959b8087c448e865fa5d5762cfc81/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fultimate_douchebag_workout&key=y8&value=default",
    "rating": 0.4,
    "playCount": 131535,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "dumb_ways_to_die_original",
    "slug": "dumb_ways_to_die_original",
    "title": "Dumb Ways to Die",
    "description": "Survive the Hilarity in Dumb Ways to Die -  The ultimate challenge game where absurdity can be fatal !",
    "shortDescription": "Survive the Hilarity in Dumb Ways to Die -  The ultimate challenge game where absurdity can be fatal !",
    "category": "action",
    "thumbnail": "/images/games/y8/dumb_ways_to_die_original.jpg",
    "gameUrl": "https://html5.gamedistribution.com/c88fe584f7c0425facc05167283329cc/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fdumb_ways_to_die_original&key=y8&value=default",
    "rating": 0.4,
    "playCount": 190183,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "mighty_motors",
    "slug": "mighty_motors",
    "title": "Mighty Motors",
    "description": "Mighty Motors is the ultimate drag racing! Floor that pedal and win every race as you conquer all drag racing races in your city! Speed up and dominate the city by winning head-to-head drag races. Earn money to buy the nicest car in Mighty Motors!",
    "shortDescription": "Mighty Motors is the ultimate drag racing! Floor that pedal and win every race as you conquer all drag racing races in your city! Speed up and domi...",
    "category": "action",
    "thumbnail": "/images/games/y8/mighty_motors.jpg",
    "gameUrl": "https://html5.gamedistribution.com/2b5991443beb4f1c9fc6eba836096d30/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fmighty_motors&key=y8&value=default",
    "rating": 0.4,
    "playCount": 127772,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "spinny_dungeon",
    "slug": "spinny_dungeon",
    "title": "Spinny Dungeon",
    "description": "Spinny Dungeon is a roguelike slot machine with deckbuilding and whatnot. Load up your reels with gear, spells, and weird junk, manage your health, hunger, and mana, and turn RNG into your deadliest weapon against dungeon monsters and tough bosses. Enjoy playing this roguelike slot machine defense game here at Y8.com!",
    "shortDescription": "Spinny Dungeon is a roguelike slot machine with deckbuilding and whatnot.",
    "category": "action",
    "thumbnail": "/images/games/y8/spinny_dungeon.jpg",
    "gameUrl": "https://gamaverse.com/c/f/g/spinny-dungeon-1744563810/index.html?key=y8&value=default",
    "rating": 0.4,
    "playCount": 98214,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "sprinter",
    "slug": "sprinter",
    "title": "Sprinter",
    "description": "Sprint to victory in “Sprinter” - The Ultimate Running Game!",
    "shortDescription": "Sprint to victory in “Sprinter” - The Ultimate Running Game!",
    "category": "action",
    "thumbnail": "/images/games/y8/sprinter.jpg",
    "gameUrl": "https://html5.gamedistribution.com/6bfd4a61cee4409dbedf37b07e00f08f/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fsprinter&key=y8&value=default",
    "rating": 0.3,
    "playCount": 180666,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "geometry_jump_",
    "slug": "geometry_jump_",
    "title": "Geometry Jump",
    "description": "Geometry Jump is a fun ultra reflexive game to play. Enjoy this neon world where the stranded block needs to reach the end. Boost your reflex skills by jumping over any nasty obstacles that pop up in your path. Enjoy the venture hurdles in three levels of this game, before waiting for newer chapters to be updated. It's easy gameplay but hard to master, so fly and flip your way right now!",
    "shortDescription": "Geometry Jump is a fun ultra reflexive game to play.",
    "category": "action",
    "thumbnail": "/images/games/y8/geometry_jump_.jpg",
    "gameUrl": "https://html5.gamedistribution.com/9b634d67ddd6407c95effd409b947a76/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fgeometry_jump_&key=y8&value=default",
    "rating": 0.4,
    "playCount": 104644,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "handless-millionaire",
    "slug": "handless-millionaire",
    "title": "Handless-Millionaire",
    "description": "If you really want to become a millionaire, you are going to have to take risks! We are not talking about small challenges, but big risks. Indeed, the tickets are in front of you. You will have to catch them by running your hand over the guillotine.",
    "shortDescription": "If you really want to become a millionaire, you are going to have to take risks! We are not talking about small challenges, but big risks.",
    "category": "action",
    "thumbnail": "/images/games/y8/handless-millionaire.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/html5/akeemywka/handless_millionaire_v2/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 90007,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "nobody_expects_exploding_immortal_pigeon",
    "slug": "nobody_expects_exploding_immortal_pigeon",
    "title": "Nobody Expects Exploding Immortal Pigeon",
    "description": "Nobody Expects Exploding Immortal Pigeon is a 2D action-platformer where you play as an indestructible, bread-fueled kamikaze pigeon. Complete absurd missions for a mysterious stranger speaking to you through telephone booths and earn your reward—more bread! Enjoy playing this game here at Y8.com!",
    "shortDescription": "Nobody Expects Exploding Immortal Pigeon is a 2D action-platformer where you play as an indestructible, bread-fueled kamikaze pigeon.",
    "category": "action",
    "thumbnail": "/images/games/y8/nobody_expects_exploding_immortal_pigeon.jpg",
    "gameUrl": "https://gamaverse.com/c/f/g/nobody-expects-exploding-immortal-pigeon-1738875845/index.html?key=y8&value=default",
    "rating": 0.3,
    "playCount": 136248,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "gold_miner",
    "slug": "gold_miner",
    "title": "Gold Miner",
    "description": "In the classic Gold Miner game, play as an old gold miner. The tool of choice is a mining cable reel that swings back and forth. Collect gold quickly enough to reach the next level. Get that bag of money as it's way lighter than gold. Avoid grabbing rocks, they are worthless and will prevent grabbing more valuable objects.",
    "shortDescription": "In the classic Gold Miner game, play as an old gold miner.",
    "category": "action",
    "thumbnail": "/images/games/y8/gold_miner.jpg",
    "gameUrl": "https://goldminer.fbrq.io/goldminer/index.html?key=y8&ratio_tolerant=true&value=default",
    "rating": 0.4,
    "playCount": 122849,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "pandemic_simulator",
    "slug": "pandemic_simulator",
    "title": "Pandemic Simulator",
    "description": "Spread your disease across the world. Upgrade symptoms and resistance as you try to infect all of humans. A fun education game that can help teach how diseases spread around our world.",
    "shortDescription": "Spread your disease across the world.",
    "category": "action",
    "thumbnail": "/images/games/y8/pandemic_simulator.jpg",
    "gameUrl": "https://html5.gamedistribution.com/f2a015a45b6443358238a54f8f4a557f/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fpandemic_simulator&key=y8&value=default",
    "rating": 0.4,
    "playCount": 104874,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "medieval_defense_z",
    "slug": "medieval_defense_z",
    "title": "Medieval Defense Z",
    "description": "Medieval Defense Z is a fun defence game in which you must accompany the king on a journey through the desert. The landscape is overrun by zombies. Hire archers to shoot the zombies from atop the king’s carriage! You have a tower that should be delivered to oasis with a help of donkey. Can you do that?",
    "shortDescription": "Medieval Defense Z is a fun defence game in which you must accompany the king on a journey through the desert.",
    "category": "action",
    "thumbnail": "/images/games/y8/medieval_defense_z.jpg",
    "gameUrl": "https://html5.gamedistribution.com/a90bd3f1fba643828ccfb0109b41a252/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fmedieval_defense_z&key=y8&value=default",
    "rating": 0.4,
    "playCount": 44775,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "mahjong_pet_quest",
    "slug": "mahjong_pet_quest",
    "title": "Mahjong Pet Quest",
    "description": "Dive into the colorful and engaging world of Mahjong Pet Quest, a fun and relaxing puzzle game where classic Mahjong meets adorable animal tiles! Replace the classic Mahjong tiles with cute animal-themed ones! Each tile brings a charming, delightful touch to the game. Explore a variety of levels, each designed to test your skills and logic. The difficulty increases as you progress, ensuring that you’re always challenged! Enjoy bright, vibrant, and beautifully designed visuals. The game’s rich colors and eye-catching designs! The soothing background music and satisfying sound effects help you stay relaxed as you solve each puzzle. The gentle, ambient sounds make it a nice game for unwinding after a long day. Easy to play, hard to master: Mahjong Pet Quest is simple to pick up, but it will take strategy and careful thinking to clear every level! Start your Mahjong adventure now and embark on a journey through endless levels, stunning visuals, and animal-themed fun! How far can you go in Mahjong Pet Quest? Enjoy playing this pet mahjong game here at Y8.com!",
    "shortDescription": "Dive into the colorful and engaging world of Mahjong Pet Quest, a fun and relaxing puzzle game where classic Mahjong meets adorable animal tiles! R...",
    "category": "action",
    "thumbnail": "/images/games/y8/mahjong_pet_quest.jpg",
    "gameUrl": "https://play.wgplayground.com/ifr/79f154d278b5bcacdce57e59f5f9837e?key=y8&value=default",
    "rating": 0.5,
    "playCount": 149381,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "apple_shooter",
    "slug": "apple_shooter",
    "title": "Apple Shooter",
    "description": "Apple Shooter is an HTML5 archery game that will test your skills as an Indian warrior. Being a sharp-shooter is what this game needs since the life of your friend depends on how well you target the apple. Every time you hit the apple, the distance between you and your friend will be farther. Also, there will be some sort of a barricade to make the difficulty more advanced. Your friend's life is at risk. There's no room for mistakes so be brave and be sharp enough to target the apple and try not to kill your dear friend. Take your time in controlling the power and direction of the bow to perfect the shot and save your friend. You can play this exciting game on your mobile phones such as iPhone, Android, and even on your iPads, cool right? Play this addicting game and become an amazing Indian warrior!",
    "shortDescription": "Apple Shooter is an HTML5 archery game that will test your skills as an Indian warrior.",
    "category": "action",
    "thumbnail": "/images/games/y8/apple_shooter.jpg",
    "gameUrl": "https://html5.gamedistribution.com/f85e3e02194545208fa52da0c0992362/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fapple_shooter&key=y8&ratio_tolerant=true&value=default",
    "rating": 0.4,
    "playCount": 27273,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "knife_hit_",
    "slug": "knife_hit_",
    "title": "Knife Hit",
    "description": "You, being a sharp shooter, is going to use your skills in throwing knives to this moving. Knife Hit is a HTML5 mouse skill game where you need to get the right timing when throwing a knife. Don't let the knives touch each other or else, it will be the end of the game.",
    "shortDescription": "You, being a sharp shooter, is going to use your skills in throwing knives to this moving.",
    "category": "action",
    "thumbnail": "/images/games/y8/knife_hit_.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/html5/akeemywka/knife_hit_y8/?key=y8&value=default",
    "rating": 0.3,
    "playCount": 68033,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "battle_robot_wolf_age",
    "slug": "battle_robot_wolf_age",
    "title": "Battle Robot Wolf Age",
    "description": "Battle Robot Wolf Age takes a familiar game concept of building and fighting, it only takes that idea a step further. This game has a model building component to it, that when combined with the animations is really fun. Plus, once you have built your bot, you battle it again others.",
    "shortDescription": "Battle Robot Wolf Age takes a familiar game concept of building and fighting, it only takes that idea a step further.",
    "category": "action",
    "thumbnail": "/images/games/y8/battle_robot_wolf_age.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/html5/annu/battle_robot_wolf_age_ads22_y8/?key=y8&ratio_tolerant=true&value=default",
    "rating": 0.4,
    "playCount": 165482,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "time_shooter",
    "slug": "time_shooter",
    "title": "Time Shooter",
    "description": "Get ready to face multiple enemies in this Time Shooter FPS game arena where time moves only when you move! You must shoot and eliminate all the enemies using your gun while dodging their bullets and watch out for guns thrown back! Move to dodge and shoot! Use your skill to kill all the enemies and advance to next levels! Enjoy playing Time Shooter FPS game brought to you by Y8.com!",
    "shortDescription": "Get ready to face multiple enemies in this Time Shooter FPS game arena where time moves only when you move! You must shoot and eliminate all the en...",
    "category": "action",
    "thumbnail": "/images/games/y8/time_shooter.jpg",
    "gameUrl": "https://html5.gamedistribution.com/1092591e1589474cbb6c42cd388440c6/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Ftime_shooter&key=y8&value=default",
    "rating": 0.4,
    "playCount": 50274,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "elemental_monsters_merge_evolution",
    "slug": "elemental_monsters_merge_evolution",
    "title": "Elemental Monsters: Merge & Evolution",
    "description": "Welcome to the world of \"Elemental Monsters: Merge and Evolution\"! This free online game is perfect for children and teenagers. Develop your logic and strategic thinking while taking part in epic battles with monsters. You will control an army of fire, water, earth and air elementals in an exciting battle to liberate their worlds. Merge and upgrade your elemental monsters and defeat the enemies! Enjoy playing this game here at Y8.com!",
    "shortDescription": "Welcome to the world of \"Elemental Monsters: Merge and Evolution\"! This free online game is perfect for children and teenagers.",
    "category": "action",
    "thumbnail": "/images/games/y8/elemental_monsters_merge_evolution.jpg",
    "gameUrl": "https://html5.gamedistribution.com/e388e07ac5da4a27b5ec727572816213/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 41728,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "five_nights_at_freddy_s_html5",
    "slug": "five_nights_at_freddy_s_html5",
    "title": "Five Nights at Freddy's",
    "description": "Get ready for your new summer job at Freddy Fazbear’s Pizza! The place is famous for its delicious food and fun entertainment, especially the animatronic robots – Freddy Fazbear and his two friends – who are programmed to entertain the visitors. However, these robots can be unpredictable at night, and the restaurant management has decided to hire you as a security guard to keep an eye on things. You must monitor several security cameras and shut the doors to prevent them from getting to your office. But, beware, the use of cameras, doors, and lights will drain the power reserves quickly. Enjoy playing this game here at Y8.com!",
    "shortDescription": "Get ready for your new summer job at Freddy Fazbear’s Pizza! The place is famous for its delicious food and fun entertainment, especially the anima...",
    "category": "action",
    "thumbnail": "/images/games/y8/five_nights_at_freddy_s_html5.jpg",
    "gameUrl": "https://run3.io/popgame/fnaf/fnaf1/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 73340,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "whooo_",
    "slug": "whooo_",
    "title": "Whooo?",
    "description": "Whooo? is a awesome 3D puzzle game with interesting card guessing gameplay and cool animations. You need to guess the characteristics of each people. Play and unlock new cards to improve the game. Play now this game at Y8 on any device and guess the character name. Have a good game.",
    "shortDescription": "Whooo? is a awesome 3D puzzle game with interesting card guessing gameplay and cool animations.",
    "category": "action",
    "thumbnail": "/images/games/y8/whooo_.jpg",
    "gameUrl": "https://html5.gamedistribution.com/1ea3bd32df64429296dfd48d4da956b2/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 117047,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "knee_surgery_simulator",
    "slug": "knee_surgery_simulator",
    "title": "Knee Surgery Simulator",
    "description": "Poor Sarah is experiencing so much pain because of her Knee Osteoarthritis! Medication and other treatment won't work anymore so her only chance is surgery. In this surgery you will completely replace the knee joint so it will prevent the bone to bone friction which causes her tremendous pain! Perform the surgery perfectly and successfully. After that, dress up Sarah in a festive clothes to celebrate her recovery!",
    "shortDescription": "Poor Sarah is experiencing so much pain because of her Knee Osteoarthritis! Medication and other treatment won't work anymore so her only chance is...",
    "category": "action",
    "thumbnail": "/images/games/y8/knee_surgery_simulator.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/html5/annu/knee_surgery_simulator_ads22_y8/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 99193,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "data_diggers",
    "slug": "data_diggers",
    "title": "Data Diggers",
    "description": "Data Diggers is a fun arcade game where you need to merge USBs, connect blocks, download data to get money, and buy new upgrades. The higher the GB amount of your USB, the faster you can download the data. Buy and merge USBs to unlock all the obstacles and complete the level. Play the Data Diggers game at Y8 now and have fun.",
    "shortDescription": "Data Diggers is a fun arcade game where you need to merge USBs, connect blocks, download data to get money, and buy new upgrades.",
    "category": "action",
    "thumbnail": "/images/games/y8/data_diggers.jpg",
    "gameUrl": "https://html5.gamedistribution.com/6f040f42889b4a5f84ae9162a9c7fcba/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fdata_diggers&key=y8&value=default",
    "rating": 0.4,
    "playCount": 153308,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "story_teller",
    "slug": "story_teller",
    "title": "Story Teller",
    "description": "A romantic and magical puzzle game is called Story Teller. You have a wonderful blank storybook in front of you where you may put together an interactive comic strip with a plethora of animated sets and customizable characters who react to your decisions in real-time. Win the coveted Story Teller title by using your creativity to finish various story forms! Play more games only on y8.com",
    "shortDescription": "A romantic and magical puzzle game is called Story Teller.",
    "category": "action",
    "thumbnail": "/images/games/y8/story_teller.jpg",
    "gameUrl": "https://html5.gamemonetize.co/rpcnjfesg7tev1ojyx8dj4wza9g3v6vv/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 42822,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "that_s_not_my_neighbor",
    "slug": "that_s_not_my_neighbor",
    "title": "That's Not My Neighbor",
    "description": "That's Not My Neighbor is a detective puzzle game. Your job is to determine if the person who wants to enter the building is a monster. The monsters can transform into anyone and imitate them. Some monsters are not good at imitation and may develop flaws. Play the That's Not My Neighbor game at Y8 now and have fun.",
    "shortDescription": "That's Not My Neighbor is a detective puzzle game.",
    "category": "action",
    "thumbnail": "/images/games/y8/that_s_not_my_neighbor.jpg",
    "gameUrl": "https://html5.gamemonetize.co/1a9za56ujfca9ykgy3i7j2jvzizwog2w/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 133371,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "lol_2",
    "slug": "lol_2",
    "title": "Lol 2",
    "description": "LOL 2 - Play around and start messing with the familiar faces of well known celebrities and personalities. Drag the yellow circles to make some funny contortions on faces and try not to laugh. Don't forget to post in your profile the screenshot of your work using Y8 screenshot feature. Have fun playing this funny game here at Y8.com!",
    "shortDescription": "LOL 2 - Play around and start messing with the familiar faces of well known celebrities and personalities.",
    "category": "action",
    "thumbnail": "/images/games/y8/lol_2.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/html5/video-igrice/lol2/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 16134,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "doodle_god_ultimate_edition",
    "slug": "doodle_god_ultimate_edition",
    "title": "Doodle God Ultimate Edition",
    "description": "In this addictive game, mix and match different combinations of fire, earth, wind and air to create an entire universe! As you create each element, watch your world come to life as each element comes to life on your planet. The new \"Planet\" mode offers a new way to create a dream world. Create over 300 advanced elements and concepts. Hundreds of interesting, funny and provocative quotes and sayings. New \"Puzzle\" mode. Create locomotives, skyscrapers and more - New \"Quests\" mode. Can you save the princess or escape a desert island?",
    "shortDescription": "In this addictive game, mix and match different combinations of fire, earth, wind and air to create an entire universe! As you create each element,...",
    "category": "action",
    "thumbnail": "/images/games/y8/doodle_god_ultimate_edition.jpg",
    "gameUrl": "https://html5.gamedistribution.com/cd33ecc7b752408ab44036d0c8c1b91f/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fdoodle_god_ultimate_edition&key=y8&value=default",
    "rating": 0.4,
    "playCount": 55746,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "superfighters",
    "slug": "superfighters",
    "title": "Superfighters",
    "description": "**Superfighters** is somehow a legendary **browser** **game** that offers a thrilling and **action**-packed experience for players who enjoy **fighting** games.",
    "shortDescription": "**Superfighters** is somehow a legendary **browser** **game** that offers a thrilling and **action**-packed experience for players who enjoy **figh...",
    "category": "action",
    "thumbnail": "/images/games/y8/superfighters.jpg",
    "gameUrl": "https://html5.gamedistribution.com/a7a878d376bf4223adc51d2ba04fb77c/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fsuperfighters&key=y8&value=default",
    "rating": 0.5,
    "playCount": 167875,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "dragon_world",
    "slug": "dragon_world",
    "title": "Dragon World",
    "description": "Enter the amazing Dragon World and transform yourself into a mighty dragon. You can fly over the mountains, battle other dragons or make them your allies.",
    "shortDescription": "Enter the amazing Dragon World and transform yourself into a mighty dragon.",
    "category": "action",
    "thumbnail": "/images/games/y8/dragon_world.jpg",
    "gameUrl": "https://html5.gamedistribution.com/5cbf62dc7ba54ec2a159e7a61060de73/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fdragon_world&key=y8&value=default",
    "rating": 0.4,
    "playCount": 149673,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "trollface_quest_horror_3",
    "slug": "trollface_quest_horror_3",
    "title": "TrollFace Quest: Horror 3",
    "description": "Welcome to TrollFace Quest, the story of Halloween!",
    "shortDescription": "Welcome to TrollFace Quest, the story of Halloween!",
    "category": "action",
    "thumbnail": "/images/games/y8/trollface_quest_horror_3.jpg",
    "gameUrl": "https://html5.gamedistribution.com/45d45ffccdbb4040bda4a829a11b0534/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Ftrollface_quest_horror_3&key=y8&value=default",
    "rating": 0.4,
    "playCount": 65661,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "aquapark",
    "slug": "aquapark",
    "title": "Aquapark",
    "description": "Reach to the end of the water slide, try to be the first. Bump other players during the race and have fun playing this colorful and sunny water slide game.",
    "shortDescription": "Reach to the end of the water slide, try to be the first.",
    "category": "action",
    "thumbnail": "/images/games/y8/aquapark.jpg",
    "gameUrl": "https://html5.gamemonetize.com/81ricqu9kxmp1h1somvh8iacvz0069ve/?key=y8&value=default",
    "rating": 0.3,
    "playCount": 35637,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "solitaire_klondike_treasure_island",
    "slug": "solitaire_klondike_treasure_island",
    "title": "Solitaire Klondike: Treasure Island",
    "description": "Solitaire Klondike: Treasure Island is a nice solitaire Klondike game with challenges from the pirates. Explore mysterious islands, uncover hidden treasures, and help a fearless heroine escape ruthless villains. You can customize your card decks, stunning animations, and magical boosters to tackle challenges. Play the Solitaire Klondike: Treasure Island game at Y8 now.",
    "shortDescription": "Solitaire Klondike: Treasure Island is a nice solitaire Klondike game with challenges from the pirates.",
    "category": "action",
    "thumbnail": "/images/games/y8/solitaire_klondike_treasure_island.jpg",
    "gameUrl": "https://html5.gamedistribution.com/cfca20a86e8349cfa78eaec18fec60d1/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fsolitaire_klondike_treasure_island&key=y8&value=default",
    "rating": 4.0,
    "playCount": 121532,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "football_legends_2016",
    "slug": "football_legends_2016",
    "title": "Football Legends 2016",
    "description": "Make a goal and win the tournament.",
    "shortDescription": "Make a goal and win the tournament.",
    "category": "action",
    "thumbnail": "/images/games/y8/football_legends_2016.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/html5/madpuffers/Football_new/?key=2365427&value=96587",
    "rating": 0.4,
    "playCount": 42196,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "fish_eat_fish_3_players",
    "slug": "fish_eat_fish_3_players",
    "title": "Fish Eat Fish 3 Players",
    "description": "Dive into the wild, wacky underwater world of Fish Eat Fish 3 Players! Team up with your friends or go head-to-head in an epic 3-player showdown. Gobble up smaller fish, dodge the big bullies, and grow into the fearless ruler of the deep! With every gulp, you get closer to proving who’s the ultimate ocean champion. Get ready for a splashy, snacky, and snappy adventure where survival is a tasty thrill!",
    "shortDescription": "Dive into the wild, wacky underwater world of Fish Eat Fish 3 Players! Team up with your friends or go head-to-head in an epic 3-player showdown.",
    "category": "action",
    "thumbnail": "/images/games/y8/fish_eat_fish_3_players.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/html5/annu/fish_eat_fish_3players_ads22_y8/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 104652,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "bartender_the_celeb_mix",
    "slug": "bartender_the_celeb_mix",
    "title": "Bartender The Celeb Mix",
    "description": "Another installment of the hit series Bartender Mix! Now our pretty suave bartender Miguel will be working in a 5 star hotel bar. Can you help him make the perfect mix for his picky costumers? Or will you make his career flushed in the drain? Mix and match the drinks the make that ultimate cocktail that your costumers will die for!",
    "shortDescription": "Another installment of the hit series Bartender Mix! Now our pretty suave bartender Miguel will be working in a 5 star hotel bar.",
    "category": "action",
    "thumbnail": "/images/games/y8/bartender_the_celeb_mix.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/html5/akeemywka/bartender_the_celebs_mix_v4/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 112015,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "bad_time_simulator_sans_fight_",
    "slug": "bad_time_simulator_sans_fight_",
    "title": "Bad Time Simulator (Sans Fight)",
    "description": "Wanna have a bad time? Then this game is for you. Fight Sans like in UnderTale. (Warning: Spoiler Alert)",
    "shortDescription": "Wanna have a bad time? Then this game is for you. Fight Sans like in UnderTale. (Warning: Spoiler Alert)",
    "category": "action",
    "thumbnail": "/images/games/y8/bad_time_simulator_sans_fight_.jpg",
    "gameUrl": "https://jcw87.github.io/c2-sans-fight/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 84053,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "cs_dust",
    "slug": "cs_dust",
    "title": "CS Dust",
    "description": "CS Dust is a 3D first-person shooter game with two game modes and many different weapons. You can choose a side (police or terrorists) and try to destroy the enemy team to win. Buy new weapons and unlock the legendary AWP to become the new champion. Play the CS Dust game at Y8 now.",
    "shortDescription": "CS Dust is a 3D first-person shooter game with two game modes and many different weapons.",
    "category": "action",
    "thumbnail": "/images/games/y8/cs_dust.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/unity_webgl/perion1111/cs_dust_v1_3a/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 137489,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "asmr_beauty_treatment",
    "slug": "asmr_beauty_treatment",
    "title": "ASMR Beauty Treatment",
    "description": "In the beauty game ASMR Beauty Treatment, Become a dentist and treat your patient's dirt-filled, teeth, brush them remove all the decay shape of the overgrown teeth, and make her look perfect. As the doctor who pops pimples, assist her in treating her facial issue. Apply wax for bulky eyebrows. Enjoy this satisfying blackhead removal technique and make her skin glowing and bouncy skin. Do not forget to dress her up in the latest dresses and make her look happy again. Play more games only on y8.com",
    "shortDescription": "In the beauty game ASMR Beauty Treatment, Become a dentist and treat your patient's dirt-filled, teeth, brush them remove all the decay shape of th...",
    "category": "action",
    "thumbnail": "/images/games/y8/asmr_beauty_treatment.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/html5/annu/asmr_beauty_treatment_Y8_v2403141/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 198772,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "happy_snakes",
    "slug": "happy_snakes",
    "title": "Happy Snakes",
    "description": "Happy Snakes is an addictive io game where you play as a little snake competing for orbs. Get another snake to run into you and collect their orbs to grow longer. Use the speed boost to avoid collisions but watch out, it will shrink your snake.",
    "shortDescription": "Happy Snakes is an addictive io game where you play as a little snake competing for orbs.",
    "category": "action",
    "thumbnail": "/images/games/y8/happy_snakes.jpg",
    "gameUrl": "https://html5.gamedistribution.com/2651a52596c64093b0309ff166d13a6f/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fhappy_snakes&key=y8&value=default",
    "rating": 0.4,
    "playCount": 73199,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "dreader",
    "slug": "dreader",
    "title": "Dreader",
    "description": "Dreader is a short mouse maze game with horror elements. You are in front of computer you are playing a maze game. Enter the Maze where the greater treasure awaits. Are you ready to face the horror on the maze game? How far can yo go down the maze without screaming? Enjoy playing this horror maze game here at Y8.com!",
    "shortDescription": "Dreader is a short mouse maze game with horror elements.",
    "category": "action",
    "thumbnail": "/images/games/y8/dreader.jpg",
    "gameUrl": "https://kdata1.com/2020/10/2811226/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 70337,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "apple_worm",
    "slug": "apple_worm",
    "title": "Apple Worm",
    "description": "Apple Worm is a cute logical puzzle based game with snake-like mechanic. You goal is to help the worm eat the apple and reach the exit point. Bend the worm's body into impossible positions to get to the apple. Are you clever enough to beat all fifteen levels? Enjoy playing Apple Worm puzzle game here at Y8.com!",
    "shortDescription": "Apple Worm is a cute logical puzzle based game with snake-like mechanic.",
    "category": "action",
    "thumbnail": "/images/games/y8/apple_worm.jpg",
    "gameUrl": "https://html5.gamedistribution.com/f3bdc4a7675f4dfda0bd1474f7853dab/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fapple_worm&key=y8&value=default",
    "rating": 0.4,
    "playCount": 139979,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "brick_breaker_chipi_chipi_chapa_chapa_cat",
    "slug": "brick_breaker_chipi_chipi_chapa_chapa_cat",
    "title": "Brick Breaker Chipi Chipi Chapa Chapa Cat",
    "description": "Brick Breaker Chipi Chipi Chapa Chapa Cat is a fun meme game where you need to break bricks, collect power-ups for more fun breaking bricks, and watch Chipy Chipy Chipa Cat and El Primo Bara Bere dancing. Go through interesting and exciting levels in the fun game about Chippy Chippy Chippy Chappa Chappa Cat and El Primo. Pass levels of different difficulty and set a personal record. Play the Brick Breaker Chipi Chipi Chapa Chapa Cat game at Y8 now and have fun.",
    "shortDescription": "Brick Breaker Chipi Chipi Chapa Chapa Cat is a fun meme game where you need to break bricks, collect power-ups for more fun breaking bricks, and wa...",
    "category": "action",
    "thumbnail": "/images/games/y8/brick_breaker_chipi_chipi_chapa_chapa_cat.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/html5/Playgama/brick_breaker_chipi_chipi_chapa_chapa_cat_V2/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 67135,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "the_survey",
    "slug": "the_survey",
    "title": "The Survey",
    "description": "The Survey is a 3D horror game. After a long work time when you ready to play games on your computer and start a survey, it shows you the things that you don't want to watch and know! Atmospheric enveronment and intrective Gameplay. Play the The Survey game at Y8 now and have fun.",
    "shortDescription": "The Survey is a 3D horror game.",
    "category": "action",
    "thumbnail": "/images/games/y8/the_survey.jpg",
    "gameUrl": "https://html5.gamedistribution.com/585e28f239534ba2901bd2cbe03f146b/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fthe_survey&key=y8&value=default",
    "rating": 0.4,
    "playCount": 183184,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "merge_fruit",
    "slug": "merge_fruit",
    "title": "Merge Fruit",
    "description": "Tetris + 2048! Very Popular endless game around the world. You drop some random fruit and two same fruit can merge to high level one. At last, merge your own Big fruit!",
    "shortDescription": "Tetris + 2048! Very Popular endless game around the world.",
    "category": "action",
    "thumbnail": "/images/games/y8/merge_fruit.jpg",
    "gameUrl": "https://html5.gamedistribution.com/2dee9d404697435aa76111eb4015e1d5/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fmerge_fruit&key=y8&value=default",
    "rating": 0.4,
    "playCount": 16781,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "madness_sierra_nevada",
    "slug": "madness_sierra_nevada",
    "title": "Madness Sierra Nevada",
    "description": "Madness Sierra Nevada is a top-down action shooter inspired by Madness Combat and Hotline Miami. There are many enemies, sneak up on them and take them down, grab their weapons and proceed.",
    "shortDescription": "Madness Sierra Nevada is a top-down action shooter inspired by Madness Combat and Hotline Miami.",
    "category": "action",
    "thumbnail": "/images/games/y8/madness_sierra_nevada.jpg",
    "gameUrl": "https://i.gamesgo.net/uploads/game/html5/20036/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 26840,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "getting_over_snow",
    "slug": "getting_over_snow",
    "title": "Getting Over Snow",
    "description": "It's almost Christmas and what better way to start it right than playing this game Getting Over Snow. It's easy, you just need to climb the mountain using your hammer and lastly freeing the mother panda bear. But it doesn't end there; in addition to being a lot of fun, it also tests your timing, accuracy, hand-eye coordination, speed, and timing. Play \"Getting Over Snow\" and feel the Christmas spirit.",
    "shortDescription": "It's almost Christmas and what better way to start it right than playing this game Getting Over Snow.",
    "category": "action",
    "thumbnail": "/images/games/y8/getting_over_snow.jpg",
    "gameUrl": "https://html5.gamedistribution.com/9d57f7222d1442a2aa445aad77362bc8/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fgetting_over_snow&key=y8&value=default",
    "rating": 0.3,
    "playCount": 173356,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "skydom_reforged",
    "slug": "skydom_reforged",
    "title": "Skydom Reforged",
    "description": "From the developers of Match Arena and Skydom! Welcome - Skydom Reforged! New super-duper mod of classical Skydom in the fresh and unique look! Fun match-3 puzzle with truly exciting game modes! Welcome to the magical high kingdoms! Skydom is a bright and exciting puzzle with truly unique game modes! Went through thousands of different match 3 levels and want something refreshing? Have a look inside. Only in Skydom you can face off with different players to determine the best at match 3! Show off your skill against real opponents or connect with friends in live Match 3 action on hundreds of levels with unique settings, gorgeous effects and unexpected turns. New super PvP mechanics and super experiences. Complete exciting challenges on your way up to the heights of Skydom! Let the cutest piggy-magic accompany you in your exciting and challenging journey. Enjoy playing this exciting match-3 puzzle game here at Y8.com!",
    "shortDescription": "From the developers of Match Arena and Skydom! Welcome - Skydom Reforged! New super-duper mod of classical Skydom in the fresh and unique look! Fun...",
    "category": "action",
    "thumbnail": "/images/games/y8/skydom_reforged.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/html5/MatchArena/skydom-reforged/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 87839,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "moto_x3m_winter",
    "slug": "moto_x3m_winter",
    "title": "Moto X3M Winter",
    "description": "What better way to celebrate the holidays than with tons of death-defying stunts? Jump on this bike and get ready to dodge gigantic saw blades while you blast your way across a winter wonderland. Can you make it across each finish line without crashing into a dozen boxes of TNT or some other totally insane hazards? This crazy, wintertime racing game could keep you busy until spring or even beyond!",
    "shortDescription": "What better way to celebrate the holidays than with tons of death-defying stunts? Jump on this bike and get ready to dodge gigantic saw blades whil...",
    "category": "action",
    "thumbnail": "/images/games/y8/moto_x3m_winter.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/html5/madpuffers/MotoX3M_4_Winter_new/?key=2365427&value=148994",
    "rating": 0.4,
    "playCount": 196301,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "murder_mafia",
    "slug": "murder_mafia",
    "title": "Murder Mafia",
    "description": "A humorous survival game to play is called Murder Mafia. Unexpected death can occur in a variety of ways. So, in order to live as long as you can, become an old, wealthy guy, trust no one, and hunt down any potential assassins who could be trying to steal your money and kill you. So keep an eye out for hints and use your additional reflexes to help you survive as long as you can. Play more funny games at y8.com",
    "shortDescription": "A humorous survival game to play is called Murder Mafia.",
    "category": "action",
    "thumbnail": "/images/games/y8/murder_mafia.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/html5/toni/murder_mafia_Y8_v2503171/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 68964,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "sparkchess",
    "slug": "sparkchess",
    "title": "SparkChess",
    "description": "Choose the desired difficulty level of your opponent. Select the color of your chess pieces and enjoy this great classic game of Chess! Spark Chess is not designed to be a brutal, crushing AI. Its purpose is to be fun for you to play and to help you become a better chess player.",
    "shortDescription": "Choose the desired difficulty level of your opponent.",
    "category": "action",
    "thumbnail": "/images/games/y8/sparkchess.jpg",
    "gameUrl": "https://www.sparkchess.com/embed-y8.html?key=y8&value=default",
    "rating": 0.4,
    "playCount": 145843,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "idle_hotel_empire",
    "slug": "idle_hotel_empire",
    "title": "Idle Hotel Empire",
    "description": "Grow your hotel empire in this idle tycoon simulation game. Construct different hotel floors to suit the needs of your customers. This includes constructing standard hotel rooms, cafe bistros, deluxe rooms, meeting rooms for corporate customers, VIP rooms, infinity pools, gym and fitness rooms and of course, the bougee presidential suite. Control hotel employees, move them up and down the elevators to move the cash, and finally cash it in the reception office. Enjoy playing this game here at Y8.com!",
    "shortDescription": "Grow your hotel empire in this idle tycoon simulation game.",
    "category": "action",
    "thumbnail": "/images/games/y8/idle_hotel_empire.jpg",
    "gameUrl": "https://html5.gamedistribution.com/f38a0b6ddb56479387d50472b9dc2171/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fidle_hotel_empire&key=y8&value=default",
    "rating": 0.4,
    "playCount": 134087,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "dead_zed",
    "slug": "dead_zed",
    "title": "Dead Zed",
    "description": "You are in the middle of the zombocalypse and you have to do everything, just survive. Grab the gun and try to stop all waves of zombies which comes after you. Shoot down zombies and don't let them to get you, to come in your building. Upgrade your weapons and make easy the surviving way. Survive this zombocalypse in y8 and good Luck!",
    "shortDescription": "You are in the middle of the zombocalypse and you have to do everything, just survive.",
    "category": "action",
    "thumbnail": "/images/games/y8/dead_zed.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/html5/zoki/a646a84dc850/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 78531,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "bomb_it_5",
    "slug": "bomb_it_5",
    "title": "Bomb It 5",
    "description": "Is your robot the ultimate bomber gladiator? Step into the Bomb It arena and find out. Make your little robot the cutest but most deadly bomberman-style gladiator ever!",
    "shortDescription": "Is your robot the ultimate bomber gladiator? Step into the Bomb It arena and find out.",
    "category": "action",
    "thumbnail": "/images/games/y8/bomb_it_5.jpg",
    "gameUrl": "https://html5.gamedistribution.com/6e9fca49c39246a484f533b946210ea7/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fbomb_it_5&key=y8&value=default",
    "rating": 0.4,
    "playCount": 96792,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "short_life",
    "slug": "short_life",
    "title": "Short Life",
    "description": "In this game you must control our hero and attempt to guide him through a series of different levels. This might sound conventional, but you must also guide him safely without causing him harm or dislodging any of his limbs! The game has 16 fun levels to complete and you can gain a star rating for each level.",
    "shortDescription": "In this game you must control our hero and attempt to guide him through a series of different levels.",
    "category": "action",
    "thumbnail": "/images/games/y8/short_life.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/unity/akeemywka/short_life/index.html?key=y8&value=default",
    "rating": 0.4,
    "playCount": 26665,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "dream_chefs",
    "slug": "dream_chefs",
    "title": "Dream Chefs",
    "description": "Do you have a chef's dream？Dream chef is a fun cooking game. Experience the fever of real cooking in the kitchen without making any effort. You must fulfill customer orders and create different tasty dishes in a restaurant. Cook and serve the hungry customers with their desired orders, as you know, hungry customers are always angry, so hand over the orders as fast as you can and collect money. Upgrade the kitchen and restaurant to attract more customers. Playlot more restaurant and management games only on y8.com",
    "shortDescription": "Do you have a chef's dream？Dream chef is a fun cooking game.",
    "category": "action",
    "thumbnail": "/images/games/y8/dream_chefs.jpg",
    "gameUrl": "https://html5.gamedistribution.com/e21b9828e0a24266b4a943251800dd7a/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fdream_chefs&key=y8&value=default",
    "rating": 0.4,
    "playCount": 32771,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "dream_pet_link_rewarded",
    "slug": "dream_pet_link_rewarded",
    "title": "Dream Pet Link Rewarded",
    "description": "In Dream Pet Link you must connect identical tiles to each other to clear the board. This game features cute animals such as lions, birds, penguins, sheep and many more! Play through all the nine levels of the game and make the best use of the limited time to match the identical tiles to make them disappear. Use the hint sparingly. Enjoy playing this pet matching connect game here at Y8.com!",
    "shortDescription": "In Dream Pet Link you must connect identical tiles to each other to clear the board.",
    "category": "action",
    "thumbnail": "/images/games/y8/dream_pet_link_rewarded.jpg",
    "gameUrl": "https://html5.gamedistribution.com/bf1b6b8b60df49e29569e1731f69b42c/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fdream_pet_link_rewarded&key=y8&value=default",
    "rating": 0.3,
    "playCount": 144970,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "italian_brainrot_who",
    "slug": "italian_brainrot_who",
    "title": "Italian Brainrot Who",
    "description": "Italian Brainrot Who is a fun guessing game where you must identify the most iconic meme characters of the Italian brainrot era! From Bombardino Crocodilo to tung tung tung Sahur, from \"tung-tung-tung\" to \"mamma mia, who even is that?\". Guess them all to become the true hero of Italian Brainrot Who. Play the Italian Brainrot Who game at Y8 now.",
    "shortDescription": "Italian Brainrot Who is a fun guessing game where you must identify the most iconic meme characters of the Italian brainrot era! From Bombardino Cr...",
    "category": "action",
    "thumbnail": "/images/games/y8/italian_brainrot_who.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/unity_webgl/perion1111/italian_brainrot_who_v1n/?key=y8&value=default",
    "rating": 0.4,
    "playCount": 192500,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "hide_n_seek_3d",
    "slug": "hide_n_seek_3d",
    "title": "Hide N Seek 3D",
    "description": "Do you miss playing hide and seek game? Now is the time to play it here now with Hide N Seek 3D. The kids will be hiding in the house and you are going to look for them as they hide in different places in the house. Explore the place, look behind doors, inside closets and search for them. But be careful, you have to to find everyone! Have fun playing this game here at Y8.com!",
    "shortDescription": "Do you miss playing hide and seek game? Now is the time to play it here now with Hide N Seek 3D.",
    "category": "action",
    "thumbnail": "/images/games/y8/hide_n_seek_3d.jpg",
    "gameUrl": "https://html5.gamedistribution.com/048db0a29a28457eab81b507ea86711e/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fhide_n_seek_3d&key=y8&value=default",
    "rating": 0.4,
    "playCount": 134960,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "onet_connect_christmas",
    "slug": "onet_connect_christmas",
    "title": "Onet Connect Christmas",
    "description": "Objective in this cute seasonal Mahjong connect game is to earn as many points as possible! Select your favorite Christmas theme and start playing! Find pairs of identical tiles and remove all of them from the field before the time is up. The path between two tiles can't have more than three lines or two 90 degree angles though. Play strategically because if there is no possible move left to link two tiles, the board reshuffles. If you have no shuffle left or the time has run out, the game is over! Can you start a new record?",
    "shortDescription": "Objective in this cute seasonal Mahjong connect game is to earn as many points as possible! Select your favorite Christmas theme and start playing!...",
    "category": "action",
    "thumbnail": "/images/games/y8/onet_connect_christmas.jpg",
    "gameUrl": "https://play.famobi.com/onet-connect-christmas/A-5U0J1?key=y8&value=default",
    "rating": 0.4,
    "playCount": 52713,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "pubg_pixel",
    "slug": "pubg_pixel",
    "title": "Pubg Pixel",
    "description": "PUBG PIXEL is an online multiplayer battle royale game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch where players fight to remain the last alive. The last person or team alive wins the match. On average, a full round takes no more than 10 minutes.",
    "shortDescription": "PUBG PIXEL is an online multiplayer battle royale game in which up to one hundred players fight in a battle royale, a type of large-scale last man ...",
    "category": "action",
    "thumbnail": "/images/games/y8/pubg_pixel.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/unity/y8-studio/studd-idnetstorage/PubgPixel_V2_64Bit/?key=9757549&value=171284",
    "rating": 0.4,
    "playCount": 151318,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "basketball_io",
    "slug": "basketball_io",
    "title": "Basketball io",
    "description": "Dribble, shoot, score, WIN! Grab the ball and run it to the hoop! You can play as shooter and defender. Just grab the ball and run until you get to the hoop and do a perfect slam! Defend by smashing and blocking the opponents trying to steal the ball from your team. Beat your opponent team by scoring more before the time ends! Absolute fun and adrenaline for you as you take on the world with basketball.io",
    "shortDescription": "Dribble, shoot, score, WIN! Grab the ball and run it to the hoop! You can play as shooter and defender.",
    "category": "action",
    "thumbnail": "/images/games/y8/basketball_io.jpg",
    "gameUrl": "https://html5.gamedistribution.com/9228bd814819452aa3f0619577a0703d/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fbasketball_io&key=y8&value=default",
    "rating": 0.4,
    "playCount": 113280,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "sprunki_incredibox",
    "slug": "sprunki_incredibox",
    "title": "Sprunki",
    "description": "Sprunki Incredibox is creative music-making game that lets you mix awesome beats, melodies, and crazy sound effects. The goal in Incredibox Sprunki is to create catchy, harmonious music by mixing different sounds together. Each character in the game represents a different type of sound, like beats, vocals, or special effects. As you mix and layer these sounds, you’ll build a great song! The best part? There’s no right or wrong way to play. Just experiment with different beats, mix things up, and let your creativity take over! Choose a Sound: Every character makes a different noise! Pick sounds for each character to start your musical mix. Create a Melody: Combine the sounds carefully. Mix beats with melodies and harmonies to make your song flow smoothly. Unlock Bonuses: When you put certain sounds together in the right way, you’ll unlock surprise animations and even more sounds! Enjoy playing this game here at Y8.com!",
    "shortDescription": "Sprunki Incredibox is creative music-making game that lets you mix awesome beats, melodies, and crazy sound effects.",
    "category": "action",
    "thumbnail": "/images/games/y8/sprunki_incredibox.jpg",
    "gameUrl": "https://html5.gamedistribution.com/26272dd59da64ef58bfd83f89ad4ae2f/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fsprunki_incredibox&key=y8&value=default",
    "rating": 0.5,
    "playCount": 77309,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "guess_their_answer",
    "slug": "guess_their_answer",
    "title": "Guess Their Answer",
    "description": "Sharpen Your Mind and test your knowledge with Guess Their Answer IQ Games! Are you a trivia buff with an insatiable thirst for knowledge? Do you love testing your mental agility? \"Guess Their Answer - IQ Games\" is the perfect app to put your brainpower to the test! A Trivia Twist: This innovative game takes the classic trivia format and adds a unique layer of strategy. Answer a wide range of trivia questions, from history and science to pop culture and current events. Enjoy playing this quiz game here at Y8.com!",
    "shortDescription": "Sharpen Your Mind and test your knowledge with Guess Their Answer IQ Games! Are you a trivia buff with an insatiable thirst for knowledge? Do you l...",
    "category": "action",
    "thumbnail": "/images/games/y8/guess_their_answer.jpg",
    "gameUrl": "https://play.famobi.com/guess-their-answer/A-5U0J1?key=y8&value=default",
    "rating": 0.4,
    "playCount": 82737,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "police_driver",
    "slug": "police_driver",
    "title": "Police Driver",
    "description": "Police Driver - select your police car and let's go to driving in the different maps. Do amazing stunts. Speed of car are your best friend.",
    "shortDescription": "Police Driver - select your police car and let's go to driving in the different maps. Do amazing stunts. Speed of car are your best friend.",
    "category": "action",
    "thumbnail": "/images/games/y8/police_driver.jpg",
    "gameUrl": "https://html5.gamedistribution.com/45e1bf79af534ce690a658dbdd289cf2/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fpolice_driver&key=y8&value=default",
    "rating": 0.4,
    "playCount": 32258,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "a_little_to_the_left",
    "slug": "a_little_to_the_left",
    "title": "A Little to the Left",
    "description": "A Little to the Left is a unique puzzle logic game in a household setting. This game lets you discover and reveal the daily household interactions of an individual coping with the feeling of being out of control. The need to make tidy adjustments, sorting, stacking and micro alignments aim to offer relief from a radical possession that holds the objects with a tight grip. Your job is to uncover the particular arrangement for the items at hand by clicking, dragging and dropping into place. Correctly placed items are straightened up, and cause much less anxiety. Enjoy playing this unique puzzle logic game here at Y8.com!",
    "shortDescription": "A Little to the Left is a unique puzzle logic game in a household setting.",
    "category": "action",
    "thumbnail": "/images/games/y8/a_little_to_the_left.jpg",
    "gameUrl": "https://static.playunblocked.com/2020/09/a-little-to-the-left/index.html?key=y8&value=default",
    "rating": 0.4,
    "playCount": 186098,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "parkour_world",
    "slug": "parkour_world",
    "title": "Parkour World",
    "description": "Welcome to Parkour World, an exhilarating Minecraft-inspired parkour game with thrilling challenges and delightful gameplay. Each level in this game boasts its own distinct and features, ensuring a fresh and exciting experience every time you play. While the initial levels may seem relatively simple, as you progress through the game. By the time you conquer the first ten levels, you'll find yourself facing increasingly demanding obstacles. Get ready to run, and conquer in Parkour World! Enjoy playing this game here at Y8.com!",
    "shortDescription": "Welcome to Parkour World, an exhilarating Minecraft-inspired parkour game with thrilling challenges and delightful gameplay.",
    "category": "action",
    "thumbnail": "/images/games/y8/parkour_world.jpg",
    "gameUrl": "https://html5.gamedistribution.com/128e8e785690472683afb686c4a54762/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fparkour_world&key=y8&value=default",
    "rating": 0.4,
    "playCount": 187323,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "moto_x3m_2",
    "slug": "moto_x3m_2",
    "title": "Moto X3M 2",
    "description": "Moto X3M 2 is an exciting motorcycle racing game that is sure to keep you on the edge of your seat. It's the second opus of the successful Moto X3M series.",
    "shortDescription": "Moto X3M 2 is an exciting motorcycle racing game that is sure to keep you on the edge of your seat.",
    "category": "action",
    "thumbnail": "/images/games/y8/moto_x3m_2.jpg",
    "gameUrl": "https://storage.y8.com/y8-studio/html5/madpuffers/MotoX3M_2_new/?key=2365427&value=101993",
    "rating": 0.4,
    "playCount": 151270,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  },
  {
    "id": "the_light_temple",
    "slug": "the_light_temple",
    "title": "Fireboy And Watergirl Light Temple",
    "description": "This time Fireboy and Watergirl made by Oslo Albet are exploring the Light Temple Use the temple light to reach the exit safely Switch between Fireboy Watergirl but be careful Fireboy cannot touch water and Watergirl cannot touch fire.",
    "shortDescription": "This time Fireboy and Watergirl made by Oslo Albet are exploring the Light Temple Use the temple light to reach the exit safely Switch between Fire...",
    "category": "action",
    "thumbnail": "/images/games/y8/the_light_temple.jpg",
    "gameUrl": "https://html5.gamedistribution.com/383ad09b92c7446b9113cccc29630517/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fthe_light_temple&key=y8&value=default",
    "rating": 0.4,
    "playCount": 147452,
    "tags": [
      "action",
      "y8",
      "popular"
    ],
    "controls": "Keyboard & Mouse",
    "featured": false,
    "trending": true,
    "isNew": false
  }
];

// Note: 请手动将 y8Games 合并到主要的 games 数组中
// 或者创建一个新的合并函数来组合所有游戏数据

// Utility functions
export const getFeaturedGames = (): Game[] => {
  return y8Games.filter(game => game.featured);
};

export const getTrendingGames = (): Game[] => {
  return y8Games.filter(game => game.trending);
};

export const getNewGames = (): Game[] => {
  return y8Games.filter(game => game.isNew);
};

export const getGamesByCategory = (categoryId: string): Game[] => {
  return y8Games.filter(game => game.category === categoryId);
};

export const getGameBySlug = (category: string, slug: string): Game | undefined => {
  return y8Games.find(game => game.category === category && game.slug === slug);
};

export const getGameById = (id: string): Game | undefined => {
  return y8Games.find(game => game.id === id);
};

export const searchGames = (query: string): Game[] => {
  const lowercaseQuery = query.toLowerCase();
  return y8Games.filter(
    game =>
      game.title.toLowerCase().includes(lowercaseQuery) ||
      game.description.toLowerCase().includes(lowercaseQuery) ||
      game.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
