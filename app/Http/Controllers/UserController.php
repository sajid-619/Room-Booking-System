<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\UserRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RoomRequest;
use App\Models\User;
use App\Models\Room;
use Carbon\Carbon;

class UserController extends Controller
{
	public function index()
	{
		$this->destroy();

		return view('welcome');
	}

    public function store(UserRequest $request)
    {
    	$data = [ 
			'name' => $request->name, 
			'email' => $request->email,
			'password' => Hash::make($request->password),
		];

		User::create($data);

		return 'Your account has been successfully created.';
    }

    public function login(LoginRequest $request)
    {
    	$credentials = [
			'email' => $request->email,
			'password' => $request->password
		];

		if (Auth::attempt($credentials)) {
			$request->session()->regenerate();

			return Auth::user();
		}
		
		return 'The provided credentials do not match our records.';
    }

    public function saveRoom(RoomRequest $request)
    {
    	$this->destroy();

    	$data = [ 
			'user_id' => Auth::id(), 
			'room_number' => $request->room_number, 
			'room_name' => $request->room_name, 
			'room_type' => $request->room_type, 
			'room_qty' => $request->room_qty, 
			'start_date' => $request->start_date,
			'end_date' => $request->end_date
		];

		Room::create($data);

		return 'Room has been successfully booked.';
    }

    private function destroy()
    {
    	$today = Carbon::now()->format('Y-m-d');
    	$deleteQuery = Room::where('end_date', $today);

    	return $deleteQuery->delete();
    }
}