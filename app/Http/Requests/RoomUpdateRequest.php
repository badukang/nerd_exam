<?php

namespace App\Http\Requests;

use App\Models\Room;
use App\Models\RoomStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RoomUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        //$this->room
        return [
            //'room_number' => ['required', 'integer', Rule::unique(Room::class)],
            'room_status_id' => ['required', Rule::exists(RoomStatus::class, 'id')],
            'room_description' => ['required', 'string', 'min:4'],
        ];
    }
}
