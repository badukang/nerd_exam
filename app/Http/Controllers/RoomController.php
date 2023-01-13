<?php

namespace App\Http\Controllers;

use App\Models\RoomStatus;
use App\Models\Room;
use App\Http\Requests\RoomPostRequest;
use App\Http\Requests\RoomUpdateRequest;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Rooms/Index', [
            'rooms' => Room::with('room_status')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Rooms/Create', [
            'roomStatus' => RoomStatus::get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RoomPostRequest $request)
    {
        $validated = $request->validated();

        $request->user()->rooms()->create($validated);

        return redirect(route('rooms.index'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\room  $room
     * @return \Illuminate\Http\Response
     */
    public function edit(Room $room)
    {
        return Inertia::render('Rooms/Edit', [
            'room' => $room,
            'roomStatus' => RoomStatus::get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function update(RoomUpdateRequest $request, Room $room)
    {
        //added authentication for updating room status
        $this->authorize('update', $room);

        $validated = $request->validated();

        $room->update($validated);

        return redirect(route('rooms.edit', $room->id));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function destroy(Room $room)
    {
        $this->authorize('delete', $room);

        $room->delete();

        return redirect(route('rooms.index'));
    }
}
