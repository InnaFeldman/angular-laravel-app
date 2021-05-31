<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
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
}
