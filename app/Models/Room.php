<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Room extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'room_number',
        'room_description',
        'room_status_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function room_status()
    {
        return $this->belongsTo(RoomStatus::class);
    }
}
