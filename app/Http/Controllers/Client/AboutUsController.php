<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Certificate;
use App\Models\Page;
use Inertia\Inertia;

class AboutUsController extends Controller
{
    public function index()
    {
        $page = Page::where('key', 'about')->firstOrFail();
        return Inertia::render('AboutUs/AboutUs', ["page" => $page])->withViewData([
            'meta_title' => $page->meta_title, 'meta_description' => $page->meta_description
        ]);;
    }
}
