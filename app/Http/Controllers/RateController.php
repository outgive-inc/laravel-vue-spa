<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class RateController extends Controller
{
    /**
     * Post to external api with input request data to get appropriate response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'address1' => 'required',
            'city' => 'required',
            'province_code' => 'required',
            'postal_code' => 'required',
            'country_code' => 'required',
            'weight_unit' => 'required',
            'weight' => 'required',
            "length" => 'required',
            "width" => 'required',
            "height" => 'required',
            'size_unit' => 'required',
            'package_contents' => 'required',
            'value' => 'required',
            'currency' => 'required',
            'package_type' => 'required'
        ]);

        $response = Http::withToken(env('STALLION_TOKEN'))->post('https://sandbox.stallionexpress.ca/api/v3/rates', $request->all());

        return $response->body();
    }
}
