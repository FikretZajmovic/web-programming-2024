<?php

require_once __DIR__ . "/rest/services/ProductService.class.php";

$payload = $_REQUEST;
$productService = new ProductService();

$data = $productService->getProducts();

echo json_encode(["data" => $data]);

?>