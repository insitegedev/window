<?php

namespace Database\Seeders;

use App\Models\Floor;
use Illuminate\Database\Seeder;

class FloorExtraSeeder extends Seeder
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
                'apartment_id' => 9,
                'slug' => "floor_A5_flat_1",
                'points' => "523.2,25.7 2.1,25.7 2.1,699.8 987.4,699.8 987.4,25.7 600.5,25.4 600.5,52.8 592.1,90 525.2,51.2 525.2,39.3 523.3,39.3",
                'status' => 1,
            ]

        ];

        // Insert Floors
        Floor::insert($floors);
    }
}
