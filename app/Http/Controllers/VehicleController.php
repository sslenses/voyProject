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
        return Inertia::render('Vehicle/Partials/ViewVehiclesTable', 
        ['vehicles' => $vehicles]);
    }
}
