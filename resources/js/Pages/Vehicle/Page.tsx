import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import ViewVehiclesTable from "./Partials/ViewVehiclesTable";
import { Tabs, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Button } from "@/Components/ui/button";
import { File, ListFilter, PlusCircle } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { useEffect } from "react";

export default function Page({ vehicles }: any) {
    useEffect(() => {
        console.log(vehicles);
    }, [vehicles]);
    return <ViewVehiclesTable vehicles={vehicles} />;
}

// export default function Page({
//     auth,
// }: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
//     return (
//         <AuthenticatedLayout
//             user={auth.user}
//             header={
//                 <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
//                     Vehicles
//                 </h2>
//             }
//         >
//             <Head title="Profile" />
//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
//                     <Tabs defaultValue="all">
//                         <div className="flex items-center">
//                             <TabsList>
//                                 <TabsTrigger value="all">All</TabsTrigger>
//                                 <TabsTrigger value="active">Active</TabsTrigger>
//                                 <TabsTrigger value="draft">Draft</TabsTrigger>
//                                 <TabsTrigger
//                                     value="archived"
//                                     className="hidden sm:flex"
//                                 >
//                                     Archived
//                                 </TabsTrigger>
//                             </TabsList>
//                             <div className="ml-auto flex items-center gap-2">
//                                 <DropdownMenu>
//                                     <DropdownMenuTrigger asChild>
//                                         <Button
//                                             variant="outline"
//                                             size="sm"
//                                             className="h-7 gap-1"
//                                         >
//                                             <ListFilter className="h-3.5 w-3.5" />
//                                             <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
//                                                 Filter
//                                             </span>
//                                         </Button>
//                                     </DropdownMenuTrigger>
//                                     <DropdownMenuContent align="end">
//                                         <DropdownMenuLabel>
//                                             Filter by
//                                         </DropdownMenuLabel>
//                                         <DropdownMenuSeparator />
//                                         <DropdownMenuCheckboxItem checked>
//                                             Active
//                                         </DropdownMenuCheckboxItem>
//                                         <DropdownMenuCheckboxItem>
//                                             Draft
//                                         </DropdownMenuCheckboxItem>
//                                         <DropdownMenuCheckboxItem>
//                                             Archived
//                                         </DropdownMenuCheckboxItem>
//                                     </DropdownMenuContent>
//                                 </DropdownMenu>
//                                 <Button
//                                     size="sm"
//                                     variant="outline"
//                                     className="h-7 gap-1"
//                                 >
//                                     <File className="h-3.5 w-3.5" />
//                                     <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
//                                         Export
//                                     </span>
//                                 </Button>
//                                 <Button size="sm" className="h-7 gap-1">
//                                     <PlusCircle className="h-3.5 w-3.5" />
//                                     <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
//                                         Add Vehicle
//                                     </span>
//                                 </Button>
//                             </div>
//                         </div>
//                     </Tabs>
//                     <ViewVehiclesTable Vehicles={vehicles}/>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }
