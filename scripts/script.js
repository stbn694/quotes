$(document).ready(function() {
	var quotes = [{
		"quote": "I am thankful the most important key in history was invented. It's not the key to your house, your car, your boat, your safety deposit box, your bike lock or your private community. It's the key to order, sanity, and peace of mind. The key is 'Delete.'",
		"author": "Elayne Boosler"
	},
	{
		"quote": "The internet could be a very positive step towards education, organisation and participation in a meaningful society.",
		"author": "Noam Chomsky"
	},
	{
		"quote": "I think it's fair to say that personal computers have become the most empowering tool we've ever created. They're tools of communication, they're tools of creativity, and they can be shaped by their user.",
		"author": "Bill Gates"
	},
	{
		"quote": "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to build bigger and better idiots. So far, the universe is winning.",
		"author": "Rick Cook"
	},
	{
		"quote": "Lisp isn't a language, it's a building material.",
		"author": "Alan Kay"
	},
	{
		"quote": "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.",
		"author": "C.A.R. Hoare"
	},
	{
		"quote": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
		"author": "Martin Golding"
	},
	{
		"quote": "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
		"author": "Linus Torvalds"
	},
	{
		"quote": "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.",
		"author": "Seymour Cray"
	},
	{
		"quote": "People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.",
		"author": "Donald Knuth"
	}];

	var changeQuote = function() {
		var randomQuoteNumber = Math.floor((Math.random() * quotes.length));
		var randomQuote = quotes[randomQuoteNumber];
		$(".text").text(randomQuote.quote);
		$(".author span").text(randomQuote.author);
	}

	changeQuote();

	$("button").click(function() {
		changeQuote();
	});


	/*$("button").click(function() {
		$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(data) {
			console.log(data);
			$(".text").text(data[0].content);
			$(".author").text(data[0].title);
		});
	});*/
});