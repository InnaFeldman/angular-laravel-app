<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employee;

class EmployeeController extends Controller
{
    public static function index(Request $request){
        return response()->json(Employee::get());
    }

    public static function store(Request $request){

    }

    public static function update(Request $request, $id){

    }

    public static function delete(Request $request, $id){

    }
}
