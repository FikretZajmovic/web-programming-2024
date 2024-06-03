editReview = (id) => {
  $.ajax({
    type: "GET",
    url: "https://goldfish-app-l87ee.ondigitalocean.app/backend/reviews/" + id,
    beforeSend: function (xhr) {
      if (Utils.get_from_localstorage("user")) {
        xhr.setRequestHeader(
          "Authentication",
          Utils.get_from_localstorage("user").token
        );
      }
    },
    success: function (data) {
      $("#edit_review_id").val(data.review_id);
      $("#comment").val(data.comment);
      $("#user_name").val(data.user_name);
      $("#picture").val(data.picture);
      $("#profession").val(data.profession);
      console.log(data);
    },
    error: function (request, status, error) {
      console.error("Error:", error);
    },
  });
};
