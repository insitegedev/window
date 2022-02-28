<?php

namespace App\Models\Translations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FloorTranslation extends BaseTranslationModel
{
    use HasFactory;

    /**
     * @var string[]
     */
    protected $fillable = [
        'title',
        'dimension',
        'apartment',
        'area',
        'specifications',
        'meta_title',
        'meta_description',
        'meta_keyword',
    ];
}
