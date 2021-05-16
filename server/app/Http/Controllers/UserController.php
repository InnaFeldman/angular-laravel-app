<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public static function index(Request $request){
        return response()->json(User::get());
    }

    public static function store(Request $request){
        $user = User::create(
            $request->all()
        );
        return response()->json($user, 200);
    }

    public static function update(Request $request, $id){
        $user = User::findOrFail($id);

        $user->update(
            $request->all()
        );
        $user->save;
        return response()->json($user, 200);
    }

    public static function delete($id){
        $user = User::findOrFail($id);
        $user->delete();
        return response()->json($user, 200);
    }
}
