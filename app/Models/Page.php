<?php

namespace App\Models;

use App\Models\Translations\PageTranslation;
use App\Traits\ScopeFilter;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Page extends Model
{
    use SoftDeletes, Translatable, HasFactory, ScopeFilter;


    protected $table = 'pages';

    protected $fillable = [
        'key'
    ];

    protected $translationModel = PageTranslation::class;

    public $translatedAttributes = [
        'title',
        'description',
        "meta_title",
        "meta_description"
    ];


    public function getFilterScopes(): array
    {
        return [
            'id' => [
                'hasParam' => true,
                'scopeMethod' => 'id'
            ],
            'key' => [
                'hasParam' => true,
                'scopeMethod' => 'key'
            ],
            'title' => [
                'hasParam' => true,
                'scopeMethod' => 'titleTranslation'
            ]
        ];
    }




    public function files(): MorphMany
    {
        return $this->morphMany(File::class, 'fileable');
    }
}
