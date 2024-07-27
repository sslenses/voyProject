import DashboardLayout from "@/Layouts/DashboardLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Page({ auth }: PageProps) {
    return (
        <DashboardLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Rentals
                </h2>
            }
        >
            <Head title="Rentals" />
            <h1>Rental</h1>
        </DashboardLayout>
    );
}
