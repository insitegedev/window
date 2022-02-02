<footer class="footer">
    <div class="wrapper flex">
        <div class="column">
            <a href="{{locale_route('client.home.index')}}" class="logo">
                <img src="/img/logo/2.png" alt="" />
            </a>
            <div class="paragraph light">Design By Insite International</div>
        </div>
        <div class="column">
            <a href="{{ locale_route("client.home.index") }}" class="paragraph light"> @lang("client.footer_home") </a>
            <a href="{{ locale_route("client.product.index") }}" class="paragraph light"> @lang("client.footer_product") </a>
            <a href="{{ locale_route("client.service.index") }}" class="paragraph light"> @lang("client.footer_service") </a>
            <a href="{{ locale_route("client.about.index") }}" class="paragraph light"> @lang("client.footer_about_us") </a>
            <a href="{{ locale_route("client.project.index") }}" class="paragraph light"> @lang("client.footer_projects") </a>
            <a href="{{ locale_route("client.contact.index") }}" class="paragraph light"> @lang("client.footer_contact") </a>
        </div>
        <div class="column">
            <div class="title light">@lang("client.footer_contact_us")</div>
            <a href="#" class="flex center"
            ><img src="/img/icons/footer/1.png" alt="" />
                <div class="paragraph light">
                    {{ $gaddress }}
                </div></a
            >
            <a href="#" class="flex center"
            ><img src="/img/icons/footer/2.png" alt="" />
                <div class="paragraph light">{{ $gemail }}</div></a
            >
            <a href="#" class="flex center"
            ><img src="/img/icons/footer/3.png" alt="" />
                <div class="paragraph light">{{ $gphone }}</div></a
            >
            <a href="#" class="flex center"
            ><img src="/img/icons/footer/4.png" alt="" />
                <div class="paragraph light">{{ $gworkingHours }}</div></a
            >
            <div class="flex sm">
                <a href="{{ $gfacebook }}"><img src="/img/icons/footer/fb.png" alt="" /></a>
                <a href="{{ $ginstagram }}"><img src="/img/icons/footer/ig.png" alt="" /></a>
                <a href="{{ $gyoutube }}"><img src="/img/icons/footer/yt.png" alt="" /></a>
            </div>
        </div>

        <div class="column">
            <div class="title light">@lang("client.footer_find_us_on_map")</div>
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
</footer>
