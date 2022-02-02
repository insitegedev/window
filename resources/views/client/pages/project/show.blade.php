@extends('client.layout.site')
@section('subhead')
    <title>{{$project->meta_title}}</title>
    <meta name="description"
          content="{{ $project->meta_description }}">
    <meta name="keywords" content="{{ $project->key_word }}">
@endsection

@section('wrapper')
    <div class="product_detail wrapper">
        <div class="main_title">{{ $project->category->title }}</div>
        <div class="content flex">
            <div class="info">
                <div class="title">{{ $project->title }}</div>
                <div class="paragraph">
                    {!! $project->description !!}
                </div>
            </div>
            @if(count($project->files)>0)
                <div class="view">
                    <div class="main_img img">
                        @foreach($project->files as $file)
                            @if($loop->first)
                                <img src="{{asset($file->file_url)}}" alt="" class="large_image active"/>
                            @else
                                <img src="{{asset($file->file_url)}}" alt="" class="large_image"/>
                            @endif
                        @endforeach
                    </div>
                    <div class="slider">
                        <div class="details_slider flex center">
                            @foreach($project->files as $file)
                                <div class="img detail_img_filter">
                                    <img src="{{asset($file->file_url)}}" alt=""/>
                                </div>
                            @endforeach
                        </div>
                        <button class="arr" id="prev_det_img">
                            <img src="/img/icons/arrows/3.png" alt=""/>
                        </button>
                        <button class="arr" id="next_det_img">
                            <img src="/img/icons/arrows/4.png" alt=""/>
                        </button>
                    </div>
                </div>
            @endif
        </div>
    </div>

@endsection

