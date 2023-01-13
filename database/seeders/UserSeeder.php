<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
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
        DB::table('users')->insert([
            [
                'name' => 'admin',
                'email' => 'admin@test.com',
                'password' => Hash::make('1234'),
                'is_admin' => 1,
            ],
            [
                'name' => 'test',
                'email' => 'test@test.com',
                'password' => Hash::make('1234'),
                'is_admin' => 0,
            ],
        ]);
    }
}
