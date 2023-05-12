<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $table = 'courses';
    protected $fillable = ['title', 'price', 'discount','status','description','video'];

    public function sessionsWithLectures(){
        return $this->hasMany(Session::class)->with('lectures');
    }

}
