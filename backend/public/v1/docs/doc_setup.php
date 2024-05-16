<?php

/**
 * @OA\Info(
 *   title="API",
 *   description="Web Programming Project API",
 *   version="1.0",
 *   @OA\Contact(
 *     email="fikret.zajmovic@stu.ibu.edu.ba",
 *     name="Fikret Zajmovic"
 *   )
 * ),
 * @OA\OpenApi(
 *   @OA\Server(
 *       url=BASE_URL
 *   )
 * )
 * @OA\SecurityScheme(
 *     securityScheme="ApiKey",
 *     type="apiKey",
 *     in="header",
 *     name="Authentication"
 * )
 */
