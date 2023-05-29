<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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
    public function getLectureWithSessionID ($id){
        $lecture = Lecture::where('session_id',$id)->get();
        if ($lecture) {
            return  response()->json($lecture);
        } else {
            return  response()->json(['message'=>'Insert lecture fail']);
        }
    }
}
