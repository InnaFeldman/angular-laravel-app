<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CanvasAPI;
use Config;

class CanvasAPIController extends Controller
{
    protected $baseURL;
    protected $clientID;
    protected $host;
    protected $clientSecret;

    public function __construct(){
        $this->clientID = Config::get('app.canvas_client_id');
        $this->clientSecret = Config::get('app.canvas_secret');
        $this->host = Config::get('app.canvas_host');
    }

    public static function getCode(Request $request){
        dd($request->code);
    }
}
