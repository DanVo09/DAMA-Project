<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Course;
use App\Models\User;
use App\Http\Controllers\UserController;
use App\Http\Controllers\membershipController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:api')->get('/user', function (Request $request){
    return $request->user();
});

Route::post('register', function(Request $req){
        $user = new User;
        $user->first_name= $req->input('first_name');
        $user->last_name= $req->input('last_name');
        $user->email= $req->input('email');
        $user->password= Hash::make($req->input('password'));
        $user->save();
        return $user;

});

Route::post('log-in', function(Request $req){
    $user = User::where('email', $req->email)->first();
        if (!$user || !Hash::check($req->password,$user->password)){
            return null;
        }
        return $user;
});

Route::get('/course', function () {
    return course::all();
});



Route::get('/', function () {
    return view('welcome');
});

Route::get('/signin', function () {
    return view('signin');
});

Route::get('/signup', function () {
    return view('signup');
});


Route::get('/event_list', function () {
    return course::all();
});
Route::get('/event-register', function () {
    return view('event-register');
});
Route::get('/session-test', function () {
    return view('session-test');
});

Route::get('/my-events', function () {
    return view('my-events');
});



Route::post('/session-test', 'App\Http\Controllers\SessionTestController@store');
Route::get('/signed-out', 'App\Http\Controllers\LogoutController@logout');

// New Login Routes

Route::post('/login', 'App\Http\Controllers\LoginController@postLogin');

Route::post('/signedin', 'App\Http\Controllers\membershipController@store');

// Event Routes
Route::post('/events', 'App\Http\Controllers\EventController@insert');
Route::get('/edit-event','App\Http\Controllers\EventController@update');
Route::post('/event-updated','App\Http\Controllers\EventController@insertUpdate');
Route::get('/delete-event','App\Http\Controllers\EventController@delete');

// Insert a Course
Route::get('/insert-course','App\Http\Controllers\InsertCourseController@index');
Route::post('/course_inserted','App\Http\Controllers\InsertCourseController@insert');

// Course Sign Up
Route::get('/course-form','App\Http\Controllers\CourseController@show');
Route::post('/courses','App\Http\Controllers\CourseController@insert');
Route::get('/ct-dashboard','App\Http\Controllers\DashBoardNController@dashb');

// Job Postings
Route::get('/insert-a-job','App\Http\Controllers\JobPostingsController@index');
Route::post('/job_inserted','App\Http\Controllers\JobPostingsController@insert');
Route::get('/job-filled','App\Http\Controllers\JobPostingsController@delete');
Route::get('/edit-job','App\Http\Controllers\JobPostingsController@update');
Route::post('/job_updated','App\Http\Controllers\JobPostingsController@insertUpdate');
Route::get('/view_app','App\Http\Controllers\JobPostingsController@viewApps');
Route::get('/indiv_app','App\Http\Controllers\JobPostingsController@viewIndiv');

// Route for Mailing
Route::post('/send_email', 'App\Http\Controllers\ViewJobsController@mail');

// View Job Postings
Route::get('/view-jobs','App\Http\Controllers\ViewJobsController@index');
Route::get('/job_applied','App\Http\Controllers\ViewJobsController@apply');
Route::get('/interested','App\Http\Controllers\interestedController@save');
Route::get('/not-interested','App\Http\Controllers\interestedController@delete');
Route::post('/submit-app','App\Http\Controllers\ViewJobsController@submit');

//Forgot Password
Route::get('/forget-password', 'App\Http\Controllers\ForgotPasswordController@showForgetPasswordForm');
Route::post('/forget-password','App\Http\Controllers\ForgotPasswordController@submitForgetPasswordForm');
Route::get('/resetPassword/{token}','App\Http\Controllers\ForgotPasswordController@showResetPasswordForm');
Route::post('/resetPassword','App\Http\Controllers\ForgotPasswordController@submitResetPasswordForm');

