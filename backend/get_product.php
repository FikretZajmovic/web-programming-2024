<?php

require_once __DIR__ . "/rest/services/ProductService.class.php";

$product_id = $_REQUEST['product_id'];

$productService = new ProductService();
$product = $productService->getProductByID($product_id);

header('Content-Type: application/json');
echo json_encode($product);

?>