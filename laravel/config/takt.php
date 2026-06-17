<?php

return [
    'domain' => 'example.com',
    'endpoint' => 'https://takt.example.com',
    // first-party : sert le tracker depuis votre domaine (anti-adblock), émet data-script-origin
    // 'script_origin' => env('TAKT_SCRIPT_ORIGIN', 'https://stats.example.com'),
    'api_key' => env('TAKT_API_KEY'),
    'mode' => 'cdn',
    'outbound' => false,
    'files' => false,
    // Fire events during local development (Takt's privacy default is true).
    'exclude_localhost' => false,
];
