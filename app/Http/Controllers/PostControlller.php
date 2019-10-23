<?php

namespace App\Http\Controllers;
use App\Post;
use App\Category;
use Illuminate\Http\Request;

class PostControlller extends Controller
{
    public function getAllPost(){
    	$posts = Category::with('posts')->get();
    	return $posts;
    }
}
