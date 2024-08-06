import { PropsWithChildren, ReactNode } from "react";
import { Head } from "@inertiajs/react";
import { User } from "@/types";
import AsideMenu from "@/Pages/Dashboard/Partials/AsideMenu";
import Navbar from "@/Pages/Dashboard/Partials/Navbar";
import LeftNavbar from "@/Pages/Dashboard/Partials/LeftNavbar/LeftNavbar";

type AuthenticatedLayoutProps = PropsWithChildren<{
    user: User;
    header?: ReactNode;
    auth: any;
}>;

export default function AuthenticatedLayout({
    children,
    auth,
}: AuthenticatedLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 w-screen">
            <Head title="Dashboard" />
            <div className="flex w-full">
                <div className="pt-4">
                    {/* <AsideMenu /> */}
                    <LeftNavbar />
                </div>
                <div className="flex flex-col w-full mx-auto px-6 pt-4 gap-12 overflow-auto">
                    <Navbar user={auth.user} />
                    <div className="overflow-x-auto w-full">
                        <main className="max-w-full">{children}</main>
                    </div>
                </div>
            </div>
        </div>
    );
}
