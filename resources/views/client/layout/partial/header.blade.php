@if(request()->routeIs("client.home.index"))
    <header class="header">
        <div class="wrapper flex">
            <a href="{{ locale_route("client.home.index") }}" class="logo">
                <img src="/img/logo/1.png" alt=""/>
            </a>
            <div class="header_right flex">
                <div class="navbar flex">
                    <a class="nav_item active" href="{{ locale_route("client.home.index") }}">@lang("client.home") </a>
                    <a class="nav_item" href="{{ locale_route("client.product.index") }}">@lang("client.product")</a>
                    <a class="nav_item" href="{{ locale_route("client.service.index") }}">@lang("client.service")</a>
                    <a class="nav_item" href="{{ locale_route("client.about.index") }}">@lang("client.about_us")</a>
                    <a class="nav_item" href="{{ locale_route("client.project.index") }}">@lang("client.projects")</a>
                    <a class="nav_item" href="{{ locale_route("client.contact.index") }}">@lang("client.contact")</a>
                </div>
                <div class="flex">
                    <div class="search flex center">
                        <form action="{{locale_route('client.search.index')}}">
                            <input type="text" name="keyword" placeholder="{{__('client.search_here')}}"/>
                            <button type="button" class="search_icon">
                                <img src="/img/icons/header/1.png" alt=""/>
                            </button>
                            <button type="button" class="close_search">
                                <img src="/img/icons/header/2.png" alt=""/>
                            </button>
                        </form>
                    </div>
                    <div class="languages">
                        <div class="lang_on">

                            <img src="/img/lang/{{app()->getLocale()}}.png" alt="ff"/>
                        </div>
                        <div class="dropdown flex center">
                            @foreach(config('translatable.locales') as $locale)
                                @if(app()->getLocale() != $locale)
                                    <a href="{{ get_url($locale) }}" class="lang_option"
                                    ><img src="/img/lang/{{$locale}}.png" alt="{{$locale}}"
                                        /></a>
                                @endif
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
            <button class="menu_button"></button>
        </div>
    </header>
@else
    <div class="all_showcases">
        <header class="header">
            <div class="wrapper flex">
                <a href="{{locale_route('client.home.index')}}" class="logo">
                    <img src="/img/logo/1.png" alt=""/>
                </a>
                <div class="header_right flex">
                    <div class="navbar flex">
                        <a class="nav_item {{Request::route()->getName()  === 'client.home.index'? 'active' : ''}}" href="{{ locale_route("client.home.index") }}">@lang("client.home") </a>
                        <a class="nav_item {{Request::route()->getName()  === 'client.product.index'? 'active' : ''}}" href="{{ locale_route("client.product.index") }}">@lang("client.product")</a>
                        <a class="nav_item {{Request::route()->getName()  === 'client.service.index'? 'active' : ''}}" href="{{ locale_route("client.service.index") }}">@lang("client.service")</a>
                        <a class="nav_item {{Request::route()->getName()  === 'client.about.index'? 'active' : ''}}" href="{{ locale_route("client.about.index") }}">@lang("client.about_us")</a>
                        <a class="nav_item {{Request::route()->getName()  === 'client.project.index'? 'active' : ''}}" href="{{ locale_route("client.project.index") }}">@lang("client.projects")</a>
                        <a class="nav_item {{Request::route()->getName()  === 'client.contact.index'? 'active' : ''}}" href="{{ locale_route("client.contact.index") }}">@lang("client.contact")</a>
                    </div>

                    <div class="flex">
                        <div class="search flex center">
                            <form action="{{locale_route('client.search.index')}}">
                                <input type="text" name="keyword" placeholder="{{__('client.search_here')}}"/>
                                <button type="button" class="search_icon">
                                    <img src="/img/icons/header/1.png" alt=""/>
                                </button>
                                <button type="button" class="close_search">
                                    <img src="/img/icons/header/2.png" alt=""/>
                                </button>
                            </form>
                        </div>
                        <div class="languages">
                            <div class="lang_on">

                                <img src="/img/lang/{{app()->getLocale()}}.png" alt="ff"/>
                            </div>
                            <div class="dropdown flex center">
                                @foreach(config('translatable.locales') as $locale)
                                    @if(app()->getLocale() != $locale)
                                        <a href="{{ get_url($locale) }}" class="lang_option"
                                        ><img src="/img/lang/{{$locale}}.png" alt="{{$locale}}"
                                            /></a>
                                    @endif
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
                <button class="menu_button"></button>
            </div>
        </header>
    </div>
@endif
