<?php

require_once __DIR__ . "/rest/services/ProductService.class.php";

$product_id = $_REQUEST['product_id'];
if($product_id == NULL || $product_id == '') {
    header('HTTP/1.1 500 Bad Request');
    die(json_encode(['error' => "Provide a valid position ID!"]));
}

$productService = new ProductService();
$productService->deleteProduct($product_id);

echo json_encode(['message' => "You have succesfully deleted the position!"]);
?>