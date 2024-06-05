const Utils = {
  get_from_localstorage: function (key) {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  set_to_localstorage: function (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  logout: function () {
    localStorage.clear();
    location.reload();
  },
};
