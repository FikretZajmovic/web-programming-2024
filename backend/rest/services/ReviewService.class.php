<?php

require_once __DIR__ . "/../dao/ReviewDao.class.php";

class ReviewService {
    private $reviewDao;

    public function __construct() {
        $this->reviewDao = new ReviewDao();
    }

    public function addReview($review) {
        return $this->reviewDao->addReview($review);
    }

    public function getReviews() {
        $data = $this->reviewDao->getReviews();
        return ["data" => $data];
    }

    public function getReviewByID($review_id) {
        return $this->reviewDao->getReviewByID($review_id);
    }

    public function deleteReview($review_id) {
        $this->reviewDao->deleteReview($review_id);
    }

    public function editReview($review) {
        $review_id = $review['review_id'];
        unset($review['review_id']);

        $this->reviewDao->editReview($review_id, $review);
    }
}

?>