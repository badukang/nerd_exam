import React, { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Room from "@/Components/Room/Room";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Index({ auth, rooms }) {
    useEffect(() => {
        //quick refresh for now, inertia.reload preservedState so no need to process each id
        Echo.channel("rooms")
            .listen("RoomCreated", (e) => {
                Inertia.reload();
            })
            .listen("RoomUpdated", (e) => {
                Inertia.reload();
            })
            .listen("RoomDeleted", (e) => {
                Inertia.reload();
            });
    }, []);

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Rooms" />

            <div className="bg-white px-10 ">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex w-0 flex-1 sm:text-center">
                        <h2 className="text-lg font-semibold leading-8 text-indigo-600">
                            Rooms
                        </h2>
                    </div>
                    <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                        <Link
                            replace
                            href={route("rooms.create")}
                            className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                        >
                            <PlusCircleIcon
                                className="h-6 w-6 text-black"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                </div>
                <div className="p-5 mt-6 grid grid-cols-4 gap-2 place-content-center">
                    {/* another authentication: remove option to delete for non admin */}
                    {rooms ? (
                        rooms.map((room) => (
                            <Room
                                key={room.id}
                                is_admin={auth.user.is_admin}
                                room={room}
                            />
                        ))
                    ) : (
                        <div className="a">e</div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
