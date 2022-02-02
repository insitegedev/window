@extends('client.layout.site')
@section('subhead')
    <title>@lang('client.home_meta_title')</title>
    <meta name="description"
          content="@lang('client.home_meta_description')">
@endsection
@section('wrapper')
@if(count($sliders))
    <section class="hero_section">
        <div class="hero_slider">
            @foreach($sliders as $slider)
                <div class="slide">
                    <div class="overlay">
                        <img src="{{url($slider->file ? $slider->file->file_url : '')}}" alt="" class="bg_img"/>
                        <div class="content wrapper flex">
                            <div class="hero_head">{{ $slider->title }}</div>
                            <div class="paragraph light">
                                {!! $slider->description !!}
                            </div>
                        </div>
                    </div>
                    @if($slider->youtube_url)
                        <button class="view_video" id="{{$slider->id}}">
                            <img src="/img/icons/hero/1.png" alt=""/>
                        </button>
                    @endif
                </div>
            @endforeach
        </div>
        <button class="arrow flex center" id="hero_prev">
            <img src="/img/icons/arrows/prev.svg" alt=""/>
        </button>
        <button class="arrow flex center" id="hero_next">
            <img src="/img/icons/arrows/next.svg" alt=""/>
        </button>
    </section>

@endif
    <section class="home_products wrapper margin_bottom">
        <div class="head flex">
            <div class="main_title">{{ $productPage->title }}</div>
            <a href="{{ locale_route("client.product.index") }}" class="see_all paragraph dark"
            ><b>@lang('client.fully')</b>
            </a>
        </div>
        <div class="paragraph dark">
            {!! $productPage->description !!}
        </div>
        <div class="slider">
            <div class="home_products_slider pro_sliders_both flex">
                @foreach($products as $product)
                    <a href="{{locale_route('client.product.show',$product->slug)}}">
                        <div class="item img">
                            <img src="{{url($product->file ? $product->file->file_url : '')}}" alt=""/>
                            <div class="read_more">
                                <div>{{__('client.view_more')}}</div>
                                <img src="/img/icons/arrows/2.png" alt=""/>
                            </div>
                            <div class="caption">
                                <div class="title light">{{$product->title}}</div>
                                <div class="paragraph light">
                                    {!! $product->short_description !!}
                                </div>
                            </div>
                        </div>
                    </a>
                @endforeach
            </div>
            <button class="arrow" id="prev_product">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.503"
                    height="23.619"
                    viewBox="0 0 13.503 23.619"
                >
                    <path
                        id="Icon_ionic-ios-arrow-back"
                        data-name="Icon ionic-ios-arrow-back"
                        d="M15.321,18l8.937-8.93a1.688,1.688,0,0,0-2.391-2.384L11.742,16.8a1.685,1.685,0,0,0-.049,2.327L21.86,29.32a1.688,1.688,0,0,0,2.391-2.384Z"
                        transform="translate(-11.251 -6.194)"
                    />
                </svg>
            </button>
            <button class="arrow" id="next_product">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.503"
                    height="23.619"
                    viewBox="0 0 13.503 23.619"
                >
                    <path
                        id="Icon_ionic-ios-arrow-back"
                        data-name="Icon ionic-ios-arrow-back"
                        d="M20.683,18,11.746,9.07a1.688,1.688,0,0,1,2.391-2.384L24.262,16.8a1.685,1.685,0,0,1,.049,2.327L14.144,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
                        transform="translate(-11.251 -6.194)"
                    />
                </svg>
            </button>
        </div>
    </section>
    <section class="home_services wrapper margin_bottom">
        <div class="main_title">{{ $servicePage->title }}</div>
        <div class="grid">
            @foreach($services as $service)
                <div class="item">
                    <div class="img">
                        <img src="{{url($service->file ? $service->file->file_url : '')}}" alt=""/>
                    </div>
                    <div class="title">{{ $service->title }}</div>
                    <div class="paragraph">
                        {!! $service->description !!}
                    </div>
                </div>
            @endforeach
        </div>
        <a class="see_all" href="{{ locale_route("client.service.index") }}">
            <button class="main_button">
                @lang('client.fully') <img src="/img/icons/arrows/1.png" alt="" class="abs_arr"/>
            </button>
        </a>
    </section>
    <section class="home_aboutus wrapper flex margin_bottom">
        <div class="left">
            <div class="main_title">{{ $aboutPage->title }}</div>
            <div class="paragraph">
                {!! $aboutPage->description !!}
            </div>
            <div class="slider_title">@lang("client.home_certificates_and_awards")</div>
            <div class="slider">
                <div class="home_about_slider flex">
                    {{--                    @dd($certificates)--}}
                    @foreach($certificates as $certificate)
                        {{--                        @dd($certificate)--}}
                        <div class="item">
                            <div class="img">
                                <img src="{{url($certificate->file ? $certificate->file->file_url : '')}}"
                                     alt="{{ $certificate->title }}">
                            </div>
                            <div class="paragraph">{{ $certificate->title }}</div>
                        </div>
                    @endforeach
                </div>
                <button id="next_about">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13.503"
                        height="23.619"
                        viewBox="0 0 13.503 23.619"
                    >
                        <path
                            id="Icon_ionic-ios-arrow-back"
                            data-name="Icon ionic-ios-arrow-back"
                            d="M20.683,18,11.746,9.07a1.688,1.688,0,0,1,2.391-2.384L24.262,16.8a1.685,1.685,0,0,1,.049,2.327L14.144,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
                            transform="translate(-11.251 -6.194)"
                            fill="#0097AC"
                        />
                    </svg>
                </button>
            </div>

            <a href="{{ locale_route("client.about.index") }}">
                <button class="main_button">
                    @lang('client.view_more')
                    <img src="/img/icons/arrows/1.png" alt="" class="abs_arr"/>
                </button>
            </a>
        </div>
        <div class="img right">
            <img src="/img/other/1.png" alt=""/>
        </div>
    </section>
    <section class="home_products projects wrapper margin_bottom">
        <div class="head flex">
            <div class="main_title">{{ $projectPage->title }}</div>
            <a href="{{ locale_route("client.project.index") }}" class="see_all paragraph dark"
            ><b>@lang('client.fully')</b>
            </a>
        </div>
        {{--        <div class="filter_btns flex">--}}
        {{--            <button class="project_filter_home paragraph active">სააბაზანო</button>--}}
        {{--            <button class="project_filter_home paragraph">მინაპაკეტი</button>--}}
        {{--            <button class="project_filter_home paragraph">სხვადასხვა</button>--}}
        {{--        </div>--}}
        <div class="project_content_home active">
            <div class="paragraph dark">
                {!! $projectPage->description !!}
            </div>
            <div class="slider">
                <div class="home_projects_slider pro_sliders_both flex">
                    @foreach($projects as $project)

                        <a
                            href="{{ locale_route("client.project.show", $project->slug) }}"
                        >
                            <div class="item img">
                                <img src="{{url($project->file ? $project->file->file_url : '')}}" alt=""/>
                                <div class="read_more">
                                    <div>@lang('view.more')</div>
                                    <img src="/img/icons/arrows/2.png" alt=""/>
                                </div>
                                <div class="title light">
                                    {{ $project->title }}
                                    <br/>
                                    <span>{{ $project->created_at->format('d.m.Y') }}</span>
                                </div>
                                <div class="caption">
                                    <div class="paragraph light">
                                        {{ $project->short_description }}
                                    </div>
                                </div>
                            </div>
                        </a>
                    @endforeach

                </div>
                <button class="arrow" id="prev_project">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13.503"
                        height="23.619"
                        viewBox="0 0 13.503 23.619"
                    >
                        <path
                            id="Icon_ionic-ios-arrow-back"
                            data-name="Icon ionic-ios-arrow-back"
                            d="M15.321,18l8.937-8.93a1.688,1.688,0,0,0-2.391-2.384L11.742,16.8a1.685,1.685,0,0,0-.049,2.327L21.86,29.32a1.688,1.688,0,0,0,2.391-2.384Z"
                            transform="translate(-11.251 -6.194)"
                        />
                    </svg>
                </button>
                <button class="arrow" id="next_project">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13.503"
                        height="23.619"
                        viewBox="0 0 13.503 23.619"
                    >
                        <path
                            id="Icon_ionic-ios-arrow-back"
                            data-name="Icon ionic-ios-arrow-back"
                            d="M20.683,18,11.746,9.07a1.688,1.688,0,0,1,2.391-2.384L24.262,16.8a1.685,1.685,0,0,1,.049,2.327L14.144,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
                            transform="translate(-11.251 -6.194)"
                        />
                    </svg>
                </button>
            </div>
        </div>

    </section>
@endsection

@section("home_video")
    @foreach($sliders as $slider)
        <div class="the_video_popup flex center" id="{{$slider->id}}">
            <button class="close_vid_popup">
                <img src="/img/icons/header/2.png" alt=""/>
            </button>
            <div class="video">
                <iframe
                    src="https://www.youtube.com/embed/{{$slider->youtube_url}}"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    @endforeach
@endsection
