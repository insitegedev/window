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
    public function index() {
        $page = Page::where('key', 'service')->firstOrFail();
        $services = Service::where('status',true)->with(['file','translations'])->get();

        return Inertia::render("Services/Services");
        return view('client.pages.service.index', [
            'services' => $services,
            'page' => $page
        ]);
    }
}
