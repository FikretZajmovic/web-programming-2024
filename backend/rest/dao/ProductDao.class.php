<?php

require_once __DIR__ . "/BaseDao.class.php";

class ProductDao extends BaseDao {
    public function __construct() {
        parent::__construct("product");
    }

    public function addProduct($product) {
        $this->insert("product", $product);
    }

    public function getProducts() {
        $query = "SELECT * 
        FROM product";

        return $this->query($query, []);
    }

    public function getProductById($product_id) {
        $query = "SELECT * 
        FROM product
        WHERE product_id = :product_id";

        return $this->query_unique($query, [
            "product_id" => $product_id
        ]);
    }

    public function deleteProduct($product_id) {
        $query = "DELETE FROM product WHERE product_id = :product_id";
        $this->execute($query, [
            'product_id' => $product_id
        ]);
    }

    public function editProduct($product_id, $product) {
        $query = "UPDATE product SET product_name = :product_name, product_description = :product_description, product_image = :product_image, product_price = :product_price WHERE product_id = :product_id";

        $this->execute($query, [
            'product_id' => $product_id,
            'product_name' => $product['product_name'],
            'product_description' => $product['product_description'],
            'product_image' => $product['product_image'],
            'product_price' => $product['product_price'],
        ]);
    }
}

?>