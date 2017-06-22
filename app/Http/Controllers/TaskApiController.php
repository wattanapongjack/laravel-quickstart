<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
use Log;
use Auth;

class TaskApiController extends Controller
{
    public function index(){
        $id = Auth::id();
        $tasks = Task::where('user_id',$id)->get();
        
        return response()->json([
            'tasks' => $tasks
        ]);
    }

    public function store(Request $request){
        $this->validate($request, [
        	'name' => 'required|max:255',
    	]);

    	$task = $request->user()->tasks()->create([
        	'name' => $request->name,
    	]);

        return response()->json([
            'tasks' => $task
        ]);
    }

    public function destroy(Request $request, Task $task)
    {
        $this->authorize('destroy', $task);
        $task->delete();
        
        return response()->json([
            'tasks' => $task
        ]);
    }
}
