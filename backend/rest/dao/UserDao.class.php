<?php

require_once __DIR__ . "/BaseDao.class.php";

class UserDao extends BaseDao {
    public function __construct() {
        parent::__construct("user");
    }

    public function addUser($user) {
        $this->insert("user", $user);
    }

    public function getUsers() {
        $query = "SELECT * 
        FROM user";

        return $this->query($query, []);
    }

    public function getUserByID($user_id) {
        $query = "SELECT * 
        FROM user
        WHERE user_id = :user_id";

        return $this->query_unique($query, [
            "user_id" => $user_id
        ]);
    }

    public function deleteUser($user_id) {
        $query = "DELETE FROM user WHERE user_id = :user_id";
        $this->execute($query, [
            'user_id' => $user_id
        ]);
    }

    public function editUser($user_id, $user) {
        $query = "UPDATE user SET first_name = :first_name, last_name = :last_name, phone_number = :phone_number, email = :email, password = :password WHERE user_id = :user_id";

        $this->execute($query, [
            'user_id' => $user_id,
            'first_name' => $user['first_name'],
            'last_name' => $user['last_name'],
            'phone_number' => $user['phone_number'],
            'email' => $user['email'],
            'password' => $user['password']
        ]);
    }
}

?>