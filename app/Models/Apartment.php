<?php

namespace App\Models;

use App\Models\Translations\ApartmentTranslation;
use App\Models\Translations\SettingTranslation;
use App\Traits\ScopeFilter;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Apartment extends Model
{
    use SoftDeletes, Translatable, HasFactory, ScopeFilter;


    protected $table = 'apartments';

    protected $fillable = [
        'title'
    ];

    protected $translationModel = ApartmentTranslation::class;

    public $translatedAttributes = [
        'floor',
        'apartments'
    ];


    public function getFilterScopes(): array
    {
        return [
            'id' => [
                'hasParam' => true,
                'scopeMethod' => 'id'
            ],
            'title' => [
                'hasParam' => true,
                'scopeMethod' => 'title'
            ],
            'floor' => [
                'hasParam' => true,
                'scopeMethod' => 'floor'
            ],
            'apartments' => [
                'hasParam' => true,
                'scopeMethod' => 'apartments'
            ],

        ];
    }

    /**
     * @return HasMany
     */
    public function floors(): HasMany
    {
        return $this->hasMany(Floor::class);
    }
}
