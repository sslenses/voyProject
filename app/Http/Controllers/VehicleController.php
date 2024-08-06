<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VehicleController extends Controller
{
    public function index()
    {

        // Mengambil data dari table vehicle
        $vehicles = Vehicle::all();

        // Mengirim data table ke view
        return Inertia::render('Vehicle/Page',
        ['vehicles' => $vehicles]);
    }

    public function create()
    {
        $vehicles = Vehicle::all();
        return Inertia::render('Vehicle/Partials/InputVehicle',[
            'vehicles' => $vehicles,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'eksternal_id' => 'required|string',
            'license_plate' => 'required|string',
            'model' => 'required|string',
            'manufacturer' => 'required|string',
            'year' => 'required|integer',
            'type' => 'required|string',
            'status' => 'required|string',
            'last_service_date' => 'nullable|date',
            'next_service_due' => 'nullable|date',
            'emission_standart' => 'required|string',
            'carbon_emissions' => 'nullable|numeric',
            'partner_id' => 'required|integer',
        ]);
    
        // Save to the database
        Vehicle::create($validated);
    
        return redirect()->route('vehicles.create')->with('success', 'Vehicle added successfully!');
    }
    
}
