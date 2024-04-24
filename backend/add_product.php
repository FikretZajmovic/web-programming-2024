<?php

require_once __DIR__ . "/rest/services/ProductService.class.php";

$payload = $_REQUEST;

$productService = new ProductService();

if($payload['product_id'] != NULL && $payload['product_id'] != '') {
    $product = $productService->editProduct($payload);
}

else {
    unset($payload['product_id']);
    $product = $productService->addProduct($payload);
}

echo json_encode(["message" => $user]);

?>