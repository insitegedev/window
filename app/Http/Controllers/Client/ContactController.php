<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Mail\ContactEmail;
use App\Models\Page;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        $page = Page::where('key', 'contact')->firstOrFail();
        return Inertia::render('Contact/Contact');

        return view('client.pages.contact.index', [
            "page" => $page
        ]);
    }

    public function mail(Request $request)
    {
        if ($request->method() == 'POST') {
            $request->validate([
                'name' => 'required|string|max:55',
                'mail' => 'required|email',
                'phone' => 'required',
                'message' => 'required|max:1024'
            ]);

            $data = [
                'name' => $request->name,
                'mail' => $request->mail,
                'phone' => $request->phone,
                "subject" => "subject",
                'message' => $request->message
            ];

            $mailTo = Setting::where(['key' => 'email'])->first();
            if (($mailTo !== null) && $mailTo->value) {
                Mail::to($mailTo->value)->send(new ContactEmail($data));
            }

        }
        return redirect()->route("client.contact.index");
    }
}
