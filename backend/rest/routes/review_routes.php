<?php

require_once __DIR__ . '/../services/ReviewService.class.php';

Flight::set('reviewService', new ReviewService());

Flight::group('/reviews', function(){

    /**
     * @OA\Get(
     *      path="/reviews",
     *      tags={"reviews"},
     *      summary="Get all reviews",
     *      @OA\Response(
     *           response=200,
     *           description="Get all reviews"
     *      )
     * )
     */
Flight::route('GET /', function(){
    $data = Flight::get('reviewService')->getReviews();

    Flight::json(["data" => $data]);
});

/**
     * @OA\Get(
     *      path="/reviews/review",
     *      tags={"reviews"},
     *      summary="Get review by id",
     *      @OA\Response(
     *           response=200,
     *           description="Review data, or false if review doesn't exist"
     *      ),
     *      @OA\Parameter(@OA\Schema(type="number"), in="query", name="review_id", example="1", description="Review ID")
     * )
     */
    Flight::route('GET /review', function(){
        $params = Flight::request()->query;
        $review = Flight::get('reviewService')->getReviewByID($params['review_id']);
        Flight::json($review);
    });

/**
     * @OA\Post(
     *      path="/reviews/add",
     *      tags={"reviews"},
     *      summary="Add review data to the database",
     *      @OA\Response(
     *           response=200,
     *           description="Review data, or exception if review is not added properly"
     *      ),
     *      @OA\RequestBody(
     *          description="Review data payload",
     *          @OA\JsonContent(
     *              required={"user_name","message"},
     *              @OA\Property(property="review_id", type="integer", example="1", description="Review ID"),
     *              @OA\Property(property="user_name", type="string", example="Some user name", description="Username"),
     *              @OA\Property(property="comment", type="string", example="Some comment", description="comment"),
     *              @OA\Property(property="profession", type="string", example="Some profession", description="Profession"),
     *              @OA\Property(property="picture", type="string", example="/web-programming-project/spapp/assets/img/review.jpg", description="Picture")
     *          )
     *      )
     * )
     */
Flight::route('POST /add', function(){
    $payload = Flight::request()->data->getData();


    if($payload['review_id'] != NULL && $payload['review_id'] != '') {
        $review = Flight::get('reviewService')->editReview($payload);
    }

    else {
        unset($payload['review_id']);
        $review = Flight::get('reviewService')->addReview($payload);
    }

    Flight::json(["message" => $review]);
});

/**
     * @OA\Delete(
     *      path="/reviews/delete/{review_id}",
     *      tags={"reviews"},
     *      summary="Delete review by id",
     *      @OA\Response(
     *           response=200,
     *           description="Deleted review data or 500 status code exception otherwise"
     *      ),
     *      @OA\Parameter(@OA\Schema(type="number"), in="path", name="review_id", example="1", description="Review ID")
     * )
     */
Flight::route('DELETE /delete/@review_id', function($review_id){
    if($review_id == NULL || $review_id == '') {
        Flight::halt(500, "You have to provide valid review id!");
    }

    Flight::get('reviewService')->deleteReview($review_id);

    Flight::json(['message' => "You have succesfully deleted the position!"]);
});

/**
     * @OA\Get(
     *      path="/reviews/{review_id}",
     *      tags={"reviews"},
     *      summary="Get review by id",
     *      @OA\Response(
     *           response=200,
     *           description="Review data, or false if review does not exist"
     *      ),
     *      @OA\Parameter(@OA\Schema(type="number"), in="path", name="review_id", example="1", description="Review ID")
     * )
     */
Flight::route('GET /@review_id', function($review_id){
    $review = Flight::get('reviewService')->getReviewByID($review_id);

    Flight::json($review, 200);
});

});