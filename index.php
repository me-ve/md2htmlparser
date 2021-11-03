<html>
	<head>
		<title>Markdown site</title>
		<meta charset="utf-8">
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<div id="top"></div>
		<div id="main">
			<?php
				echo htmlspecialchars(file_get_contents("sample.md"));
			?>
		</div>
		<script src="parser.js"></script>
		<div id="bottom"></div>
	</body>
</html>