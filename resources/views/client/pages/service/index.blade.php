@extends('client.layout.site')
@section('subhead')
    <title>{{ $page->meta_title }}</title>
    <meta name="description"
          content="{{ $page->meta_description }}">
@endsection

@section('wrapper')
    <div class="services_page wrapper">
        <div class="main_title">{{ $page->title }}</div>
        <div class="paragraph">
            {!! $page->description !!}
        </div>

        <div class="service_grid">
            @foreach($services as $service)
                <div class="item">
                    <div class="icon">
                        <img src="/img/icons/services/1.png" alt=""/>
                    </div>
                    <div class="title">{{$service->title}}</div>
                    <div class="paragraph">
                        {!! $service->description !!}
                    </div>
                </div>
            @endforeach
        </div>
    </div>

@endsection

