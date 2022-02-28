<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Apartment;
use App\Models\Floor;
use App\Models\Page;
use Illuminate\Database\Eloquent\Builder;
use Inertia\Inertia;

class ApartmentController extends Controller
{
    public function index()
    {
        $apartments = Apartment::with(['translations'])->get();
        $page = Page::where('key', 'choose_apartment')->firstOrFail();

        return Inertia::render('ChooseFloor/ChooseFloor', ["apartments" => $apartments, "page" => $page]);
    }

    public function showFloor($locale, $slug)
    {
//        dd($slug);
        $page = Page::where('key', 'home')->firstOrFail();
        $apartments = Floor::whereHas('apartment', function (Builder $query) use ($slug) {
            $query->where('title', $slug);
        })->with(["apartment"])->get();

        return Inertia::render('FloorPlan/' . $slug, ["page" => $page, "apartments" => $apartments]);
    }

    public function show($locale, $slug)
    {
        $apartment = Floor::with(['translations', 'file'])->where("slug", $slug)->firstOrFail();
        $page = Page::where('key', 'choose_apartment')->firstOrFail();
        return Inertia::render('Apartment/Apartment', ["apartment" => $apartment, "page" => $page]);
    }
}
