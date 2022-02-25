<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\Slider;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {


        $page = Page::where('key', 'home')->firstOrFail();
        $sliders = Slider::query()->where("status", 1)->with(['file', 'translations']);

        return Inertia::render('Home/Home', ["sliders" => $sliders->get(), "page" => $page]);

    }

    public function gallery()
    {
        return Inertia::render('Gallery/Gallery');
    }

    public function doctors()
    {
        return Inertia::render('OurDoctors/OurDoctors');
    }

    public function choosefloor()
    {
        return Inertia::render('ChooseFloor/ChooseFloor');
    }

    // FloorPlan

    public function floorA1()
    {
        $page = Page::where('key', 'home')->firstOrFail();

        return Inertia::render('FloorPlan/A1', [ "page" => $page]);
    }
 


}
