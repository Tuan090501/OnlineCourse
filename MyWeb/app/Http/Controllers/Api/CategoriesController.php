<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Categories;
class CategoriesController extends Controller
{
    public function index () {
        $category = Categories::all();
        return response()->json($category);
    }

    public function show($id) {
        $category = Categories::find($id);

        if ($category) {
            return response()->json($category);
        } else {
            return response()->json(['message'=> 'Category not found']);
        }
    }

    public function insert (Request $request) {
        $category = Categories::create($request->all());
        if ($category) {
            return response()->json(['message'=>'Category created']);
        } else {
            return response()->json(['message'=>'Insert category fail']);
        }
    }

    public function update (Request $request, $id) {
        $category = Categories::find($id);
        if ($category) {
            $category->fill($request->all())->save();
        } else {
            return response()->json(['message'=>'category not exist']);
        }
    }

    public function delete ($id) {
        $category = Categories::find($id);
        if ($category) {
            $category->delete();
            return response()->json(['message' => 'category deleted'], 200);
        } else {
            return response()->json(['message' => 'category not found']);
        }
    }
}
