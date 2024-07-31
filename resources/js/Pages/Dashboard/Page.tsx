import { PropsWithChildren, ReactNode } from "react";
import { Head } from "@inertiajs/react";
import { User } from "@/types";
import AsideMenu from "./Partials/AsideMenu";
import Navbar from "./Partials/Navbar";

export default function Page({
    children,
    auth,
}: PropsWithChildren<{ user: User; header?: ReactNode; auth: any }>) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Head title="Dashboard" />
            <div className="flex w-full">
                <div className=" pt-12">
                    <AsideMenu />
                </div>
                <div className="flex flex-col w-full mx-auto px-6 pt-12 pb-6 gap-6">
                    <div>
                        <Navbar user={auth.user} />
                    </div>
                    <div>
                        <p>test</p>
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </div>
    );
}
