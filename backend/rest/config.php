<?php
// Report all errors accept E_NOTICE
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL ^ (E_NOTICE | E_DEPRECATED));

// Database access credentials
define('DB_NAME', 'bakery');
define('DB_PORT', 3306);
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_HOST', '127.0.0.1');

// JWT Secret
define('JWT_SECRET', 'i$p[M!a4U5Hz2[8;+rP&p}6QS$$qL!');