const Utils = {
  get_from_localstorage: function (key) {
    return window.localStorage.getItem(key);
  },
  set_to_localstorage: function (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  logout: function () {
    localStorage.clear();
    location.reload();
  },
};
