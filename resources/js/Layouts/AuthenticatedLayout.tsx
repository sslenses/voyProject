import { PropsWithChildren, ReactNode } from "react";
import { Head } from "@inertiajs/react";
import { User } from "@/types";
import AsideMenu from "@/Pages/Dashboard/Partials/AsideMenu";
import Navbar from "@/Pages/Dashboard/Partials/Navbar";

export default function AuthenticatedLayout({
    children,
    auth,
}: PropsWithChildren<{ user: User; header?: ReactNode; auth: any }>) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Head title="Dashboard" />
            <div className="flex w-full">
                <div className="pt-4">
                    <AsideMenu />
                </div>
                <div className="flex flex-col w-full mx-auto px-6 pt-4 pb-6 space-y-6">
                    <div>
                        <Navbar user={auth.user} />
                    </div>
                    <div>
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </div>
    );
}
