<?php

require __DIR__ . '/../../../vendor/autoload.php';

define('BASE_URL', 'https://goldfish-app-l87ee.ondigitalocean.app/backend/');

error_reporting(0);

$openapi = \OpenApi\Generator::scan(['../../../rest', './'], ['pattern' => '*.php']);
header('Content-Type: application/json');
echo $openapi->toJson();
?>
