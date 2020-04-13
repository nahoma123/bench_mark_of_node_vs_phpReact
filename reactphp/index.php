<?php

require('vendor/autoload.php');

use React\Http\Response;
use React\Http\Server;
use React\MySQL\Factory;

$loop = \React\EventLoop\Factory::create();

$hello = function () {
    return new Response(200, ['Content-type' => 'application/json'], json_encode([
      'code' => 'ok',
      'error' => false,
      'payload' => 'Hello World'
    ]));
};

$server = new Server($hello);
$socket = new \React\Socket\Server('127.0.0.1:8001', $loop);
$server->listen($socket);

echo 'Listening on ' . str_replace('tcp:', 'http:', $socket->getAddress()) . PHP_EOL;
$loop->run();