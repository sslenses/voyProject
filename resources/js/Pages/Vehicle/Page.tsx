import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import ViewVehiclesTable from "./Partials/ViewVehiclesTable";
import { useEffect } from "react";
import { Button } from "@/Components/ui/button";

export default function Page({ vehicles, auth }: any) {
    useEffect(() => {
        console.log(vehicles);
    }, [vehicles]);
    return (
        <AuthenticatedLayout user={auth.user} auth={auth}>
            <Head title="Vehicles" />
            <div className="container mx-auto p-4">
                <div className="flex justify-end mb-4">
                    <Link href={route('vehicles.create')}>
                        <Button>Add Vehicle</Button>
                    </Link>
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <div className="min-w-full">
                    <ViewVehiclesTable vehicles={vehicles} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
