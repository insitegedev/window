<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use App\Models\Page;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index()
    {


        $galleries = Gallery::query()->where("status", 1)->with(['file'])->paginate(10);
        $page = Page::where('key', 'gallery')->firstOrFail();


        return Inertia::render('Gallery/Gallery', ["galleries" => $galleries, "page" =>$page]);

    }


}
