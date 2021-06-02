<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use App\Author;
use App\Genre;

class Book extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ['title', 'price', 'author_id', 'genre_id'];

    public function author(){
        return $this->belongsTo('App\Author');
    }

    public function genre(){
        return $this->belongsTo('App\Genre');
    }

    public static function getBooks(){
        // $query = DB::table('books')
        // ->select('title', 'price')
        // ->where('price', '>', '50')
        // ->orderBy('id', 'desc')
        // ->get();

        return $query;
    }

    public function scopeGetBookByAuthor($query, $id){
        $query->where('author_id', $id);
    }

    public function scopeGetBookByGenre($query, $name){
        $query->where('genre_name', $name);
    }
}
