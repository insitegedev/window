<?php

namespace Database\Seeders;

use App\Models\Apartment;
use Illuminate\Database\Seeder;

class ApartmentSeeder extends Seeder
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
                'title' => 'A1'
            ],
            [
                'title' => 'A2'
            ],
            [
                'title' => 'A3'
            ],
            [
                'title' => 'A4'
            ],
            [
                'title' => 'B1'
            ],
            [
                'title' => 'B2'
            ],
            [
                'title' => 'B3'
            ],
            [
                'title' => 'B4'
            ]

        ];

        // Insert Apartments
        Apartment::insert($Settings);
    }
}
