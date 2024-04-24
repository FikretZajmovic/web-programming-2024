<?php

require_once __DIR__ . "/rest/services/ReviewService.class.php";

$payload = $_REQUEST;
$reviewService = new ReviewService();

$data = $reviewService->getReviews();

echo json_encode(["data" => $data]);

?>