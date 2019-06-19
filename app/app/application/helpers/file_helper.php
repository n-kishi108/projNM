<?php
function read_file_to_array($path) {
    $response = array();
        // $get = file_get_contents(base_url().'assets/python/img_list.txt');
        // $file = (base_url().'assets/python/img_list.txt', 'r');
        // $file = file_get_contents($path);
        $file = fopen('http://localhost:8080/assets/css/index.css', 'r');
        echo $file;
        if($file) {
            while($line = fgets($file)) {
                array_push($response, $line);
            }
            fclose($file);
        }
    return $response;
}