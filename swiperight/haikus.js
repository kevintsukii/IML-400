$(document).ready(function(){

	var poemlines = [

"thick blanket of snow snuggling the flowerbeds with a winter wrap - Unknown",

"dainty daffodil your golden trumpet fanfares the dawning of spring",

"Summers sensations / Promising pastel colors / Cozy carnations - Unknown",

"Drinking every drop / Where the love goes it follows Rain bows to roses - Unknown",

"When summer sun seeps / Lily of the valley sleeps / Rise in the midnight - Unknown",

"liquid little stones skipping and skittering free on shared umbrellas - Unknown",

"tiny snow angel snowflakes kiss your rosy cheeks white winter beauty - Unknown",

"hay, manure, cows a low long bellow -- ancient birthing call s w o o s h . . . life - Unknown",

"From time to time / The clouds give rest / To the moon-beholders - Basho",

"Consider me / As one who loved poetry / And persimmons. - Shiki",

"Winter seclusion - Listening that evening / To the rain in the mountain - Issa",

"Sparrow's child / out of the way out of the way! the stallion's coming through - Issa",

"Don't weep, insects – Lovers stars themselves / Must part. - Issa",

"No one travels / Along this way but I / This autumn evening. - Basho",

"In the cicada's cry / No sign can foretell / How soon it must die. -Basho",

"Will we meet again / Here at your flowering grave - Two white butterflies? - Basho",


"Don't imitate me; it's as boring as the two halves of a melon. - Basho",

"The moon so pure a wandering monk carries it across the sand. - Basho",

"The moment two bubbles are united they both vanish. A lotus blooms. - Kijo",

"Night; and once again while I wait for you, cold wind turns into rain. - Shiki",

"I want to sleep / Swat the flies / Softly please. -Shiki",

"A lovely thing to see: through the paper window's hole / the Galaxy. -Issa",

"Summer night - even the stars / are whispering to each other. - Unknown",

"My heart beats and burns / My restless soul craves and yearns / Through endless dreams I turn. -Unknown",

"Hold on to nothing and nothing will possess you. - Unknown",

"All futures start with today - and choice becomes destiny. - Unknown",

"No sky / no earth - but still snowflakes fall. - Hasin",

"An autumn eve; There is joy too / In loneliness. - Buson",

"Experimenting... I hung the moon on various branches of the pine - Hokushi",

"A firefly flitted by: Look! I almost said but I was alone. - Taigi",

"Dead my old fine hopes / And dry my dreaming but still... Iris blue each spring. - Shushiki",

"In the coolness of the empty sixth-month sky... the cuckoo'’'s cry. the tree cut dawn breaks early at my little window. - Shiki",


"Snow in my shoe / Abandoned / Sparrow's nest. - Kerouac",

"Whitecaps on the bay: A broken signboard banging in the April wind. - Richard Wright"];

//variable that gets the # in the array

var len = poemlines.length;
console.log(len);

var poem;

function getpoem(){
	poem = poemlines[Math.floor(Math.random() * len)];
}



$("#poempicker").click(function(){

	getpoem();
console.log(poem);

	$("#updateme").text(poem);

	});
});

FB.api(
    "/{user-photos}",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
});









