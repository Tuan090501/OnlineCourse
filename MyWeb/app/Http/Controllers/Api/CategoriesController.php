<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Categories;
class CategoriesController extends Controller
{
    public function index () {
        $category = Categories::with('subcategory')->get();
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
        $categoryExist = Categories::where('category_name', $request->input('category_name'))->exists();

        if (!$categoryExist) {
           $category= Categories::create($request->all());

            return response()->json(['message'=>'Category created']);
        } else {
            return response()->json(['message'=>'Caretegory existed !']);
        }
    }

    public function update (Request $request, $id) {
        $category = Categories::find($id);
        if ($category) {
            $category->fill($request->all())->save();
            return response()->json(['message'=>'Category updated success']);
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
