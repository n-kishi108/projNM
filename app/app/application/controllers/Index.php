<?php
class Index extends CI_Controller {
    public function __construct() {
        parent::__construct();
        $this->load->helper('url');
        $this->load->helper('file');
    }

    public function index() {
        // $data['file'] = $this->readFile();
        // $data['file'] = [];
        $data['file'] = read_file_to_array(base_url().'assets/python/img_list.txt');

        /*******
        render
        *******/
        $this->load->view('templates/header');
        $this->load->view('index/index', $data);
    }
}
