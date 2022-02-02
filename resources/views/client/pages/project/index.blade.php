@extends('client.layout.site')
@section('subhead')
    <title>{{ $projectPage->meta_title }}</title>
    <meta name="description"
          content="{{ $projectPage->meta_description }}">
@endsection

@section('wrapper')
    <div class="projects_page wrapper">
        <div class="main_title">{{ $projectPage->title }}</div>
        <div class="paragraph">
            {!! $projectPage->description !!}
        </div>
        <form class="filters">
            <a href="{{ locale_route("client.project.index") }}">
                <label class="project_p_filter {{ !request()->category ? "active" : "" }}">ყველა</label>
            </a>
            @foreach($categories as $category)
                <a href="{{ locale_route("client.project.index", ["category" => $category->id]) }}">
                    <label class="project_p_filter {{ request()->category == $category->id ? "active" : "" }}">{{ $category->title }}</label>
                </a>
            @endforeach
        </form>
        <div class="project_main_grid active margin_bottom">
            <div class="grid">
                @foreach($projects as $project)
                    <div class="item">
                        <div class="img">
                            <img src="{{url($project->file ? $project->file->file_url : '')}}" alt=""/>
                        </div>
                        <div class="title">{{ $project->title }}</div>
                        <div class="paragraph">
                            {{ $project->short_description }}
                        </div>
                        <a href="{{ locale_route('client.project.show',$project->slug) }}">
                            <button class="main_button">
                                @lang("client.project_view_more")
                                <img src="/img/icons/arrows/1.png" alt="" class="abs_arr"/>
                            </button>
                        </a>
                    </div>
                @endforeach
            </div>
            {{ $projects->appends(request()->input())->links('client.pagination') }}
        </div>
{{--        <div class="project_main_grid flex">2</div>--}}
{{--        <div class="project_main_grid flex">3</div>--}}
{{--        <div class="project_main_grid flex">4</div>--}}
    </div>

@endsection

