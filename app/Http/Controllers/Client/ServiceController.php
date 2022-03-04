<?php
/**
 *  app/Http/Controllers/Client/ServiceController.php
 *
 * Date-Time: 06.08.21
 * Time: 15:25
 * @author Vito Makhatadze <vitomakhatadze@gmail.com>
 */
namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index($locale, Request $request) {
        $page = Page::where('key', 'service')->firstOrFail();
        $services = Service::where('status',true)->with(['mainFile_1','translations'])->get();

        return Inertia::render("Services/Services", ["services"=> $services, "page" => $page, "state" => $request->input('state')])->withViewData([
            'meta_title' => $page->meta_title, 'meta_description' => $page->meta_description
        ]);;

    }

    public function show(string $locale, $id) {
        $page = Page::where('key', 'service')->firstOrFail();
        $service = Service::where('status', 1)->where("id", $id)->with(['files','mainFile_1','mainFile_2','translations'])->firstOrFail();
        $nextService = Service::where("status", 1)->with(['mainFile_1','translations'])->inRandomOrder()->first();
//        dd(Service::inRandomOrder()->first());

        return Inertia::render("SingleService/SingleService", ["service"=> $service, "nextService" => $nextService])->withViewData([
            'meta_title' => $page->meta_title, 'meta_description' => $page->meta_description
        ]);;
        return view('client.pages.service.index', [
            'services' => $services,
            'page' => $page
        ]);
    }
}
