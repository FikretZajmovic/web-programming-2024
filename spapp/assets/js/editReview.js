editReview = (id) => {
  $.get("../backend/get_review.php?review_id=" + id, (data) => {
    $("#edit_review_id").val(data.review_id);
    $("#comment").val(data.comment);
    $("#user_name").val(data.user_name);
    $("#picture").val(data.picture);
    $("#profession").val(data.profession);
    console.log(data);
  });
};
