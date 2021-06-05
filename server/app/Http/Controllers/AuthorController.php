<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Author;

class AuthorController extends Controller
{
    public function index(){
        $autors = Author::get();
        return response()->json($autors);
    }

    public function store(Request $request) {

        // $validate = $request->validate([
        //     'name' => 'required|string|min:2|max:20',
        //     'email' => 'email:rfc,dns',
        //     'fame' => 'required|string',
        // ]);

        // $autor = Author::create($validate);
        // return response()->json($autor, 201);

        $autor = Author::create(
            $request->all()
        );
        return response()->json($autor, 200);
    }

    public static function update(Request $request, $id){

    }


    public static function delete($id){
        $autor = Author::findOrFail($id);
        if($autor){
            $autor->delete();
            return response()->json($autor, 200);
        }
    }

}
