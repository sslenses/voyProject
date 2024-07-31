import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import FormAdminLayout from "@/Layouts/FormAdminLayout";
import AsideMenu from "./Dashboard/Partials/AsideMenu";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="flex w-full px-8">
                <div className=" pt-12">
                    <AsideMenu />
                </div>
                <div className="w-full mx-auto px-6 pt-12 pb-6">
                    <FormAdminLayout />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
