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
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index($locale, $state="state") {
        $page = Page::where('key', 'service')->firstOrFail();
        $services = Service::where('status',true)->with(['mainFile_1','translations'])->get();
//        dd($services);

        return Inertia::render("Services/Services", ["services"=> $services, "page" => $page, "state" => $state]);
        return view('client.pages.service.index', [
            'services' => $services,
            'page' => $page
        ]);
    }

    public function show(string $locale, $id) {
        $page = Page::where('key', 'service')->firstOrFail();
        $service = Service::where('status', 1)->where("id", $id)->with(['files','mainFile_1','mainFile_2','translations'])->firstOrFail();
        $nextService = Service::where("status", 1)->with(['mainFile_1','translations'])->inRandomOrder()->first();
//        dd(Service::inRandomOrder()->first());

        return Inertia::render("SingleService/SingleService", ["service"=> $service, "nextService" => $nextService]);
        return view('client.pages.service.index', [
            'services' => $services,
            'page' => $page
        ]);
    }
}
