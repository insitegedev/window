<?php

namespace App\Http\Middleware;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;
use Inertia\Middleware;
use Spatie\TranslationLoader\TranslationLoaders\Db;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'client/base';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param \Illuminate\Http\Request $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function share(Request $request)
    {
        $trans = new Db();

        $this->settings();
        $locales = config("translatable.locales");
        $currentLocale = App::getLocale();
        $currentRoute = url()->current();
        $locale_urls = $this->locale_urls();



        return array_merge(parent::share($request), [
            "localizations" => $trans->loadTranslations("ge", "client"),
            "locales" => $locales,
            "currentLocale" => $currentLocale,
            "pathname" => $currentRoute,
            "locale_urls" => $locale_urls,
            'urlPrev'	=> function() {
                if (url()->previous() !== route('login') && url()->previous() !== '' && url()->previous() !== url()->current()) {
                    return url()->previous();
                }else {
                    return null; // used in javascript to disable back button behavior
                }
            },
        ]);
    }

    /**
     * @return array
     */
    protected function locale_urls()
    {
        $locales = config("translatable.locales");
        $routes = [];
        foreach ($locales as $key => $val)
        {
         $routes[$key] = get_url($val);
        }
        return $routes;
    }

    protected function settings()
    {
        $gphone = "";
        $gemail = "";
        $gaddress = "";
        $gcity = "";
        $gcountry = "";
        $ginstagram = "";
        $gfacebook = "";

        $settings = Setting::with(['translations'])->get();
        foreach ($settings as $setting) {
            switch ($setting->key) {
                case "phone":
                    $gphone = $setting;
                    break;
                case "email":
                    $gemail = $setting;
                    break;
                case "address":
                    $gaddress = $setting;
                    break;
                case "instagram":
                    $ginstagram = $setting;
                    break;
                case "facebook":
                    $gfacebook = $setting;
                    break;
                case "city":
                    $gcity = $setting;
                    break;
                case "country":
                    $gcountry = $setting;
                    break;
            }
        }

        Inertia::share([
            "gphone" => $gphone,
            "gemail" => $gemail,
            "gaddress" => $gaddress,
            "ginstagram" => $ginstagram,
            "gfacebook" => $gfacebook,
            "gcity" => $gcity,
            "gcountry" => $gcountry
        ]);
    }

}
