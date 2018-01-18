/**
 * @author      ZEUS Design <service@zeusdesign.com.tw>
 * @copyright   Copyright (c) 2018 ZEUS Design
 * @license     http://zeusdesign.com.tw
 */

$(function () {

  $('.menu_list, .page_menu_list').click (function () {
     $('.mobile_boxs').toggleClass ('no_show');
    }
  );

  $('.n_titel').click (function () {
     $('.n_content').toggleClass ('show_co');
    }
  );

});