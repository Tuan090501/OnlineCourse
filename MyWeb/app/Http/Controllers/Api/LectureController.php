<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
<<<<<<< HEAD
use App\Models\Lecture;

class LectureController extends Controller
{
    public function index () {
        return  Lecture::all();
    }
    public function insert (Request $request) {
        $lecture = Lecture::create($request->all());
        if ($lecture) {
            return  response()->json(['message'=>'Insert lecture successfull']);
        } else {
            return  response()->json(['message'=>'Insert lecture fail']);
        }
    }
}
=======

class LectureController extends Controller
{
    //
}
>>>>>>> 8882ad7271c1e5ed411890d9f6d6662cbeb649a8
