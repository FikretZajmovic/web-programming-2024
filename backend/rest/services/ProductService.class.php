<?php

require_once __DIR__ . "/../dao/ProductDao.class.php";

class ProductService {
    private $productDao;

    public function __construct() {
        $this->productDao = new ProductDao();
    }

    public function addProduct($product) {
        return $this->productDao->addProduct($product);
    }

    public function getProducts() {
        $data = $this->productDao->getProducts();
        return ["data" => $data];
    }

    public function getProductById($product_id) {
        return $this->productDao->getProductById($product_id);
    }

    public function deleteProduct($product_id) {
        $this->productDao->deleteProduct($product_id);
    }

    public function editProduct($product) {
        $product_id = $product['product_id'];
        unset($product['product_id']);

        $this->productDao->editProduct($product_id, $product);
    }
}

?>