<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;

class BookController extends Controller
{
    public function store(Request $request) {

        $validate = $request->validate([
            'title' => 'required|string|min:2|max:20',
            // 'price' => 'required|numeric|min:1|max:200',
            // 'author_id' => 'required|exists:authors,id',
            // 'genre_id' => 'required|exists:genres,id'
        ]);
        $book = Book::create($validate);
        return response()->json($book, 201);
    }
}
