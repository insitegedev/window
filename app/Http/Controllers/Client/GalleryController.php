<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index()
    {


        $galleries = Gallery::query()->where("status", 1)->with(['file'])->paginate(15);

//        dd($galleries);

        return Inertia::render('Gallery/Gallery', ["galleries" => $galleries]);

    }


}
