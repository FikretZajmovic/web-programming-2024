<?php

require_once __DIR__ . '/../services/UserService.class.php';

Flight::set('userService', new UserService());

Flight::group('/users', function(){

    /**
     * @OA\Get(
     *      path="/users/info",
     *      tags={"users"},
     *      summary="Get user details",
     *      security={
     *          {"ApiKey": {}}   
     *      },
     *      @OA\Response(
     *           response=200,
     *           description="User details"
     *      )
     * )
     */
    Flight::route('GET /info', function() {
        Flight::json(Flight::get('userService')->getUserByID(Flight::get('user')->user_id));
    });

    /**
     * @OA\Get(
     *      path="/users",
     *      tags={"users"},
     *      summary="Get all users",
     *      security={
     *          {"ApiKey": {}}
     *      },
     *      @OA\Response(
     *           response=200,
     *           description="Get all users"
     *      )
     * )
     */
Flight::route('GET /', function(){
    $data = Flight::get('userService')->getUsers();

    Flight::json(["data" => $data]);
});

/**
     * @OA\Get(
     *      path="/users/user",
     *      tags={"users"},
     *      summary="Get user by id",
     *      security={
     *          {"ApiKey": {}}
     *      },
     *      @OA\Response(
     *           response=200,
     *           description="User data, or false if user doesn't exist"
     *      ),
     *      @OA\Parameter(@OA\Schema(type="number"), in="query", name="user_id", example="1", description="User ID")
     * )
     */
    Flight::route('GET /user', function(){
        $params = Flight::request()->query;
        $user = Flight::get('userService')->getUserByID($params['user_id']);
        Flight::json($user);
    });

    /**
     * @OA\Post(
     *      path="/users/add",
     *      tags={"users"},
     *      summary="Add user data to the database",
     *      @OA\Response(
     *           response=200,
     *           description="User data, or exception if user is not added properly"
     *      ),
     *      @OA\RequestBody(
     *          description="User data payload",
     *          @OA\JsonContent(
     *              required={"first_name","last_name", "email", "password", "phone_number"},
     *              @OA\Property(property="user_id", type="integer", example="1", description="User ID"),
     *              @OA\Property(property="first_name", type="string", example="Some first name", description="First name"),
     *              @OA\Property(property="last_name", type="string", example="Some last name", description="Last name"),
     *              @OA\Property(property="email", type="string", example="example@gmail.com", description="Email"),
     *              @OA\Property(property="password", type="string", example="Some private password", description="Password"),
     *              @OA\Property(property="phone_number", type="string", example="123456789", description="Phone number")
     *          )
     *      )
     * )
     */
Flight::route('POST /add', function(){
    $payload = Flight::request()->data->getData();
    unset($payload['confirmpassword']);

    if(array_key_exists('user_id', $payload) && $payload['user_id'] != NULL && $payload['id'] != '') {
        $user = Flight::get('userService')->editUser($payload);
    }

    else {
        unset($payload['user_id']);
        $user = Flight::get('userService')->addUser($payload);
    }

    Flight::json(['message' => "You have successfully added the user", 'data' => $user]);
});

/**
     * @OA\Delete(
     *      path="/users/delete/{user_id}",
     *      tags={"users"},
     *      summary="Delete user by id",
     *      @OA\Response(
     *           response=200,
     *           description="Deleted user data or 500 status code exception otherwise"
     *      ),
     *      @OA\Parameter(@OA\Schema(type="number"), in="path", name="user_id", example="1", description="User ID")
     * )
     */
Flight::route('DELETE /delete/@user_id', function($user_id){
    if($user_id == NULL || $user_id == '') {
        Flight::halt(500, "You have to provide valid user id!");
    }

    Flight::get('userService')->deleteUser($user_id);

    Flight::json(['message' => "You have succesfully deleted the position!"]);
});

/**
     * @OA\Get(
     *      path="/users/{user_id}",
     *      tags={"users"},
     *      summary="Get user by id",
     *      @OA\Response(
     *           response=200,
     *           description="User data, or false if user does not exist"
     *      ),
     *      @OA\Parameter(@OA\Schema(type="number"), in="path", name="user_id", example="1", description="User ID")
     * )
     */
Flight::route('GET /@user_id', function($user_id){
    $user = Flight::get('userService')->getUserByID($user_id);

    Flight::json($user, 200);
});

});