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
//        dd($page);

        return Inertia::render('Home/Home', ["sliders" => $sliders->get(), "page" => $page])->withViewData([
            'meta_title' => $page->meta_title, 'meta_description' => $page->meta_description
        ]);

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


}
