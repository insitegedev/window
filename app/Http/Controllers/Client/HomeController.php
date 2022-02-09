<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {


//        $news = News::where("status", 1)->with(['file', 'translations'])->take(6)->get();
        $sliders = Slider::query()->where("status", 1)->with(['file', 'translations']);

        return Inertia::render('Home/Home', ["sliders" => $sliders->get()]);

    }

    public function gallery()
    {
        return Inertia::render('Gallery/Gallery');
    }

    public function doctors()
    {
        return Inertia::render('OurDoctors/OurDoctors');
    }


}
