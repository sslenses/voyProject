import DashboardLayout from "@/Layouts/DashboardLayout";
import { PageProps } from "@/types";
import React from "react";

export default function App({ auth }: PageProps) {
    return (
        <DashboardLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <h1>Rental</h1>
        </DashboardLayout>
    );
}
