<?php

require_once __DIR__ . "/rest/services/ReviewService.class.php";

$payload = $_REQUEST;

$reviewService = new ReviewService();

if($payload['review_id'] != NULL && $payload['review_id'] != '') {
    $review = $reviewService->editReview($payload);
}

else {
    unset($payload['review_id']);
    $review = $reviewService->addReview($payload);
}

echo json_encode(["message" => $review]);

?>