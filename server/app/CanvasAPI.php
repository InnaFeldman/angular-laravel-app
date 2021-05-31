<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CanvasAPI extends Model
{
    protected $fillable = [
        'id', 'access_token', 'refresh_token', 'expires_in', 'default'
    ];
}
