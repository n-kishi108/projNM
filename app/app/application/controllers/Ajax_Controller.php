<?php
class Ajax_Controller extends CI_Controller {
    public function __construct() {
        parent::__construct();
        $this->load->helper('url');
        $this->load->model('ajax_Model');
    }

    public function show_pictures() {
        $response = $this->ajax_Model->get_pictures();
    }
}