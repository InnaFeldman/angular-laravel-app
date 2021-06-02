<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Book;
use App\Author;
use App\Genre;

class BookController extends Controller
{

    public function index(Request $request) {
        //Using SQL:
        // $books = DB::select('select * from books JOIN authors ON books.author_id = authors.id JOIN genres ON genres.id = books.genre_id');

        //Using Query Builder:
        // $books = DB::table('books')
        // ->join('authors', 'authors.id', '=', 'books.author_id')
        // ->join('genres', 'genres.id', '=', 'books.genre_id' )
        // ->select('books.id','books.title', 'authors.name as author', 'books.price', 'genres.name as genre')
        // ->get();

        //Using Eloquent:
        $books = Book::with(['author', 'genre'])->get();


        return response()->json($books);
    }

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
