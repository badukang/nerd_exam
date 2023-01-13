<?php

namespace App\Models;

use App\Events\RoomCreated;
use App\Events\RoomUpdated;
use App\Events\RoomDeleted;
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

    protected $dispatchesEvents = [
        'created' => RoomCreated::class,
        'updated' => RoomUpdated::class,
        'deleted' => RoomDeleted::class,
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
