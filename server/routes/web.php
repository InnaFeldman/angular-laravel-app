<?php

use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/tests', function () {
    DB::table('users')->insert([
        'name' => Str::random(10),
        'email' => Str::random(10).'@gmail.com',
        'password' => Hash::make('password'),
    ]);

    dd(\Config::get('app.canvas_client_id'));
});
