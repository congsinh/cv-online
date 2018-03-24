<?php
/**
 * Created by PhpStorm.
 * User: sinh
 * Date: 2/25/18
 * Time: 7:40 PM
 */

require_once "vendor/autoload.php";
require_once('function.php');
$action = filter_input(INPUT_POST, 'action');
if (empty($action)) {
    $action = filter_input(INPUT_GET, 'action');
    if (empty($action)) {
        $action = "index";
    }
}

switch ($action) {
    case 'index':
        include('home.html');
        break;
    case 'sendmail':
        $name = filter_input(INPUT_POST, 'name');
        $subject = filter_input(INPUT_POST, 'subject');
        $email = filter_input(INPUT_POST, 'email');
        $msg = filter_input(INPUT_POST, 'message');
        $result = sendmail($name,$subject,$email,$msg);
        echo $result;
        break;
}