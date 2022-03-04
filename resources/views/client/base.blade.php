<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <title>{{ $meta_title }}</title>
    <meta name="description"
          content="{{ $meta_description }}">
    <meta name="keywords" content="{{ $meta_description}}">

    <meta property="og:title" content="og title">
    <meta property="og:description" content="og desc">
    <meta property="og:image" content="/img/home/1.png">
    <meta property="og:url" content="{{ request()->fullUrl() }}">
    <meta property="og:type" content="page">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    @if(app()->getLocale()=="ge")
        <link href="{{ mix('/css/AppGeo.css') }}" rel="stylesheet" />
    @elseif(app()->getLocale()=="en")
        <link href="{{ mix('/css/AppEng.css') }}" rel="stylesheet" />
    @endif
{{--    @dd($page["props"]["page"]["meta_title"])--}}
    @routes
    <script src="{{ mix('/js/app.js') }}" defer></script>
</head>
<body>
@inertia
</body>
</html>
