<?php

namespace App\Models\Translations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApartmentTranslation extends Model
{
    use HasFactory;

    /**
     * @var string[]
     */
    protected $fillable = [
        'floor',
        'apartments'
    ];
}
