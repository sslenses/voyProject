import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import AsideLayout from '@/Layouts/AsideLayout';
import FormAdminLayout from '@/Layouts/FormAdminLayout';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <FormAdminLayout/>

           

        </AuthenticatedLayout>
    );
}
