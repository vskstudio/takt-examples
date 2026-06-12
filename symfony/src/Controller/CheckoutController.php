<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Vskstudio\Takt\Revenue;
use Vskstudio\Takt\Takt;

final class CheckoutController
{
    // The autowired Takt service is bound to the current request, so the event
    // is attributed to the visitor's IP and User-Agent automatically.
    public function __construct(private readonly Takt $takt)
    {
    }

    public function complete(): RedirectResponse
    {
        $this->takt->event('Signup', ['plan' => 'pro'], new Revenue('29.00', 'EUR'));

        return new RedirectResponse('/welcome');
    }
}
