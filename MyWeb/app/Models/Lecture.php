<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lecture extends Model
{
    use HasFactory;
    protected $table = 'lectures';
    protected $fillable = ['title','id_session','video'];

    const UPDATED_AT = NULL;
    const CREATED_AT = NULL;
}
