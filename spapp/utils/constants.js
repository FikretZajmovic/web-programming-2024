var Constants = {
  get_api_base_url: function () {
    if (location.hostname == "localhost") {
      return "http://localhost/web-programming-project/backend/";
    } else {
      return "https://goldfish-app-l87ee.ondigitalocean.app/backend/";
    }
  },
};
