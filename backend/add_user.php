<?php

require_once __DIR__ . "/rest/services/UserService.class.php";

$payload = $_REQUEST;

$userService = new UserService();

unset($payload['confirmpassword']);

if($payload['user_id'] != NULL && $payload['user_id'] != '') {
    $user = $userService->editUser($payload);
}

else {
    unset($payload['user_id']);
    $user = $userService->addUser($payload);
}

echo json_encode(["message" => $user]);

?>