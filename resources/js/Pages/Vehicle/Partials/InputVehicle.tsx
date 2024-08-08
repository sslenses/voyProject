import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';

export default function InputVehicle({ partners }: any) {
    useEffect(() => {
        console.log(partners);
    }, [partners]);

    const csrf = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        eksternal_id: '',
        license_plate: '',
        model: '',
        manufacturer: '',
        year: '',
        type: '',
        status: '',
        last_service_date: '',
        next_service_due: '',
        emission_standart: '',
        carbon_emissions: '',
        partner_id: '',
    });

    const handlePartnerChange = (value: string) => {
        setData('partner_id', value); // Update state dengan nilai yang dipilih
    };
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('vehicles.store'), {
            onSuccess: () => {
                // merefresh setelah data masuk
                window.location.reload();
            },
        });
    };

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <form onSubmit={submit}>
                        <div className="grid m-4 w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="eksternal_id" className="font-extrabold">Eksternal Id</Label>
                            <Input type="text" id="eksternal_id" name="eksternal_id" value={data.eksternal_id} onChange={(e) => setData('eksternal_id', e.target.value)} placeholder="eg. Eksternal_id" />
                            {errors.eksternal_id && <div className="error">{errors.eksternal_id}</div>}
                           
                            <Label htmlFor="license_plate" className="font-extrabold">License Plate</Label>
                            <Input type="text" id="license_plate" name="license_plate" value={data.license_plate} onChange={(e) => setData('license_plate', e.target.value)} placeholder="eg. License_Plate" />
                            {errors.license_plate && <div className="error">{errors.license_plate}</div>}
                            
                            <Label htmlFor="model" className="font-extrabold">Model</Label>
                            <Input type="text" id="model" name="model" value={data.model} onChange={(e) => setData('model', e.target.value)} placeholder="Model" />
                            {errors.model && <div className="error">{errors.model}</div>}
                            
                            <Label htmlFor="manufacturer" className="font-extrabold">Manufacturer</Label>
                            <Input type="text" id="manufacturer" name="manufacturer" value={data.manufacturer} onChange={(e) => setData('manufacturer', e.target.value)} placeholder="eg. Manufacturer" />
                            {errors.manufacturer && <div className="error">{errors.manufacturer}</div>}
                            
                            <Label htmlFor="year" className="font-extrabold">Year</Label>
                            <Input type="number" id="year" name="year" value={data.year} onChange={(e) => setData('year', e.target.value)} placeholder="eg. Year" />
                            {errors.year && <div className="error">{errors.year}</div>}

                            <Label htmlFor="partner_id" className="font-extrabold">Partner ID</Label>
                            <Select name="partner_id" value={data.partner_id} onValueChange={handlePartnerChange}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Partner" />
                                </SelectTrigger>
                                <SelectContent>
                                    {partners.map((partner: any) => (
                                        <SelectItem key={partner.id} value={partner.id.toString()}>
                                            {partner.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.partner_id && <div className="error">{errors.partner_id}</div>}

                            
                            <Label htmlFor="type" className="font-extrabold">Type</Label>
                            <Select name="type" value={data.type} onValueChange={(value) => setData('type', value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="eg. Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Car">Car</SelectItem>
                                    <SelectItem value="Bus">Bus</SelectItem>
                                    <SelectItem value="Motorcycle">Motorcycle</SelectItem>
                                    <SelectItem value="Bicycle">Bicycle</SelectItem>
                                    <SelectItem value="Scooter">Scooter</SelectItem>
                                    <SelectItem value="HeavyEquipment">HeavyEquipment</SelectItem>
                                    <SelectItem value="Drone">Drone</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.type && <div className="error">{errors.type}</div>}

                            <Label htmlFor="status" className="font-extrabold">Status</Label>
                            <Select name="status" value={data.status} onValueChange={(value) => setData('status', value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="eg. Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Active">Active</SelectItem>
                                    <SelectItem value="Inactive">Inactive</SelectItem>
                                    <SelectItem value="Maintenance">Maintenance</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.status && <div className="error">{errors.status}</div>}
                            
                            <Label htmlFor="last_service_date" className="font-extrabold">Last Service</Label>
                            <Input type="date" id="last_service_date" name="last_service_date" value={data.last_service_date} onChange={(e) => setData('last_service_date', e.target.value)} placeholder="eg. Last Service" />
                            {errors.last_service_date && <div className="error">{errors.last_service_date}</div>}

                            <Label htmlFor="next_service_due" className="font-extrabold">Next Service</Label>
                            <Input type="date" id="next_service_due" name="next_service_due" value={data.next_service_due} onChange={(e) => setData('next_service_due', e.target.value)} placeholder="eg. Next Service" />
                            {errors.next_service_due && <div className="error">{errors.next_service_due}</div>}

                            <Label htmlFor="emission_standart" className="font-extrabold">Emission Standart</Label>
                            <Select name="emission_standart" value={data.emission_standart} onValueChange={(value) => setData('emission_standart', value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="eg. Emission Standart" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Euro 6">Euro 6</SelectItem>
                                    <SelectItem value="Zero Emission">Zero Emission</SelectItem>
                                    <SelectItem value="Custom">Custom</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.emission_standart && <div className="error">{errors.emission_standart}</div>}

                            <Label htmlFor="carbon_emissions" className="font-extrabold">Carbon Emissions</Label>
                            <Input type="number" step="0.01" id="carbon_emissions" name="carbon_emissions" value={data.carbon_emissions} onChange={(e) => setData('carbon_emissions', e.target.value)} placeholder="eg. Carbon Emission (0.00)" />
                            {errors.carbon_emissions && <div className="error">{errors.carbon_emissions}</div>}

                            <Input type="hidden" name="_token" value="halo" />

                            <Button type="submit" disabled={processing}>Tambahkan</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
