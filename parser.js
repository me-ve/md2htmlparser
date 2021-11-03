let regExpsDivide = [
	{
		name:		"codeblock",
		regexp:		/\`{3}([\S]*?)\n([\S\s]*?)\`{3}/gim,
		html:		"<pre><code>$2</code></pre>"
	},
	{
		name:		"codeline",
		regexp:		/\`{1}([\S\s]*?)\`{1}/gis,
		html:		"<code>$1</code>"
	},
	{
		name:		"title3",
		regexp:		/^#{3}(.*$)/gim,
		html:		"<h3>$1</h3>"
	},
	{
		name:		"title2",
		regexp:		/^#{2}(.*$)/gim,
		html:		"<h2>$1</h2>"
	},
	{
		name:		"title1",
		regexp:		/^#{1}(.*$)/gim,
		html:		"<h1>$1</h1>"
	}
];

let regExpsFormat = [
	{
		name:		"newline",
		regexp:		/\n/gim,
		html:		"<br>"
	},
	{
		name:		"underline",
		regexp:		/\_{2}([\s\S]*?)\_{2}/gim,
		html:		"<u>$1</u>"
	},
	{
		name:		"bold italic",
		regexp:		/\*{3}([\s\S]*?)\*{3}/gim,
		html:		"<b><i>$1</i></b>"
	},
	{
		name:		"bold",
		regexp:		/\*{2}([\s\S]*?)\*{2}/gim,
		html:		"<b>$1</b>"
	},
	{
		name:		"italic",
		regexp:		/\*{1}([\s\S]*?)\*{1}/gim,
		html:		"<i>$1</i>"
	},
];

function parse(){
    let main = document.getElementById("main");
	regExpsDivide.forEach(
		reg => main.innerHTML = main.innerHTML.replaceAll(
			reg.regexp, reg.html).trim()
	);
	regExpsFormat.forEach(
		reg => {
			var blocks = [];
			main.innerHTML = main.innerHTML.replace(/(?:<pre>.*?<\/pre>|<code>.*?<\/code>)/g, function (match) {
    			blocks.push( match );
    			return '$BLOCK$';
			});
			main.innerHTML = main.innerHTML.replace(reg.regexp, reg.html);
			main.innerHTML = main.innerHTML.replace(/\$BLOCK\$/g, function () {
    			return blocks.shift();
			});
		}
	);
}

parse();