import { Link } from "@inertiajs/inertia-react";
import { XCircleIcon } from "@heroicons/react/24/outline";

import { Inertia } from "@inertiajs/inertia";

const Room = ({ room, is_admin }) => {
    const deleteRoom = (roomId) => {
        Inertia.delete(route("rooms.destroy", roomId));
    };

    return (
        <div className="rounded-md border-solid border-2 relative">
            <Link href={route("rooms.edit", room.id)}>
                <h3 className="text-lg font-semibold text-center">
                    {room.room_number}
                </h3>
                <div
                    className="h-36"
                    style={{ backgroundColor: room.room_status.color }}
                ></div>
                <p className="p-1 text-sm text-gray-500 break-normal">
                    {room.room_status.name}
                </p>
            </Link>
            {is_admin ? (
                <button
                    onClick={() => deleteRoom(room.id)}
                    className="absolute -top-2 -right-2"
                >
                    <XCircleIcon
                        className="h-6 w-6 text-red"
                        fill="red"
                        aria-hidden="true"
                    />
                </button>
            ) : null}
        </div>
    );
};

export default Room;
