@if($paginator->hasPages())
    <ul class="pagination flex center">
        @if ($paginator->onFirstPage())
            <a href="" onclick="return false;">
                <button><img src="/img/icons/arrows/3.png" alt=""/></button>
            </a>
        @else

            <a href="{{ $paginator->previousPageUrl() }}">
                <button><img src="/img/icons/arrows/3.png" alt=""/></button>
            </a>

        @endif
        {{--             Pagination Elements--}}
        @foreach ($elements as $element)
            {{--                 Array Of Links--}}
            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <button class="page_num active"><a href="" onclick="return false;">{{$page}}</a></button>


                    @else
                        <button class="page_num"><a href="{{$url}}">{{$page}}</a></button>

                    @endif
                @endforeach
            @endif
        @endforeach
        {{--             Next Page Link--}}
        @if ($paginator->hasMorePages())
            <a href="{{ $paginator->nextPageUrl() }}">
                <button><img src="/img/icons/arrows/4.png" alt=""/></button>
            </a>

        @else
            <a href="" onclick="return false;">
                <button><img src="/img/icons/arrows/4.png" alt=""/></button>
            </a>
        @endif
    </ul>
@else

    <ul class="pagination flex center">
        <a href="#" onclick="return false;">
            <button><img src="/img/icons/arrows/3.png" alt=""/></button>
        </a>
        <button class=" page_num active"><a href="" onclick="return false;">1</a></button>
        <a href="#" onclick="return false;">
            <button><img src="/img/icons/arrows/4.png" alt=""/></button>
        </a>

        </a>
    </ul>
@endif
{{--<div class="pagination flex center">--}}
{{--    <button><img src="/img/icons/arrows/3.png" alt=""/></button>--}}
{{--    <button class="page_num active">1</button>--}}
{{--    <button class="page_num">2</button>--}}
{{--    <button class="page_num">3</button>--}}
{{--    <button class="page_num">4</button>--}}
{{--    <button><img src="/img/icons/arrows/4.png" alt=""/></button>--}}
{{--</div>--}}


