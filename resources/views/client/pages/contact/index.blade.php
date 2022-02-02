@extends('client.layout.site')
@section('subhead')
    <title>{{ $page->meta_title }}</title>
    <meta name="description"
          content="{{ $page->meta_description }}">
@endsection

@section('wrapper')
    <div class="contact_page wrapper">
        <div class="main_title">{{ $page->title }}</div>
        <div class="flex content">
            <div class="column">
                <div class="title">@lang("client.contact_us")</div>
                <div class="paragraph">
                    {!! $page->description !!}
                </div>
                <div class="flex center">
                    <img src="/img/icons/contact/1.png" alt="" />
                    <div class="paragraph">{{ $gaddress }}</div>
                </div>
                <div class="flex center">
                    <img src="/img/icons/contact/2.png" alt="" />
                    <div class="paragraph">{{ $gemail }}</div>
                </div>
                <div class="flex center">
                    <img src="/img/icons/contact/3.png" alt="" />
                    <div class="paragraph">{{ $gphone }}</div>
                </div>
                <div class="flex center">
                    <img src="/img/icons/contact/4.png" alt="" />
                    <div class="paragraph">{{ $gworkingHours }}</div>
                </div>
                <div class="flex center sm">
                    <a href="{{ $gfacebook }}">
                        <img src="/img/icons/contact/fb.png" alt="" />
                    </a>
                    <a href="{{ $ginstagram }}">
                        <img src="/img/icons/contact/ig.png" alt="" />
                    </a>
                    <a href="{{ $gyoutube }}">
                        <img src="/img/icons/contact/yt.png" alt="" />
                    </a>
                </div>
            </div>
{{--            @dd($localizations['current']['locale'])--}}

            <form method="POST" action="{{locale_route('client.contact.mail')}}" class="column form">
                @csrf
                <div class="title">@lang("client.message_us")</div>
                <input type="text" name="name" placeholder=@lang("client.name") />
                <input type="text" name="mail" placeholder=@lang("client.mail") />
                <input type="text" name="phone" placeholder=@lang("client.phone") />
                <textarea name="message" placeholder=@lang("client.message")></textarea>
                <button class="main_button send">@lang("client.send")</button>
            </form>
            <div class="column">
                <div class="title">@lang("client.find_us_on_map")</div>
                <div class="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.6381332197816!2d44.77072996844081!3d41.728326822196486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472ddadc78fb3%3A0x9f529d5044be3023!2sZhiuli%20Shartava%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1627476895632!5m2!1sen!2sge"
                        width="600"
                        height="450"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>

@endsection

