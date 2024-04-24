<?php

require_once __DIR__ . "/BaseDao.class.php";

class ReviewDao extends BaseDao {
    public function __construct() {
        parent::__construct("review");
    }

    public function addReview($review) {
        $this->insert("review", $review);
    }

    public function getReviews() {
        $query = "SELECT * 
        FROM review";

        return $this->query($query, []);
    }

    public function getReviewByID($review_id) {
        $query = "SELECT * 
        FROM review
        WHERE review_id = :review_id";

        return $this->query_unique($query, [
            "review_id" => $review_id
        ]);
    }

    public function deleteReview($review_id) {
        $query = "DELETE FROM review WHERE review_id = :review_id";
        $this->execute($query, [
            'review_id' => $review_id
        ]);
    }

    public function editReview($review_id, $review) {
        $query = "UPDATE review SET user_name = :user_name, profession = :profession, comment = :comment, picture = :picture WHERE review_id = :review_id";

        $this->execute($query, [
            'review_id' => $review_id,
            'user_name' => $review['user_name'],
            'profession' => $review['profession'],
            'comment' => $review['comment'],
            'picture' => $review['picture']
        ]);
    }
}

?>