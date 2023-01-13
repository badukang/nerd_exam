import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Index({ auth, roomStatus }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        room_number: "",
        room_status_id: "",
        room_description: "",
    });

    const inputHandler = (e) => {
        setData(e.target.name, e.target.value);
    };

    const saveRoom = (e) => {
        e.preventDefault();
        post(route("rooms.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Create Room" />

            <div className="p-20">
                <form onSubmit={saveRoom}>
                    <div className="p-2">
                        <h3>Create</h3>
                    </div>
                    <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <InputError
                                        message={errors.room_number}
                                        className="mt-2 italic"
                                    />
                                    <label
                                        htmlFor="room_number"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Room Number
                                    </label>
                                    <input
                                        type="number"
                                        name="room_number"
                                        id="room_number"
                                        autoComplete="given-name"
                                        required="required"
                                        defaultValue={data.room_number}
                                        onChange={inputHandler}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <InputError
                                        message={errors.room_status_id}
                                        className="mt-2 italic"
                                    />
                                    <label
                                        htmlFor="room_status_id"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Room Status Id
                                    </label>
                                    <select
                                        id="room_status_id"
                                        name="room_status_id"
                                        autoComplete="room_status_id"
                                        required="required"
                                        onChange={inputHandler}
                                        defaultValue={data.room_status_id}
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option disabled></option>
                                        {roomStatus.map((status) => (
                                            <option
                                                key={status.id}
                                                value={status.id}
                                            >
                                                {status.name.toUpperCase()}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                    <InputError
                                        message={errors.room_description}
                                        className="mt-2 italic"
                                    />
                                    <label
                                        htmlFor="room_description"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Room Description
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="room_description"
                                            name="room_description"
                                            rows={3}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            onChange={inputHandler}
                                            defaultValue={data.room_description}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 space-x-4">
                            <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Save
                            </button>
                            <Link
                                href={route("rooms.index")}
                                className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            >
                                Cancel
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
