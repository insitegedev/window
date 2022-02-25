<?php

namespace Database\Seeders;

use App\Models\Floor;
use Illuminate\Database\Seeder;

class FloorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Floors array
        $floors = [
            [
                'apartment_id' => 1,
                'slug' => "floor_1_flat_1",
                'status' => 1,
            ],
            [
                'apartment_id' => 1,
                'slug' => "floor_1_flat_2",
                'status' => 1,
            ],
            [
                'apartment_id' => 1,
                'slug' => "floor_1_flat_3",
                'status' => 1,
            ],
            [
                'apartment_id' => 1,
                'slug' => "floor_1_flat_4",
                'status' => 1,
            ],
            [
                'apartment_id' => 1,
                'slug' => "floor_1_flat_5",
                'status' => 1,
            ],
            [
                'apartment_id' => 1,
                'slug' => "floor_1_flat_6",
                'status' => 1,
            ],
            [
                'apartment_id' => 1,
                'slug' => "floor_1_flat_7",
                'status' => 1,
            ],
            [
                'apartment_id' => 1,
                'slug' => "floor_1_flat_8",
                'status' => 1,
            ],
            [
                'apartment_id' => 1,
                'slug' => "floor_1_flat_9",
                'status' => 1,
            ],

        ];

        // Insert Floors
        Floor::insert($floors);
    }
}
