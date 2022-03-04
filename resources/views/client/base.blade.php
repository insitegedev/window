<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <title>{{ $meta_title }}</title>
    <meta name="description"
          content="{{ $meta_description }}">
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
