<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Vskstudio\Takt\Laravel\Facades\Takt;
use Vskstudio\Takt\Revenue;

class CheckoutController
{
    // Server-side event: the Takt facade is bound to the current request, so the
    // event is attributed to the visitor's IP and User-Agent automatically.
    public function complete(): RedirectResponse
    {
        Takt::event('Signup', ['plan' => 'pro'], new Revenue('29.00', 'EUR'));

        return redirect('/welcome');
    }
}
