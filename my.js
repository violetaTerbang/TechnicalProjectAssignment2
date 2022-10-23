const movies = [
    {
      id: 985939,
      adult: false,
      title: 'Fall',
      original_title: 'Fall',
      poster_path: 'https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg',
      popularity: 6059.21,
      vote_average: 7.4,
      overview:
        'For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights',
      release_date: '2022-08-11',
    },
    {
      id: 532639,
      adult: false,
      title: 'Pinocchio',
      original_title: 'Pinocchio',
      poster_path: 'https://image.tmdb.org/t/p/w500/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg',
      popularity: 4374.186,
      vote_average: 6.8,
      overview: 'A wooden puppet embarks on a thrilling adventure to become a real boy.',
      release_date: '2022-09-07',
    },
    {
      id: 760741,
      adult: false,
      title: 'Beast',
      original_title: 'Beast',
      poster_path: 'https://image.tmdb.org/t/p/w500/iRV0IB5xQeOymuGGUBarTecQVAl.jpg',
      popularity: 3966.681,
      vote_average: 7.1,
      overview: 'A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.',
      release_date: '2022-08-11',
    },
    {
      id: 760161,
      adult: false,
      title: 'Orphan: First Kill',
      original_title: 'Orphan: First Kill',
      poster_path: 'https://image.tmdb.org/t/p/w500/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg',
      popularity: 3204.398,
      vote_average: 7.1,
      overview:
        'After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.',
      release_date: '2022-07-27',
    },
    {
      id: 629176,
      adult: false,
      title: 'Samaritan',
      original_title: 'Samaritan',
      poster_path: 'https://image.tmdb.org/t/p/w500/vwq5iboxYoaSpOmEQrhq9tHicq7.jpg',
      popularity: 2933.265,
      vote_average: 7,
      overview:
        'Thirteen year old Sam Cleary  suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 20 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.',
      release_date: '2022-08-25',
    },
    {
      id: 579974,
      adult: false,
      title: 'RRR',
      original_title: 'రౌద్రం రణం రుధిరం',
      poster_path: 'https://image.tmdb.org/t/p/w500/wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg',
      popularity: 2592.005,
      vote_average: 7.8,
      overview: "A fictional history of two legendary revolutionaries' journey away from home before they began fighting for their country in the 1920s.",
      release_date: '2022-03-24',
    },
    {
      id: 810693,
      adult: false,
      title: 'Jujutsu Kaisen 0',
      original_title: '劇場版 呪術廻戦 0',
      poster_path: 'https://image.tmdb.org/t/p/w500/yzkgx79vj1KsZBzxFBIsQBwBkPE.jpg',
      popularity: 2383.269,
      vote_average: 8,
      overview:
        "Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the curse that haunts him?",
      release_date: '2021-12-24',
    },
    {
      id: 616037,
      adult: false,
      title: 'Thor: Love and Thunder',
      original_title: 'Thor: Love and Thunder',
      poster_path: 'https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
      popularity: 2309.939,
      vote_average: 6.8,
      overview:
        'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
      release_date: '2022-07-06',
    },
    {
      id: 610150,
      adult: false,
      title: 'Dragon Ball Super: Super Hero',
      original_title: 'ドラゴンボール超 スーパーヒーロー',
      poster_path: 'https://image.tmdb.org/t/p/w500/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg',
      popularity: 2272.782,
      vote_average: 8,
      overview:
        'The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.',
      release_date: '2022-06-11',
    },
    {
      id: 960700,
      adult: false,
      title: 'Fullmetal Alchemist: The Revenge of Scar',
      original_title: '鋼の錬金術師 完結編 復讐者スカー',
      poster_path: 'https://image.tmdb.org/t/p/w500/c5OwwBNyJkwyroIOIJL9IiRjydR.jpg',
      popularity: 1944.941,
      vote_average: 6.9,
      overview: 'In this sequel to the 2017 live-action netflix Adaptation of the manga the Elric brothers meet their toughest opponent yet — a lone serial killer with a large scar on his forehead.',
      release_date: '2022-05-20',
    },
    {
      id: 766507,
      adult: false,
      title: 'Prey',
      original_title: 'Prey',
      poster_path: 'https://image.tmdb.org/t/p/w500/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg',
      popularity: 1850.89,
      vote_average: 7.9,
      overview:
        'When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.',
      release_date: '2022-08-02',
    },
    {
      id: 921360,
      adult: false,
      title: 'Wire Room',
      original_title: 'Wire Room',
      poster_path: 'https://image.tmdb.org/t/p/w500/b9ykj4v8ykjRoGB7SpI1OuxblNU.jpg',
      popularity: 1741.76,
      vote_average: 6.9,
      overview:
        'New recruit Justin Rosa must monitor arms-smuggling cartel member Eddie Flynn — and keep him alive at all costs. When a SWAT team descends on Flynn’s home, Rosa breaks protocol and contacts the gangster directly to save his life. As gunmen break into the Wire Room and chaos erupts, Mueller and Rosa make a final, desperate stand against the corrupt agents and officials who seek to destroy evidence and kill them both.',
      release_date: '2022-09-02',
    },
    {
      id: 781099,
      adult: false,
      title: 'Inexorable',
      original_title: 'Inexorable',
      poster_path: 'https://image.tmdb.org/t/p/w500/iiclsw6zgRJz5D5Cc6sn4Cs9GQo.jpg',
      popularity: 1680.515,
      vote_average: 5.6,
      overview: 'Desperately seeking inspiration for the follow-up novel to his bestseller "Inexorable", Marcel Bellmer moves in his wife\'s old family mansion with his family.',
      release_date: '2022-04-06',
    },
    {
      id: 361743,
      adult: false,
      title: 'Top Gun: Maverick',
      original_title: 'Top Gun: Maverick',
      poster_path: 'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
      popularity: 1645.58,
      vote_average: 8.4,
      overview:
        'After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.',
      release_date: '2022-05-24',
    },
    {
      id: 507086,
      adult: false,
      title: 'Jurassic World Dominion',
      original_title: 'Jurassic World Dominion',
      poster_path: 'https://image.tmdb.org/t/p/w500/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg',
      popularity: 1634.454,
      vote_average: 7.1,
      overview:
        'Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.',
      release_date: '2022-06-01',
    },
    {
      id: 773867,
      adult: false,
      title: 'Seoul Vibe',
      original_title: '서울대작전',
      poster_path: 'https://image.tmdb.org/t/p/w500/ffX0TL3uKerLXACkuZGWhAPMbAq.jpg',
      popularity: 1597.596,
      vote_average: 6.9,
      overview: 'Chasing speed, dreams and money, a team of drivers get involved in the slush fund investigation of a powerful figure during the 1988 Seoul Olympics.',
      release_date: '2022-08-26',
    },
    {
      id: 539681,
      adult: false,
      title: 'DC League of Super-Pets',
      original_title: 'DC League of Super-Pets',
      poster_path: 'https://image.tmdb.org/t/p/w500/r7XifzvtezNt31ypvsmb6Oqxw49.jpg',
      popularity: 1575.235,
      vote_average: 7.5,
      overview:
        'When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.',
      release_date: '2022-07-27',
    },
    {
      id: 773975,
      adult: false,
      title: 'End of the Road',
      original_title: 'End of the Road',
      poster_path: 'https://image.tmdb.org/t/p/w500/tLFIMuPWJHlTJ6TN8HCOiSD6SdA.jpg',
      popularity: 1573.562,
      vote_average: 6.5,
      overview: 'Recently widowed mom Brenda fights to protect her family during a harrowing road trip when a murder and a missing bag of cash plunge them into danger.',
      release_date: '2022-09-09',
    },
    {
      id: 438148,
      adult: false,
      title: 'Minions: The Rise of Gru',
      original_title: 'Minions: The Rise of Gru',
      poster_path: 'https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
      popularity: 1447.669,
      vote_average: 7.6,
      overview: 'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
      release_date: '2022-06-29',
    },
    {
      id: 838197,
      adult: false,
      title: "Watch Out, We're Mad",
      original_title: 'Altrimenti ci arrabbiamo',
      poster_path: 'https://image.tmdb.org/t/p/w500/qlrRi05x5hjoM29hz6TDLGTUSop.jpg',
      popularity: 1429.022,
      vote_average: 5.1,
      overview:
        "Carezza and Sorriso, brothers very different from each other and in quarrel since childhood, will have to put aside their controversies to recover the legendary Dune Buggy, once belonged to their beloved father and now stolen from him by Torsillo, an unscrupulous building speculator, and his son Raniero. In doing so, they will forge an unusual alliance with a circus community, headed by the beautiful and dangerous Miriam and threatened by Torsillo's dirty business. Between daring chases, memorable fights and delicate meals based on beer and sausages, will the two brothers be able to find their beloved car?",
      release_date: '2022-03-23',
    },
    {
      id: 19995,
      adult: false,
      title: 'Avatar',
      original_title: 'Avatar',
      poster_path: 'https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
      popularity: 1270.395,
      vote_average: 7.5,
      overview: 'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
      release_date: '2009-12-10',
    },
    {
      id: 927341,
      adult: false,
      title: 'Hunting Ava Bravo',
      original_title: 'Hunting Ava Bravo',
      poster_path: 'https://image.tmdb.org/t/p/w500/etc6HKBEhNySNnYU2nRgbSeIyoW.jpg',
      popularity: 1263.428,
      vote_average: 6.5,
      overview: 'Billionaire sportsman Buddy King unwinds by hunting human captives on his remote mountain estate. But his latest victim, Ava Bravo is no easy target.',
      release_date: '2022-04-01',
    },
    {
      id: 1015602,
      adult: false,
      title: 'Welcome to the Club',
      original_title: 'Welcome to the Club',
      poster_path: 'https://image.tmdb.org/t/p/w500/kxB9E6fo0ycHzd13oOTHmGa5Njd.jpg',
      popularity: 1221.345,
      vote_average: 6.7,
      overview: 'Heart set on becoming a princess, Lisa Simpson is surprised to learn being bad might be more fun.',
      release_date: '2022-09-08',
    },
    {
      id: 936897,
      adult: false,
      title: 'Curious Caterer: Dying for Chocolate',
      original_title: 'Curious Caterer: Dying for Chocolate',
      poster_path: 'https://image.tmdb.org/t/p/w500/7quPRcCVUmMBxKO58QwPuIADtYG.jpg',
      popularity: 1110.351,
      vote_average: 5.9,
      overview:
        'Goldy is a spirited single mom who’s thrust into the role of town sleuth to help solve a friend’s mysterious death. With the clock ticking to find the culprit, Goldy strikes up an unlikely partnership with Detective Tom Schultz, who leans into Goldy’s local knowledge. As their relationship shows signs of becoming something more, the suspect list rises. Will Goldy narrow in on the killer before the killer narrows in on her?',
      release_date: '2022-04-10',
    },
    {
      id: 997120,
      adult: false,
      title: 'Sniper: Rogue Mission',
      original_title: 'Sniper: Rogue Mission',
      poster_path: 'https://image.tmdb.org/t/p/w500/jSL5TqroJsDAIgBdELBwby1uhf1.jpg',
      popularity: 1101.603,
      vote_average: 6.9,
      overview:
        'When a crooked federal agent is involved in a human sex trafficking ring, Sniper and CIA Rookie Brandon Beckett goes rogue, teaming up with his former allies Homeland Security Agent Zero and assassin Lady Death to uncover the corrupt agent and take down the criminal organization.',
      release_date: '2022-08-15',
    },
    {
      id: 952374,
      adult: false,
      title: 'The Aviary',
      original_title: 'The Aviary',
      poster_path: 'https://image.tmdb.org/t/p/w500/u6HUQcOQsgkFFO8xCITfxQz6ivc.jpg',
      popularity: 1066.172,
      vote_average: 5.5,
      overview:
        'A twisted journey of two women’s desperate flee to escape the clutches of Skylight, an insidious cult. Lured in by the promise of “freedom” in the isolated desert campus called The Aviary, Jillian and Blair join forces to escape in hopes of real freedom. Consumed by fear and paranoia, they can’t shake the feeling that they are being followed by the cult’s leader, Seth, a man as seductive as he is controlling. The more distance the pair gains from the cult, the more Seth holds control of their minds. With supplies dwindling and their senses failing, Jillian and Blair are faced with a horrifying question: how do you run from an enemy who lives inside your head?',
      release_date: '2022-04-29',
    },
    {
      id: 756999,
      adult: false,
      title: 'The Black Phone',
      original_title: 'The Black Phone',
      poster_path: 'https://image.tmdb.org/t/p/w500/lr11mCT85T1JanlgjMuhs9nMht4.jpg',
      popularity: 1055.311,
      vote_average: 7.9,
      overview:
        'Finney Blake, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.',
      release_date: '2022-06-22',
    },
    {
      id: 634649,
      adult: false,
      title: 'Spider-Man: No Way Home',
      original_title: 'Spider-Man: No Way Home',
      poster_path: 'https://image.tmdb.org/t/p/w500/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg',
      popularity: 998.765,
      vote_average: 8,
      overview:
        'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
      release_date: '2021-12-15',
    },
    {
      id: 585511,
      adult: false,
      title: 'Luck',
      original_title: 'Luck',
      poster_path: 'https://image.tmdb.org/t/p/w500/1HOYvwGFioUFL58UVvDRG6beEDm.jpg',
      popularity: 992.94,
      vote_average: 8,
      overview: 'Suddenly finding herself in the never-before-seen Land of Luck, the unluckiest person in the world must unite with the magical creatures there to turn her luck around.',
      release_date: '2022-08-05',
    },
    {
      id: 755566,
      adult: false,
      title: 'Day Shift',
      original_title: 'Day Shift',
      poster_path: 'https://image.tmdb.org/t/p/w500/bI7lGR5HuYlENlp11brKUAaPHuO.jpg',
      popularity: 990.538,
      vote_average: 6.9,
      overview: "An LA vampire hunter has a week to come up with the cash to pay for his kid's tuition and braces. Trying to make a living these days just might kill him.",
      release_date: '2022-08-10',
    },
    {
      id: 453395,
      adult: false,
      title: 'Doctor Strange in the Multiverse of Madness',
      original_title: 'Doctor Strange in the Multiverse of Madness',
      poster_path: 'https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
      popularity: 974.998,
      vote_average: 7.5,
      overview: 'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',
      release_date: '2022-05-04',
    },
    {
      id: 762968,
      adult: false,
      title: 'Do Revenge',
      original_title: 'Do Revenge',
      poster_path: 'https://image.tmdb.org/t/p/w500/akIjKJDHcVN4bzifcEarKVPNpoa.jpg',
      popularity: 937.385,
      vote_average: 7.1,
      overview: 'A dethroned queen bee at a posh private high school strikes a secret deal with an unassuming new student to enact revenge on one another’s enemies.',
      release_date: '2022-09-14',
    },
    {
      id: 848123,
      adult: false,
      title: 'Black Site',
      original_title: 'Black Site',
      poster_path: 'https://image.tmdb.org/t/p/w500/ipn8khVVC4eToWiGf89WF9J5PJn.jpg',
      popularity: 933.824,
      vote_average: 7.2,
      overview:
        'A group of officers based in a labyrinthine top-secret prison must fight for their lives against Hatchet, a brilliant and infamous high-value detainee. When he escapes, his mysterious and deadly agenda has far reaching and dire consequences.',
      release_date: '2022-05-05',
    },
    {
      id: 762504,
      adult: false,
      title: 'Nope',
      original_title: 'Nope',
      poster_path: 'https://image.tmdb.org/t/p/w500/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg',
      popularity: 925.645,
      vote_average: 7,
      overview: 'Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.',
      release_date: '2022-07-20',
    },
    {
      id: 675353,
      adult: false,
      title: 'Sonic the Hedgehog 2',
      original_title: 'Sonic the Hedgehog 2',
      poster_path: 'https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg',
      popularity: 902.493,
      vote_average: 7.7,
      overview:
        'After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.',
      release_date: '2022-03-30',
    },
    {
      id: 772450,
      adult: false,
      title: 'Presences',
      original_title: 'Presencias',
      poster_path: 'https://image.tmdb.org/t/p/w500/dgDT3uol3mdvwEg0jt1ble3l9hw.jpg',
      popularity: 856.071,
      vote_average: 6.8,
      overview: 'A man who loses his wife and goes to seclude himself in a cabin in the woods, where strange things happen.',
      release_date: '2022-09-07',
    },
    {
      id: 924482,
      adult: false,
      title: 'The Ledge',
      original_title: 'The Ledge',
      poster_path: 'https://image.tmdb.org/t/p/w500/dHKfsdNcEPw7YIWFPIhqiuWrSAb.jpg',
      popularity: 840.766,
      vote_average: 6.3,
      overview:
        'A rock climbing adventure between two friends turns into a terrifying nightmare. After Kelly captures the murder of her best friend on camera, she becomes the next target of a tight knit group of friends who will stop at nothing to destroy the evidence and anyone in their way. Desperate for her safety, she begins a treacherous climb up a mountain cliff and her survival instincts are put to the test when she becomes trapped with the killers just 20 feet away.',
      release_date: '2022-02-18',
    },
    {
      id: 76600,
      adult: false,
      title: 'Avatar: The Way of Water',
      original_title: 'Avatar: The Way of Water',
      poster_path: 'https://image.tmdb.org/t/p/w500/2af0PqCfkxyAAq8QR2TeVJ1Ca2V.jpg',
      popularity: 815.874,
      vote_average: 0,
      overview:
        'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
      release_date: '2022-12-14',
    },
    {
      id: 1006851,
      adult: false,
      title: 'Office Invasion',
      original_title: 'Office Invasion',
      poster_path: 'https://image.tmdb.org/t/p/w500/khcVwO0gwguC1CndbxtH1bzk4aj.jpg',
      popularity: 794.949,
      vote_average: 5.7,
      overview: 'Three friends come together to defend their valuable mining company from…aliens?! What could possibly go wrong?',
      release_date: '2022-08-10',
    },
    {
      id: 911129,
      adult: false,
      title: 'No Limit',
      original_title: 'Sous emprise',
      poster_path: 'https://image.tmdb.org/t/p/w500/fUdeneiMUQkE1Yb3Qx7dML0HVf.jpg',
      popularity: 794.252,
      vote_average: 6.4,
      overview: "Roxana Aubrey decides to drop her studies and escape her life in Paris for a free diving course in the south of France. She is quickly pulled into a life that reaches new depths brought by the weight of an ocean's descent.",
      release_date: '2022-09-09',
    },
    {
      id: 576925,
      adult: false,
      title: 'My Sweet Monster',
      original_title: 'Buka. My favorite monster',
      poster_path: 'https://image.tmdb.org/t/p/w500/xIbEHAqwK5N7PJJYmbwmxuvC7fL.jpg',
      popularity: 762.997,
      vote_average: 6,
      overview:
        "A scandal in the royal family: the wayward princess Barbara escaped from the palace and went through the forest in search of a handsome prince. However, instead of the cherished meeting with her beloved, she is captured by Buka, the most dangerous robber of the kingdom. But it quickly becomes clear that the brisk princess is ready to turn Buka's life into a nightmare, just to reach her goal. So the restless Varvara begins to establish her own order in the forest.",
      release_date: '2022-01-27',
    },
    {
      id: 1010818,
      adult: false,
      title: "Groot's First Steps",
      original_title: "Groot's First Steps",
      poster_path: 'https://image.tmdb.org/t/p/w500/1ifiV9ZJD4tC3tRYcnLIzH0meaB.jpg',
      popularity: 723.129,
      vote_average: 7.4,
      overview: 'Following the events of “Guardians of the Galaxy Vol. 1,” Baby Groot is finally ready to try taking his first steps out of his pot—only to learn you have to walk before you can run.',
      release_date: '2022-08-10',
    },
    {
      id: 769636,
      adult: false,
      title: 'Code Name: Emperor',
      original_title: 'Código Emperador',
      poster_path: 'https://image.tmdb.org/t/p/w500/8VjVLMiPm598Kg6XmKk5m1fz0p7.jpg',
      popularity: 702.245,
      vote_average: 5.9,
      overview: 'Follows Juan, an agent working for the intelligence services, who also reports to a parallel unit involved in illegal activities.',
      release_date: '2022-03-18',
    },
    {
      id: 718789,
      adult: false,
      title: 'Lightyear',
      original_title: 'Lightyear',
      poster_path: 'https://image.tmdb.org/t/p/w500/ox4goZd956BxqJH6iLwhWPL9ct4.jpg',
      popularity: 700.226,
      vote_average: 7.2,
      overview: 'Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.',
      release_date: '2022-06-15',
    },
    {
      id: 1012801,
      adult: false,
      title: 'Barbie: Mermaid Power',
      original_title: 'Barbie: Mermaid Power',
      poster_path: 'https://image.tmdb.org/t/p/w500/8qb8cLDBAWdahrtixN2mQdI6e52.jpg',
      popularity: 692.549,
      vote_average: 7.5,
      overview:
        'Join Barbie “Brooklyn” Roberts, Barbie “Malibu” Roberts, and her sisters Skipper, Stacie, and Chelsea on an underwater adventure as they transform into mermaids to help save the world of Pacifica! In Barbie Mermaid Power™, Barbie and Barbie are summoned by Isla (from Dolphin Magic) to compete to be the underwater Power Keeper in a series of challenges designed to find their inner powers. Through these competitions, they discover whether they are mermaids of Earth, Air, Water, or Fire, all while making new animal and mermaid friends. In this fish-tale of friendship, adventure, and bravery, Barbie, Barbie, and family experience first-hand what it’s like to balance the worlds above and below the sea and learn a lesson in finding their inner powers along the way.',
      release_date: '2022-07-17',
    },
    {
      id: 829560,
      adult: false,
      title: 'The Next 365 Days',
      original_title: 'The Next 365 Days',
      poster_path: 'https://image.tmdb.org/t/p/w500/6FsGeIp7heHm5eh4tIxTzHIRxmt.jpg',
      popularity: 676.5,
      vote_average: 6.7,
      overview: "Laura and Massimo's relationship hangs in the balance as they try to overcome trust issues while a tenacious Nacho works to push them apart.",
      release_date: '2022-08-19',
    },
    {
      id: 919355,
      adult: false,
      title: 'Dragon Knight',
      original_title: 'Dragon Knight',
      poster_path: 'https://image.tmdb.org/t/p/w500/zkGFADykBtfPfTv7YJooxTH52ph.jpg',
      popularity: 669.07,
      vote_average: 6.9,
      overview:
        "Many years after the war has been lost, and all the dragons slain, a lone knight travels the lands of Agonos seeking to raise an army against the demon lord Abaddon. When a healer's vision reveals that one dragon still lives, and together with an eager young squire, the knight sets off in search of the fabled creature. As the armies of Abaddon descend on the human kingdoms, the dragon is their last hope of fending off the horde, before it lays waste to the lands of men. But does the creature even exist? And if it does, will it fight for them once more?",
      release_date: '2022-03-21',
    },
    {
      id: 1010821,
      adult: false,
      title: 'Groot Takes a Bath',
      original_title: 'Groot Takes a Bath',
      poster_path: 'https://image.tmdb.org/t/p/w500/sN7FJP06TsNNtK9Jr77dc25yI82.jpg',
      popularity: 654.62,
      vote_average: 7,
      overview: 'Everybody needs some alone time to relax and wash up, but things go quite differently when you’re a Flora Colossi toddler.',
      release_date: '2022-08-10',
    },
    {
      id: 414906,
      adult: false,
      title: 'The Batman',
      original_title: 'The Batman',
      poster_path: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
      popularity: 647.157,
      vote_average: 7.7,
      overview: 'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
      release_date: '2022-03-01',
    },
    {
      id: 81774,
      adult: false,
      title: 'Exploits of a Young Don Juan',
      original_title: "Les Exploits d'un jeune Don Juan",
      poster_path: 'https://image.tmdb.org/t/p/w500/xvtRgQIRegLjsjaIkKQbh0hk3Qy.jpg',
      popularity: 642.606,
      vote_average: 5.5,
      overview:
        'Roger is a 16-year-old who seeks to lose his virginity in this erotic drama. His initial efforts are unsuccessful, but World War I breaks out and men are seen marching off to battle. Roger goes overboard when he is presented with several amorous opportunities.',
      release_date: '1986-11-04',
    },
  ];
  
  function searchMovies(title = '', keyword = '') {
    const movieTitle = String(title).toUpperCase().trim();
    const searchValue = String(keyword).toUpperCase().trim();
    return movieTitle.includes(searchValue);
  }
  
  console.log(searchMovies('', '     Upin    '));
  console.log(searchMovies('Insidious', '    IDI   '));
  
  function getMovies(keyword = '') {
    const filterMovies = [];
    for (let i = 0; i < movies.length; i++) {
      if (searchMovies(movies[i].title, keyword)) {
        filterMovies.push(movies[i]);
      }
    }
    return filterMovies;
  }
  
  console.log(getMovies('la'));
  
  function showMovies(keyword = '') {
    const moviesList = getMovies(keyword);
    document.getElementById('list-movies').innerHTML = '';
    for (let i = 0; i < moviesList.length; i++) {
      document.getElementById('list-movies').innerHTML += `
          <div class="col-12 col-sm-6 col-md-3 d-flex justify-content-center p-4 pt-3 pb-4">
            <div class="card" style="width: 100%; max-width: 15rem;">
              <img src="${moviesList[i].poster_path}"
                alt="..." style="width: 100%; height: 100%;">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <p class="card-text">${moviesList[i].title}</p>
                  </div>
                  <div class="col-3 text-end">
                    <p class="card-text"><b>${moviesList[i].vote_average}</b></p>
                  </div>
                </div>
                <br />
                <p class="card-text">${moviesList[i].release_date}</p>
              </div>
            </div>
          </div>
          `;
    }
  }
  
  showMovies('');