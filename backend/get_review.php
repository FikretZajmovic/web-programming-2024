<?php

require_once __DIR__ . "/rest/services/ReviewService.class.php";

$review_id = $_REQUEST['review_id'];

$reviewService = new ReviewService();
$review = $reviewService->getReviewByID($review_id);

header('Content-Type: application/json');
echo json_encode($review);

?>