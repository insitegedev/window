@extends('client.layout.site')
@section('subhead')
    <title>@lang('client.home_meta_title')</title>
    <meta name="description"
          content="@lang('client.home_meta_description')">
@endsection

@section('wrapper')
    <div class="product_detail wrapper">
        <div class="main_title">პროექტები</div>
        <div class="content flex">
            <div class="info">
                <div class="title">პროდუქტის დასახელება</div>
                <div class="paragraph">
                    შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
                    ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად
                    მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა,
                    როდესაც დიზაინის
                </div>
                <div class="paragraph">
                    შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი. სწორედ
                    ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის
                    გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“ ან სხვა
                    გამეორებადი სიტყვების
                </div>
            </div>
            <div class="view">
                <div class="main_img img">
                    <img src="/img/products/2.png" alt="" class="large_image active" />
                    <img src="/img/products/1.png" alt="" class="large_image" />
                    <img src="/img/products/5.png" alt="" class="large_image" />
                    <img src="/img/products/4.png" alt="" class="large_image" />
                    <img src="/img/products/3.png" alt="" class="large_image" />
                </div>
                <div class="slider">
                    <div class="details_slider flex center">
                        <div class="img detail_img_filter">
                            <img src="/img/products/2.png" alt="" />
                        </div>
                        <div class="img detail_img_filter">
                            <img src="/img/products/1.png" alt="" />
                        </div>
                        <div class="img detail_img_filter">
                            <img src="/img/products/5.png" alt="" />
                        </div>
                        <div class="img detail_img_filter">
                            <img src="/img/products/4.png" alt="" />
                        </div>
                        <div class="img detail_img_filter">
                            <img src="/img/products/3.png" alt="" />
                        </div>
                    </div>
                    <button class="arr" id="prev_det_img">
                        <img src="/img/icons/arrows/3.png" alt="" />
                    </button>
                    <button class="arr" id="next_det_img">
                        <img src="/img/icons/arrows/4.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    </div>

@endsection

