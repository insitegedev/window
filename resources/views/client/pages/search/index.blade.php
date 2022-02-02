@extends('client.layout.site')
@section('subhead')
    <title>@lang('client.search_meta_title')</title>
    <meta name="description"
          content="@lang('client.search_meta_description')">
@endsection

@section('wrapper')
    <div class="search_result wrapper">
        <div class="main_title">@lang('client.search_result')</div>
        <div class="flex center searched">
            <img src="/img/icons/other/1.png" alt="" />
            <div class="paragraph">
                <span class="paragraph dark"></span> {{__('client.find')}} {{count($items)}} @lang('client.result')
            </div>
        </div>
        <div class="found_items">
            @foreach($items as $item)
                <div class="item">
                    <div class="img">
                        <img src="{{url($item->searchable->file ? $item->searchable->file->file_url : '')}}" alt="" />
                    </div>
                    <div class="title">{{$item->title}}</div>
                    <div class="paragraph">
                       {{$item->searchable->short_description}}
                    </div>
                    <a href="{{locale_route('client.product.show',$item->searchable->slug)}}">
                        <button class="main_button">
                            {{__('client.view_more')}}
                            <img src="/img/icons/arrows/1.png" alt="" class="abs_arr" />
                        </button>
                    </a>
                </div>
            @endforeach
        </div>
    </div>

@endsection

