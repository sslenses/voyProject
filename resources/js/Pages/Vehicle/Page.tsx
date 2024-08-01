import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import ViewVehiclesTable from "./Partials/ViewVehiclesTable";
import { useEffect } from "react";

export default function Page({ vehicles, auth }: any) {
    useEffect(() => {
        console.log(vehicles);
    }, [vehicles]);
    return (
        <AuthenticatedLayout user={auth.user} auth={auth}>
            <Head title="Vehicles" />
            <div className="overflow-x-auto w-full">
                <div className="min-w-full">
                    <ViewVehiclesTable vehicles={vehicles} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
