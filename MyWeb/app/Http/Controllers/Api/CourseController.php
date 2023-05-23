<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\DB;
class CourseController extends Controller
{
    use HasFactory;

    public function index(){
        $course = Course::with(['lecturer:id,user_name','category:id,category_name','sessionsWithLectures'])->get();
        return response()->json($course);
    }

    public function active () {
        $course = Course::with(['lecturer:id,user_name','category:id,category_name','sessionsWithLectures'])->where('status',1)->get();
        return response()->json($course);
    }
    
    public function unactive () {
        $course = Course::with(['lecturer:id,user_name','category:id,category_name','sessionsWithLectures'])->where('status',0)->get();
        return response()->json($course);
    }


    public function insert(Request $request)
    {

            $course = Course::create($request->all());
            if($course) {
                return response()->json(['message' => 'course created'], 201);

            } else {
                return response()->json(['message'=>'insert course false',404]);
            }

    }

    public function show ($id){
        $course = Course::with(['lecturer:id,user_name','category:id,category_name','sessionsWithLectures'])->find($id);
        if($course) {
            return response()->json($course);
        } else {
            return response()->json(['message'=>'course not exist']);
        }

    }

   

    public function update (Request $request, $id){
        $course = Course::find($id);

        if($course){
            $course->fill($request->all())->save();
            return response()->json(['message'=>'Course updated ']);

        } else {
            return response()->json(['message'=>'Course not exist']);
        }

    }

}
