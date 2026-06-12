<?php

return [
    'domain' => 'example.com',
    'endpoint' => 'https://takt.example.com',
    'api_key' => env('TAKT_API_KEY'),
    'mode' => 'cdn',
    'outbound' => false,
    'files' => false,
    // Fire events during local development (Takt's privacy default is true).
    'exclude_localhost' => false,
];
