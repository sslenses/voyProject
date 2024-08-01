import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import DashboardLayout from "../Dashboard/DashboardLayout";
import { PageProps } from "@/types";

export default function Page({ auth }: PageProps) {
    return (
        <DashboardLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Rental
                </h2>
            }
            auth={auth}
        >
            <Head title="Dashboard" />
            <p>test</p>
        </DashboardLayout>
    );
}
