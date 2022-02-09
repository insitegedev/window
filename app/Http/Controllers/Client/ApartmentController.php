<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Apartment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApartmentController extends Controller
{
    public function index()
    {
        $apartments = Apartment::with(['translations'])->get();

        return Inertia::render('ChooseFloor/ChooseFloor', ["apartments" => $apartments]);
    }
}
