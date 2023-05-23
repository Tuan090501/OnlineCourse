<?php

namespace App\Http\Controllers\Api;

use  App\Http\Controllers\Controller;
use App\Models\Users;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

use Illuminate\Http\Response;

class UsersController extends Controller
{
    /**
     * Display a listing of the user.
     */
    public function index()
    {
        $user = Users::all();
        return response()->json($user);
    }

    public function active () {
        $user = Users::where('status',1)->get();
        return response()->json($user);
    }
    
    public function unactive () {
        $user = Users::where('status',0)->get();
        return response()->json($user);
    }

    public function lecturer (){
        $user = Users::where('role',"lecturer")->get();
        return response()->json($user);
    }

    public function activeLecturer(){
        $user = Users::where('role','lecturer')->where('status',1)->get();
        return response()->json($user);
    }

    public function unactiveLecturer(){
        $user = Users::where('role','lecturer')->where('status',0)->get();
        return response()->json($user);
    }

    public function insert(Request $request)
    {
        $request->validate([

        ]);
        $username = $request->input('user_name');

        $userExists = Users::where('user_name', $username)->exists();
        if(!$userExists){
            $user = Users::create( [
                "address"=>$request->address,
                "image" => $request->image,
                "birthday" => $request->birthday,
                "email" => $request->email,
                "gender"=> $request->gender,
                "password" => bcrypt($request->input("password")),
                "phone_number" => $request->phone_number,
                "role" => $request->role,
                "status"=>  $request->status,
                "user_name"=>$request->user_name

            ] );

            return response()->json(['message' => 'User created'], 201);
        }else{
            return response()->json([
                'exists' => $userExists
            ]);
        }

    }

    public function show ($id){
        $user = Users::find($id);
        if($user){
            return response()->json($user);
        }else{
            return response()->json(['message'=> 'User not found',404]);
        }
    }

    public function update (Request $request,$id){
        $user = Users::find($id);
        if ($user) {
            $user->fill($request->all());
            $user->save();
            return response()->json(['message' => 'user updated'], 200);
        } else {
            return response()->json(['message' => 'user not found'], 404);
        }
    }

    public function resetpassword(Request $request,$id){
        $user = Users::find($id);
        $password = bcrypt($request->password);
       if ($user) {
            $user->fill([
                'password' => bcrypt($request->password)
            ]);
            $user->save();
            return response()->json(['message' => 'password updated'], 200);
       } else {
            return response()->json(['message' => 'user not found'], 404);
       }

    }

    public function delete($id)
    {
        $user = Users::find($id);
        if ($user) {
            $user->delete();
            return response()->json(['message' => 'user deleted'], 200);
        } else {
            return response()->json(['message' => 'user not found'], 404);
        }
    }

}
