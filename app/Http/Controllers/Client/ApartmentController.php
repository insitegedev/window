<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Apartment;
use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApartmentController extends Controller
{
    public function index()
    {
        $apartments = Apartment::with(['translations'])->get();
        $page = Page::where('key', 'choose_apartment')->firstOrFail();

        return Inertia::render('ChooseFloor/ChooseFloor', ["apartments" => $apartments, "page" => $page]);
    }

    public function show()
    {
        $apartments = Apartment::with(['translations'])->get();
        $page = Page::where('key', 'choose_apartment')->firstOrFail();
        return Inertia::render('Apartment/Apartment', ["apartments" => $apartments, "page" => $page]);
    }
}
