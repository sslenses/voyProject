<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id('vehicle_id')->unique();
            $table->string('eksternal_id')->unique();
            $table->string('license_plate')->unique();
            $table->string('model');
            $table->string('manufacturer');
            $table->integer('year');
            $table->enum('type',['Car','Bus','Motorcycle','Bicycle','Scooter','HeavyEquipment','Drone']);
            $table->boolean('has_gps')->default(false);
            $table->boolean('has_iot')->default(false);
            $table->date('last_service_date');
            $table->date('next_service_due');
            $table->integer('partner_id');
            $table->enum('emission_standart',['Euro 6','Zero Emission','Custom'])->default('Zero Emission');
            $table->decimal('carbon_emissions',10,2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicles');
    }
};
