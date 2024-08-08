"use client";

import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

export default function EditVehicle({ vehicle }: any) {
    // Initialize the form with existing vehicle data
    const { data, setData, post, processing, errors } = useForm({
        external_id: vehicle.external_id || '',
        license_plate: vehicle.license_plate || '',
        model: vehicle.model || '',
        manufacturer: vehicle.manufacturer || '',
        year: vehicle.year || '',
        type: vehicle.type || '',
        status: vehicle.status || '',
        last_service_date: vehicle.last_service_date || '',
        next_service_due: vehicle.next_service_due || '',
        emission_standart: vehicle.emission_standart || '',
        carbon_emissions: vehicle.carbon_emissions || '',
        partner_id: vehicle.partner_id || '',
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('vehicles.update', vehicle.id));
    };

    return (
        <Card className="rounded-2xl">
            <CardHeader>
                <CardTitle>Edit Vehicle</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="external_id">External ID</Label>
                        <Input
                            id="external_id"
                            type="text"
                            value={data.external_id}
                            onChange={(e) => setData('external_id', e.target.value)}
                        />
                        {errors.external_id && <div className="text-red-500">{errors.external_id}</div>}
                    </div>

                    <div>
                        <Label htmlFor="license_plate">License Plate</Label>
                        <Input
                            id="license_plate"
                            type="text"
                            value={data.license_plate}
                            onChange={(e) => setData('license_plate', e.target.value)}
                        />
                        {errors.license_plate && <div className="text-red-500">{errors.license_plate}</div>}
                    </div>

                    <div>
                        <Label htmlFor="model">Model</Label>
                        <Input
                            id="model"
                            type="text"
                            value={data.model}
                            onChange={(e) => setData('model', e.target.value)}
                        />
                        {errors.model && <div className="text-red-500">{errors.model}</div>}
                    </div>

                    <div>
                        <Label htmlFor="manufacturer">Manufacturer</Label>
                        <Input
                            id="manufacturer"
                            type="text"
                            value={data.manufacturer}
                            onChange={(e) => setData('manufacturer', e.target.value)}
                        />
                        {errors.manufacturer && <div className="text-red-500">{errors.manufacturer}</div>}
                    </div>

                    <div>
                        <Label htmlFor="year">Year</Label>
                        <Input
                            id="year"
                            type="number"
                            value={data.year}
                            onChange={(e) => setData('year', e.target.value)}
                        />
                        {errors.year && <div className="text-red-500">{errors.year}</div>}
                    </div>

                    <div>
                        <Label htmlFor="type">Type</Label>
                        <Input
                            id="type"
                            type="text"
                            value={data.type}
                            onChange={(e) => setData('type', e.target.value)}
                        />
                        {errors.type && <div className="text-red-500">{errors.type}</div>}
                    </div>

                    <div>
                        <Label htmlFor="status">Status</Label>
                        <Input
                            id="status"
                            type="text"
                            value={data.status}
                            onChange={(e) => setData('status', e.target.value)}
                        />
                        {errors.status && <div className="text-red-500">{errors.status}</div>}
                    </div>

                    <div>
                        <Label htmlFor="last_service_date">Last Service Date</Label>
                        <Input
                            id="last_service_date"
                            type="date"
                            value={data.last_service_date}
                            onChange={(e) => setData('last_service_date', e.target.value)}
                        />
                        {errors.last_service_date && <div className="text-red-500">{errors.last_service_date}</div>}
                    </div>

                    <div>
                        <Label htmlFor="next_service_due">Next Service Due</Label>
                        <Input
                            id="next_service_due"
                            type="date"
                            value={data.next_service_due}
                            onChange={(e) => setData('next_service_due', e.target.value)}
                        />
                        {errors.next_service_due && <div className="text-red-500">{errors.next_service_due}</div>}
                    </div>

                    <div>
                        <Label htmlFor="emission_standart">Emission Standart</Label>
                        <Input
                            id="emission_standart"
                            type="text"
                            value={data.emission_standart}
                            onChange={(e) => setData('emission_standart', e.target.value)}
                        />
                        {errors.emission_standart && <div className="text-red-500">{errors.emission_standart}</div>}
                    </div>

                    <div>
                        <Label htmlFor="carbon_emissions">Carbon Emissions</Label>
                        <Input
                            id="carbon_emissions"
                            type="number"
                            value={data.carbon_emissions}
                            onChange={(e) => setData('carbon_emissions', e.target.value)}
                        />
                        {errors.carbon_emissions && <div className="text-red-500">{errors.carbon_emissions}</div>}
                    </div>

                    <div>
                        <Label htmlFor="partner_id">Partner ID</Label>
                        <Input
                            id="partner_id"
                            type="number"
                            value={data.partner_id}
                            onChange={(e) => setData('partner_id', e.target.value)}
                        />
                        {errors.partner_id && <div className="text-red-500">{errors.partner_id}</div>}
                    </div>

                    <Button type="submit" disabled={processing}>
                        Save Changes
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
