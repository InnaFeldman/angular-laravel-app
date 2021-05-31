<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CanvasAPI;
use Config;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Guzzle\Http\Exception\ClientErrorResponseException;
use GuzzleHttp\Exception\ServerException;
use GuzzleHttp\Exception\BadResponseException;
use App\User;

class CanvasAPIController extends Controller
{
    protected $baseURL;
    protected $clientID;
    protected $host;
    protected $clientSecret;

    public function __construct(){
        $this->clientID = Config::get('app.canvas_client_id');
        $this->clientSecret = Config::get('app.canvas_secret');
        $this->host = 'https://'.Config::get('app.canvas_host') . '/';
    }

    public function getCode(Request $request){
        //dd($request->code);
    }

    public function connectWithCode(Request $request){
        $client = new Client();
        $url = "login/oauth2/token";
        $params = '?grant_type=authorization_code'.
        '&client_id=' . $this->clientID
        .'&client_secret=' . $this->clientSecret
        .'&code=' . $request->code;

        //dd($this->host .$url .$params);
        $res = $client->request('POST', $this->host .$url .$params);

        //echo $res->getStatusCode();

        //echo $res->getHeader('content-type')[0];

        echo $res->getBody();
        dd($this->host .$url .$params);
    }
}
