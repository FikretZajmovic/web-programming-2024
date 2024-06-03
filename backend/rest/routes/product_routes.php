<?php

require_once __DIR__ . '/../services/ProductService.class.php';

Flight::set('productService', new ProductService());

Flight::group('/products', function(){

    /**
     * @OA\Get(
     *      path="/products",
     *      tags={"products"},
     *      summary="Get all products",
     *      security={
     *          {"ApiKey": {}}
     *      },
     *      @OA\Response(
     *           response=200,
     *           description="Get all products"
     *      )
     * )
     */
Flight::route('GET /', function(){
    $data = Flight::get('productService')->getProducts();

    Flight::json(["data" => $data]);
});

/**
     * @OA\Get(
     *      path="/products/product",
     *      tags={"products"},
     *      summary="Get product by id",
     *      security={
     *          {"ApiKey": {}}
     *      },
     *      @OA\Response(
     *           response=200,
     *           description="Product data, or false if product doesn't exist"
     *      ),
     *      @OA\Parameter(@OA\Schema(type="number"), in="query", name="product_id", example="1", description="Product ID")
     * )
     */
Flight::route('GET /product', function(){
    $params = Flight::request()->query;
    $product = Flight::get('productService')->getProductByID($params['product_id']);
    Flight::json($product);
});

/**
     * @OA\Post(
     *      path="/products/add",
     *      tags={"products"},
     *      summary="Add product data to the database",
     *      @OA\Response(
     *           response=200,
     *           description="Product data, or exception if product is not added properly"
     *      ),
     *      @OA\RequestBody(
     *          description="Product data payload",
     *          @OA\JsonContent(
     *              required={"product_name","product_price"},
     *              @OA\Property(property="product_id", type="integer", example="1", description="Product ID"),
     *              @OA\Property(property="product_name", type="string", example="Some product name", description="Product name"),
     *              @OA\Property(property="product_description", type="string", example="Some product description", description="Product description"),
     *              @OA\Property(property="product_image", type="string", example="/web-programming-project/spapp/assets/img/product.jpg", description="Product image"),
     *              @OA\Property(property="product_price", type="number", format="float", example="10.0", description="Product price")
     *          )
     *      )
     * )
     */
Flight::route('POST /add', function(){
    $payload = Flight::request()->data->getData();


    if($payload['product_id'] != NULL && $payload['product_id'] != '') {
        $product = Flight::get('productService')->editProduct($payload);
    }

    else {
        unset($payload['product_id']);
        $product = Flight::get('productService')->addProduct($payload);
    }

    Flight::json(["message" => $product]);
});

/**
     * @OA\Delete(
     *      path="/products/delete/{product_id}",
     *      tags={"products"},
     *      summary="Delete product by id",
     *      @OA\Response(
     *           response=200,
     *           description="Deleted product data or 500 status code exception otherwise"
     *      ),
     *      @OA\Parameter(@OA\Schema(type="number"), in="path", name="product_id", example="1", description="Product ID")
     * )
     */
Flight::route('DELETE /delete/@product_id', function($product_id){
    if($product_id == NULL || $product_id == '') {
        Flight::halt(500, "You have to provide valid product id!");
    }

    Flight::get('productService')->deleteProduct($product_id);

    Flight::json(['message' => "You have succesfully deleted the position!"]);
});

/**
     * @OA\Get(
     *      path="/products/{product_id}",
     *      tags={"products"},
     *      summary="Get product by id",
     *      @OA\Response(
     *           response=200,
     *           description="Product data, or false if product does not exist"
     *      ),
     *      @OA\Parameter(@OA\Schema(type="number"), in="path", name="product_id", example="1", description="Product ID")
     * )
     */

Flight::route('GET /@product_id', function($product_id){
    $product = Flight::get('productService')->getProductByID($product_id);

    Flight::json($product, 200);
});

});