@extends('client.layout.site')

<title>{{ $productPage->meta_title }}</title>
<meta name="description"
      content="{{ $productPage->meta_description }}">
@section('wrapper')
    <div class="product_page wrapper">
        <div class="head flex">
            <div class="main_title">{{__('client.products')}}</div>
            <form class="filters flex">
                @foreach($categories as $category)
                    <a href="{{locale_route('client.product.index',['category' => $category->id])}}">
                        <label class="title" for="pdfp1">{{$category->title}}</label>
                    </a>
                @endforeach
            </form>
        </div>
        <div class="product_p_content active">
            <div class="title">{{$productPage->title}}</div>
            <div class="paragraph">
                {!! $productPage->description !!}
            </div>
            <div class="slider">
                <div class="ppage_slider flex">
                    @foreach($products as $product)
                        <div class="item">
                            <div class="img">
                                <img src="{{url($product->file ? $product->file->file_url : '')}}" alt=""/>
                            </div>
                            <div class="title">{{$product->title}}</div>
                            <div class="paragraph">
                                {!! $product->short_description !!}
                            </div>
                            <a href="{{locale_route('client.product.show',$product->slug)}}">
                                <button class="main_button">
                                    {{__('client.view_more')}}
                                    <img src="/img/icons/arrows/1.png" alt="" class="abs_arr"/>
                                </button>
                            </a>
                        </div>
                    @endforeach
                </div>

                <button class="arrow flex center" id="pp_prev">
                    <img src="/img/icons/arrows/prev.svg" alt=""/>
                </button>
                <button class="arrow flex center" id="pp_next">
                    <img src="/img/icons/arrows/next.svg" alt=""/>
                </button>
            </div>
        </div>
    </div>

@endsection

