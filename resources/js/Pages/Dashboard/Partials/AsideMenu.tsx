import { Button } from "@/Components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";

export default function AsideMenu() {
    return (
        <div className="px-6 w-64">
            <div className="">
                <div className="flex justify-between bg-white rounded-md py-2 px-4">
                    <div className="flex items-center gap-4 text-sm font-semibold">
                        <Button size="icon" className="h-8 w-8 rounded-lg">
                            <ChevronRightIcon className="h-8" />
                        </Button>
                        <p>Dashboard</p>
                    </div>
                    <div className="items-center flex">
                        <ChevronLeftIcon className=" h-4 w-4" />
                    </div>
                </div>
                <div className="flex justify-between hover:bg-white rounded-md py-2 px-4">
                    <div className="flex items-center gap-4 text-sm font-semibold">
                        <Button size="icon" className="h-8 w-8">
                            <ChevronRightIcon className="h-8" />
                        </Button>
                        <p>Rentals</p>
                    </div>
                    <div className="items-center flex">
                        <ChevronLeftIcon className=" h-4 w-4" />
                    </div>
                </div>
                <div className="flex justify-between hover:bg-white rounded-md py-2 px-4">
                    <div className="flex items-center gap-4 text-sm font-semibold">
                        <Button size="icon" className="h-8 w-8">
                            <ChevronRightIcon className="h-8" />
                        </Button>
                        <p>Vehicles</p>
                    </div>
                    <div className="items-center flex">
                        <ChevronLeftIcon className=" h-4 w-4" />
                    </div>
                </div>
                <div className="flex justify-between hover:bg-white rounded-md py-2 px-4">
                    <div className="flex items-center gap-4 text-sm font-semibold">
                        <Button size="icon" className="h-8 w-8">
                            <ChevronRightIcon className="h-8" />
                        </Button>
                        <p>Reports</p>
                    </div>
                    <div className="items-center flex">
                        <ChevronLeftIcon className=" h-4 w-4" />
                    </div>
                </div>
                <div className="flex justify-between hover:bg-white rounded-md py-2 px-4">
                    <div className="flex items-center gap-4 text-sm font-semibold">
                        <Button size="icon" className="h-8 w-8">
                            <ChevronRightIcon className="h-8" />
                        </Button>
                        <p>Settings</p>
                    </div>
                    <div className="items-center flex">
                        <ChevronLeftIcon className=" h-4 w-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}
