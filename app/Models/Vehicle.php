<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $fillable = [
        'vehicle_id',
        'eksternal_id',
        'license_plate',
        'model',
        'manufacturer',
        'year',
        'type',
        'has_gps',
        'has_iot',
        'last_service_date',
        'next_service_due',
        'partner_id',
        'emission_standart',
        'carbon_emissions',
    ]
}
