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
import { useEffect } from "react";

export default function ViewVehiclesTable({ vehicles }: any) {
    useEffect(() => {
        console.log(vehicles);
    }, [vehicles]);
    return (
        <Card className="rounded-2xl ">
            <CardHeader>
                <CardTitle>Vehicles</CardTitle>
                <CardDescription>
                    Gunakan tabel ini untuk melihat informasi detail setiap
                    kendaraan yang Anda kelola.
                </CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
                <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                    <Table className="min-w-full">
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>External ID</TableHead>
                                <TableHead>License Plate</TableHead>
                                <TableHead>Operating Condition</TableHead>
                                <TableHead>Fleet</TableHead>
                                <TableHead>With</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Mileage</TableHead>
                                <TableHead>Last Rental At</TableHead>
                                <TableHead>Voltage</TableHead>
                                <TableHead>Recorded At</TableHead>
                                <TableHead>State of Charge</TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {vehicles.map((vehicles: any) => (
                                <TableRow key={vehicles.id}>
                                    <TableCell className="font-medium">
                                        {vehicles.vehicle_id}
                                    </TableCell>
                                    <TableCell>
                                        {vehicles.eksternal_id}
                                    </TableCell>
                                    <TableCell>
                                        {vehicles.license_plate}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant="outline"
                                            className="text-green-600
                                        outline-green-600"
                                        >
                                            {vehicles.model}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {vehicles.manufacturer}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {vehicles.year}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant="outline"
                                            className="text-green-600
                                        outline-green-600"
                                        >
                                            {vehicles.type}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{vehicles.has_gps}</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {vehicles.has_iot}
                                    </TableCell>
                                    <TableCell>
                                        {vehicles.last_service_date}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {vehicles.next_service_due}
                                    </TableCell>
                                    <TableCell>{vehicles.partner_id}</TableCell>

                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    aria-haspopup="true"
                                                    size="icon"
                                                    variant="ghost"
                                                >
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">
                                                        Toggle menu
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>
                                                    Actions
                                                </DropdownMenuLabel>
                                                <DropdownMenuItem>
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                </div>
                <div>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive>
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </CardFooter>
        </Card>
    );
}
