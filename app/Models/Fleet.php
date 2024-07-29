<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fleet extends Model
{
    use HasFactory;

    protected $primaryKey = 'fleet_id';

    protected $fillable = [
        'fleet_id',
        'name',
    ];
}
