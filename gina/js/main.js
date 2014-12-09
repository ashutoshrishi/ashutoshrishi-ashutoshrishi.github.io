$(document).ready(function() {
    // So you want to read all of them at once dove?
	var reasons = [
    	"Because of her contagious laughter, that makes you happy.",
    	"Because of her smile that makes everything alright",
    	"Because she likes her whiskey neat.",
    	"Because she makes me chocolate muffins, or cupcakes.",
    	"Because she likes to get lost with me.",
    	"Because she can make a flower from any paper size.",
    	"Because she makes beautiful origami for me."
	];

	var currentIndex = 0;
	var reason = getRandomReason();
	$("#answer").html(reason);

	function getRandomReason() {
		while(true) {
			var randomIndex = Math.floor(Math.random() * (reasons.length));
			if (randomIndex != currentIndex) {
				currentIndex = randomIndex;
				return reasons[randomIndex];
			}
		}
	}

	$("#and").click(function() {
		var reason = getRandomReason();
		// console.log(reason);
		$("#answer").html(reason);
	});
});

