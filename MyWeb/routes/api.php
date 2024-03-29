<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\JWTAuthController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\CategoriesController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//User controller
Route::prefix('users')->group(function () {
    Route::get('/',[ UsersController::class,'index']);
    Route::get('/active',[ UsersController::class,'active']);
    Route::get('/unactive',[ UsersController::class,'unactive']);
    Route::get('/lecturer',[UsersController::class,'lecturer']);
    Route::get('/active/lecturer',[UsersController::class,'activeLecturer']);
    Route::get('/unactive/lecturer',[UsersController::class,'unactiveLecturer']);
    Route::get('/{email}/{facebook_id}',[UsersController::class,'showSocialFacebook']);

    Route::post('/registerSocial',[UsersController::class,'registerSocial']);
    Route::post('/',[UsersController::class,'insert']);
    Route::get('/{id}',[UsersController::class,'show']);
    Route::put('/{id}',[UsersController::class,'update']);
    Route::delete('/{id}', [UsersController::class, 'delete']);
    Route::put('/reset-password/{id}', [UsersController::class, 'resetpassword']);

});

//Send OTP
Route::post('send-otp',[OtpController::class, 'index']);

//Authentication user
Route::controller(JWTAuthController::class)->group(function(){
    Route::post('register','register');
    Route::post('login','login');

});
Route::post('/logout', [JWTAuthController::class,'logout']
    );


//Route course
Route::prefix('course')->group(function (){
    Route::get('/',[CourseController::class,'index']);
    Route::get('/active',[CourseController::class,'active']);
    Route::get('/unactive',[CourseController::class,'unactive']);
    Route::get('/showStudent/{id_course}',[CourseController::class,'showStudent']);

    Route::get('/purchased/{user_id}',[CourseController::class,'showPurchasedCourses']);
    Route::post('/',[CourseController::class,'insert']);


    Route::get('/rating', [CourseController::class, 'rate']);

    Route::get('/{id}',[CourseController::class,'show']);
    Route::put('/{id}',[CourseController::class,'update']);
    Route::delete('/{id}', [CourseController::class, 'delete']);

});

//Route category
Route::prefix('categories')->group(function () {
    Route::get('/',[CategoriesController::class,'index']);
    Route::post('/',[CategoriesController::class,'insert']);
    Route::put('/{id}',[CategoriesController::class,'update']);
    Route::delete('/{id}',[CategoriesController::class,'delete']);
});

//Route subCategory
Route::prefix('sub-categories')->group(function () {
    Route::get('/',[SubCategoriesController::class,'index']);
    Route::post('/',[SubCategoriesController::class,'insert']);
    Route::put('/{id}',[SubCategoriesController::class,'update']);
    Route::delete('/{id}',[SubCategoriesController::class,'delete']);
});


//Route session
Route::prefix('session')->group(function () {
    Route::get('/',[SessionController::class,'index']);
    Route::post('/',[SessionController::class,'insert']);
});

//Route lecture

Route::prefix('lecture')->group(function () {
    Route::get('/',[LectureController::class,'index']);
    Route::get('/{id}',[LectureController::class,'course']);
    Route::post('/',[LectureController::class,'insert']);

});

Route::prefix('orders')->group(function () {
    Route::get('/',[OrderController::class,'index']);
    Route::get('/courses/{user_id}/purchased/{course_id}', [OrderController::class, 'checkCoursePurchase']);
     Route::get('/{id}',[OrderController::class,'show']);
     Route::post('/',[OrderController::class,'insert']);
Route::get('/{id}',[LectureController::class,'getLectureWithSessionID']);
});

Route::prefix('comment')->group(function () {
    Route::get('/',[CommentController::class,'index']);

     Route::get('/{course_id}',[CommentController::class,'showCommentsByCourse']);
     Route::post('/',[CommentController::class,'insert']);
});


Route::prefix('categories')->group(function () {
    Route::get('/',[CategoriesController::class,'index']);
    Route::post('/',[CategoriesController::class,'insert']);
});

