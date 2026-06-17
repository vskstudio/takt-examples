<?php

// Client-side: render the Takt browser snippet into your HTML <head>.
// Run with: php -S localhost:8000 index.php

require __DIR__ . '/vendor/autoload.php';

use Vskstudio\Takt\Mode;
use Vskstudio\Takt\Options;
use Vskstudio\Takt\SnippetRenderer;

$snippet = (new SnippetRenderer(new Options(
    domain: 'example.com',
    endpoint: 'https://takt.example.com',
    mode: Mode::Cdn,
    // scriptOrigin: 'https://stats.example.com', // first-party : sert le tracker depuis votre domaine (anti-adblock)
    // Fire events during local development (Takt's privacy default is true).
    excludeLocalhost: false,
)))->render();

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Takt PHP example</title>
    <?= $snippet ?>
</head>
<body>
    <h1>Takt PHP example</h1>
    <p>The snippet above tracks page views in the browser.</p>
</body>
</html>
