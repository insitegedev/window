<?php

namespace Database\Seeders;

use App\Models\Apartment;
use Illuminate\Database\Seeder;

class ApartmentExtraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Apartments array
        $Settings = [
            [
                'title' => 'A5'
            ],


        ];

        // Insert Apartments
        Apartment::insert($Settings);
    }
}
