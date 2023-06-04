<?php

namespace App\Http\Controllers\Api;

use App\Models\Subcategories;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SubCategoriesController extends Controller
{
    public function index(){
        $sub = Subcategories::all();
        return response()->json($sub);  
    }

    public function insert (Request $request) {
        $sub = Subcategories::create($request->all());
        if ($sub) {
            return response()->json(['message' => 'SubCategory created'], 201);
        } else {
            return response()->json(['message' => 'SubCategory create false'], 404);
        }
    }

    public function update (Request $request,$id){
        $sub = Subcategories::find($id);
        if ($sub) {
            $sub->fill($request->all())->save();
            return response()->json(['message'=>'SubCategory updated success']);
        } else {
            return response()->json(['message'=>'SubCategory not exist']);
        }
    }

    public function delete ($id) {
        $sub = Subcategories::find($id);
        if ($sub) {
            $sub->delete();
            return response()->json(['message' => 'SUbCategory deleted'], 200);
        } else {
            return response()->json(['message' => 'SUbCategory not found']);
        }
    }
}
