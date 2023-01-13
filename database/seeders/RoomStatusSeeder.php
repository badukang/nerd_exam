<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoomStatusSeeder extends Seeder
{
    //prevent event
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = date("Y-m-d H:i:s");

        DB::table('room_statuses')->insert([
            [
                'name' => 'clean',
                'color' => 'green',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'occupied',
                'color' => 'red',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'dirty',
                'color' => 'orange',
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
