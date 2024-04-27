<?php

require_once __DIR__ . "/rest/services/ReviewService.class.php";

$review_id = $_REQUEST['review_id'];
if($review_id == NULL || $review_id == '') {
    header('HTTP/1.1 500 Bad Request');
    die(json_encode(['error' => "Provide a valid position ID!"]));
}

$reviewService = new ReviewService();
$reviewService->deleteReview($review_id);

echo json_encode(['message' => "You have succesfully deleted the position!"]);
?>