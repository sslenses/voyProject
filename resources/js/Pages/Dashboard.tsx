import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import FormAdminLayout from "@/Layouts/FormAdminLayout";
import AsideMenu from "./Dashboard/Partials/AsideMenu";
import Navbar from "./Dashboard/Partials/Navbar";

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
            <div className="flex w-full px-8">
                <Head title="Dashboard" />
                <div className=" pt-12">
                    <AsideMenu />
                </div>
                <div className="flex flex-col w-full mx-auto px-6 pt-12 pb-6 gap-6">
                    <div>
                        <Navbar user={auth.user} />
                    </div>
                    <div>
                        <FormAdminLayout />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
