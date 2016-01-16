$(function(){

  $("nav").each(function(){
    var this_ul = $(this);
    var allLi = this_ul.find("li");
    allLi.click(function(){
      var this_li = $(this);
      var disp_section = $(this_li.attr("name"));
      var dispCls = disp_section.find(".close_btn");
      var dispH2 = disp_section.find("h2");
      var dispDl = disp_section.find("dl");
      var h2Display = dispH2.css("display");
      $("#right_box").each(function(){
        var this_each = $(this);
        var this_section = this_each.find("section");
        var allCls = this_section.find(".close_btn");
        var allH2 = this_section.find("h2");
        var allDl = this_section.find("dl");
        var allDt = this_section.find("dt");
        var allDd = this_section.find("dd");
        var all_i = this_section.find("i");
        this_section.hide();
        allCls.hide();
        allH2.hide();
        allDl.hide();
        allDt.removeClass("opendd");
        all_i.removeClass("opendd");
        allDd.hide();
      });
      if(h2Display != "block"){
        disp_section.show();
        dispCls.slideDown();
        dispH2.slideDown();
        dispDl.slideDown();
      }else{
        disp_section.show();
        dispCls.show();
        dispH2.show();
        dispDl.show();
      }
    });
  });

  $("#right_box").each(function(){
    var this_each = $(this);
    var this_section = this_each.find("section");
    var all_close_btn = this_each.find(".close_btn");
    var allH2 = this_each.find("h2");
    var allDl = this_each.find("dl");
    this_section.hide();
    all_close_btn.hide();
    allH2.hide();
    allDl.hide();
  });

  $("#right_box section .close_btn").click(function(){
    var this_click = $(this);
    var this_section = this_click.parent("section");
    var this_h2 = this_section.find("h2");
    var this_dd = this_section.find("dd");
    var this_i = this_section.find("i");
    this_click.slideUp();
    this_h2.slideUp();
    this_dd.hide();
    this_section.slideUp();
    this_i.removeClass("opendd");
  });

  $("#baloon_title div").mouseover(function(event){
    var this_div = $(this);
    this_div.animate(
      { top : "30px" },
      { duration: "300" ,
        complete: function(){
          this_div.animate(
            { top : "5px" },
            { duration: "600" }
          );
        }
      }
    );
  });

  $("section > dl").each(function(){
    var dl = $(this);
    var allDt = dl.find("dt");
    var allDd = dl.find("dd");
    var allDt_i = dl.find("i");
    allDd.hide();
    allDt.click(function(){
      var dt = $(this);
      var dt_i = dt.find("i");
      var dd = dt.next();
      if(dd.css("display") == "none"){
        allDt.removeClass("opendd");
        allDd.slideUp();
        allDt_i.removeClass("opendd");
        dt.addClass("opendd");
        dt_i.addClass("opendd");
        dd.slideDown();
      }else{
        dt.removeClass("opendd");
        dt_i.removeClass("opendd");
        allDd.slideUp();
      }
    });
  });


  $("#shikaku > dl > dd > img").click(function(){
    if($(this).attr("src")){
      $("#shikaku_big_img").addClass("bigdiv");
      var imgname = $(this).attr("src");
      $("#shikaku_big_img img").attr("src",imgname);
      var img_phplink = "./image_view.php?img=" + imgname;
      $("#shikaku_big_img img").attr("src",imgname);
      $("#shikaku_big_img img").addClass("motion");
      $("#shikaku_big_img > div").addClass("motion");
      $("#shikaku_big_img > div > div:first-child").addClass("motion");
      $("#shikaku_big_img .close_btn").addClass("motion");
      $("#shikaku_big_img .zoomin_btn").addClass("motion");
      $("#shikaku_big_img .zoomout_btn").addClass("motion");
    }
  });

  $("#shikaku_big_img .close_btn").click(function(){
    $("#shikaku_big_img").removeClass("bigdiv");
    $("#shikaku_big_img img").removeClass("motion");
    $("#shikaku_big_img img").attr("src","");
    $("#shikaku_big_img > div").removeClass("motion");
    $("#shikaku_big_img > div > div:first-child").removeClass("motion");
    $("#shikaku_big_img > div > div:first-child").attr("style","");
    $("#shikaku_big_img .close_btn").removeClass("motion");
    $("#shikaku_big_img .zoomin_btn").removeClass("motion");
    $("#shikaku_big_img .zoomout_btn").removeClass("motion");
    /*$("#shikaku_big_img iframe").removeClass("motion");*/
  });

  $("#shikaku_big_img .zoomin_btn").click(function(){
    $("#shikaku_big_img img").removeClass("motion");
    $("#shikaku_big_img > div > div:first-child").css({"overflow":"scroll",'cursor': 'move'});
  });

  $("#shikaku_big_img .zoomout_btn").click(function(){
    $("#shikaku_big_img img").addClass("motion");
    $("#shikaku_big_img > div > div:first-child").attr("style","");
  });


   $.fn.dragScroll = function() {
     var target = this;
     $(this).mousedown(function (event) {
       $(this)
         .data('down', true)
         .data('x', event.clientX)
         .data('y', event.clientY)
         .data('scrollLeft', this.scrollLeft)
         .data('scrollTop', this.scrollTop);
       return false;
     });
     // ウィンドウから外れてもイベント実行
     $(document).mousemove(function (event) {
       if ($(target).data('down') == true) {
         // スクロール
         target.scrollLeft($(target).data('scrollLeft') + $(target).data('x') - event.clientX);
         target.scrollTop($(target).data('scrollTop') + $(target).data('y') - event.clientY);
         return false; // 文字列選択を抑止
       }
     }).mouseup(function (event) {
       $(target).data('down', false);
     });
     return this;
   }

  $('#scroll').dragScroll();

  
/*
  $("#shikaku > dl").each(function(){
    var dl = $(this);
    var allDt = dl.find("dt");
    var allDd = dl.find("dd");
    allDd.hide();
    allDt.click(function(){
      var dt = $(this);
      var dd = dt.next();
      if(dd.css("display") == "none"){
        allDd.slideUp();
        dd.animate(
          { height: "toggle" },
          { duration: "0.8s" }
        );
      }else{
        allDd.slideUp();
      }
    });
  });



*/


/*
  $("#shikaku > ul").each(function(){
    var Ul = $(this);
    var allLi = Ul.find("li");
    allLi.click(function(){
      var Li = $(this);
      var imgname = Li.attr("name");
      $(".shikaku_img > img").attr("src",imgname);
      $(".shikaku_img > img").css("height","100%");
    });
  });

*/

/*
  $("#skill > dl").each(function(){
    var dl = $(this);
    var allDt = dl.find("dt");
    var allDd = dl.find("dd");
    allDd.hide();
    allDt.click(function(){
      var dt = $(this);
      var dd = dt.next();
      if(dd.css("display") == "none"){
        allDd.slideUp();
        dd.animate(
          { height: "toggle" },
          { duration: "0.8s" }
        );
      }else{
        allDd.slideUp();
      }
    });
  });

  $("#sakuhin > dl").each(function(){
    var dl = $(this);
    var allDt = dl.find("dt");
    var allDd = dl.find("dd");
    allDd.hide();
    allDt.click(function(){
      var dt = $(this);
      var dd = dt.next();
      if(dd.css("display") == "none"){
        allDd.slideUp();
        dd.animate(
          { height: "toggle" },
          { duration: "0.8s" }
        );
      }else{
        allDd.slideUp();
      }
    });
  });
*/
});