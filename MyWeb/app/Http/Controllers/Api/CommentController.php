<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use  App\Models\Comment;

class CommentController extends Controller
{
 public function index() {
    $comments = Comment::all();
    return response()->json($comments);

 }

 public function insert(Request $request){
        $comment = Comment::create($request->all());
    return $comment;
 }

 public function showCommentsByCourse($course_id)
{

    $comments = Comment::select('users.image', 'users.user_name', 'comments.rate', 'comments.comment')
        ->join('users', 'comments.id_user', '=', 'users.id')
        ->join('courses', 'comments.id_course', '=', 'courses.id')
        ->where('courses.id', $course_id)
        ->get();
    return response()->json($comments);
}

}
