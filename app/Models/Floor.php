<?php

namespace App\Models;

use App\Models\Translations\ApartmentTranslation;
use App\Models\Translations\FloorTranslation;
use App\Traits\ScopeFilter;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Floor extends Model
{
    use SoftDeletes, Translatable, HasFactory, ScopeFilter;


    protected $table = 'floors';

    protected $fillable = [
        'apartment_id',
        'slug',
        'status',
    ];

    protected $translationModel = FloorTranslation::class;

    public $translatedAttributes = [
        'title',
        'dimension',
        'apartment',
        'area',
        'specifications',
        'meta_title',
        'meta_description',
        'meta_keyword',
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
     * @return BelongsTo
     */
    public function apartment(): BelongsTo
    {
        return $this->belongsTo(Apartment::class, 'apartment_id', 'id');
    }

    /**
     * @return BelongsTo
     */
    public function apartment_relation(): BelongsTo
    {
        //this is for admin panel
        return $this->belongsTo(Apartment::class, 'apartment_id', 'id');
    }

    /**
     * @return MorphMany
     */
    public function files(): MorphMany
    {
        return $this->morphMany(File::class, 'fileable')->where('format', '!=', 'pdf');
    }

    /**
     * @return MorphOne
     */
    public function file(): MorphOne
    {
        return $this->morphOne(File::class, 'fileable')->where('format', '!=', 'pdf');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function pdf(): MorphOne
    {
        return $this->morphOne(File::class, 'fileable')->where('format', '=', 'pdf');
    }

}
