"use client";

import { MoreHorizontal } from "lucide-react";

import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/ui/pagination";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import { usePage } from "@inertiajs/react";

export default function ViewVehiclesTable({vehicles}) {
    
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {vehicles.map((vehicle) => (
                    <li key={vehicle.vehicle_id}>{vehicle.vehicle_id}</li>
                ))}
            </ul>
        </div>
        
        // <Card>
        //     <CardHeader>
        //         <CardTitle>Vehicles</CardTitle>
        //         <CardDescription>
        //             Gunakan tabel ini untuk melihat informasi detail setiap
        //             kendaraan yang Anda kelola.
        //         </CardDescription>
        //     </CardHeader>
        //     <CardContent>
        //         <ScrollArea className="max-w-full whitespace-nowrap rounded-md border">
        //             <Table>
        //                 <TableHeader>
        //                     <TableRow>
        //                         <TableHead>ID</TableHead>
        //                         <TableHead>External ID</TableHead>
        //                         <TableHead>License Plate</TableHead>
        //                         <TableHead>Operating Condition</TableHead>
        //                         <TableHead>Fleet</TableHead>
        //                         <TableHead>With</TableHead>
        //                         <TableHead>Status</TableHead>
        //                         <TableHead>Mileage</TableHead>
        //                         <TableHead>Last Rental At</TableHead>
        //                         <TableHead>Voltage</TableHead>
        //                         <TableHead>Recorded At</TableHead>
        //                         <TableHead>State of Charge</TableHead>
        //                         <TableHead>
        //                             <span className="sr-only">Actions</span>
        //                         </TableHead>
        //                     </TableRow>
        //                 </TableHeader>
        //                 <TableBody>
        //                     <TableRow>
        //                         <TableCell className="font-medium">
        //                             101
        //                         </TableCell>
        //                         <TableCell>VOY 007</TableCell>
        //                         <TableCell>DK 1255 VOY</TableCell>
        //                         <TableCell>
        //                             <Badge
        //                                 variant="outline"
        //                                 className="text-green-600
        //                                 outline-green-600"
        //                             >
        //                                 OPERATIONAL
        //                             </Badge>
        //                         </TableCell>
        //                         <TableCell className="hidden md:table-cell">
        //                             AYANA RESORT
        //                         </TableCell>
        //                         <TableCell className="hidden md:table-cell">
        //                             Sidiq Setyadji
        //                         </TableCell>
        //                         <TableCell>
        //                             <Badge
        //                                 variant="outline"
        //                                 className="text-green-600
        //                                 outline-green-600"
        //                             >
        //                                 NO TASKS
        //                             </Badge>
        //                         </TableCell>
        //                         <TableCell>876 km</TableCell>
        //                         <TableCell className="hidden md:table-cell">
        //                             2023-07-12 10:42 AM
        //                         </TableCell>
        //                         <TableCell>56.0 V</TableCell>
        //                         <TableCell className="hidden md:table-cell">
        //                             2023-07-12 10:42 AM
        //                         </TableCell>
        //                         <TableCell>100%</TableCell>

        //                         <TableCell>
        //                             <DropdownMenu>
        //                                 <DropdownMenuTrigger asChild>
        //                                     <Button
        //                                         aria-haspopup="true"
        //                                         size="icon"
        //                                         variant="ghost"
        //                                     >
        //                                         <MoreHorizontal className="h-4 w-4" />
        //                                         <span className="sr-only">
        //                                             Toggle menu
        //                                         </span>
        //                                     </Button>
        //                                 </DropdownMenuTrigger>
        //                                 <DropdownMenuContent align="end">
        //                                     <DropdownMenuLabel>
        //                                         Actions
        //                                     </DropdownMenuLabel>
        //                                     <DropdownMenuItem>
        //                                         Edit
        //                                     </DropdownMenuItem>
        //                                     <DropdownMenuItem>
        //                                         Delete
        //                                     </DropdownMenuItem>
        //                                 </DropdownMenuContent>
        //                             </DropdownMenu>
        //                         </TableCell>
        //                     </TableRow>
                            
        //                 </TableBody>
        //             </Table>

        //             <ScrollBar orientation="horizontal" />
        //         </ScrollArea>
        //     </CardContent>
        //     <CardFooter className="flex justify-between">
        //         <div className="text-xs text-muted-foreground">
        //             Showing <strong>1-10</strong> of <strong>32</strong>{" "}
        //             products
        //         </div>
        //         <div>
        //             <Pagination>
        //                 <PaginationContent>
        //                     <PaginationItem>
        //                         <PaginationPrevious href="#" />
        //                     </PaginationItem>
        //                     <PaginationItem>
        //                         <PaginationLink href="#">1</PaginationLink>
        //                     </PaginationItem>
        //                     <PaginationItem>
        //                         <PaginationLink href="#" isActive>
        //                             2
        //                         </PaginationLink>
        //                     </PaginationItem>
        //                     <PaginationItem>
        //                         <PaginationLink href="#">3</PaginationLink>
        //                     </PaginationItem>
        //                     <PaginationItem>
        //                         <PaginationEllipsis />
        //                     </PaginationItem>
        //                     <PaginationItem>
        //                         <PaginationNext href="#" />
        //                     </PaginationItem>
        //                 </PaginationContent>
        //             </Pagination>
        //         </div>
        //     </CardFooter>
        // </Card>
    );
}
