<?php

namespace App\Http\Controllers\Rates;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class RatesController extends Controller
{
    public function getRates(Request $request)
    {
        $input = $request->all();

        $response = Http::withToken('YDchLhos8bDsSrdCn23jmjya08azjdaJ56Shu6tywNjb7ATFwRr8Zm8viM7S')
        ->post('https://sandbox.stallionexpress.ca/api/v3/rates', $input);

        return $response->body();
    }
}
