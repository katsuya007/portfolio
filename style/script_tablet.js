$(function(){

  $("#to_menu").click(function(){
    var slide_time = 800;
    $("#left_box").animate({
      left: "-60%"
    }, slide_time ,function(){
      $("#left_box").css("z-index","1")
      $("#left_box").animate({
        left: "0%"
      }, slide_time);
    });
    $("#right_box").animate({
      left: "60%"
    }, slide_time , function(){
      $("#right_box").css("z-index","2")
      $("#right_box").animate({
        left: "0%"
      }, slide_time);
    });
  });

  $("#to_toppage").click(function(){
    var slide_time = 800;
    $("#left_box").animate({
      left: "-60%"
    }, slide_time ,function(){
      $("#left_box").css("z-index","2")
      $("#left_box").animate({
        left: "0%"
      }, slide_time);
    });
    $("#right_box").animate({
      left: "60%"
    }, slide_time , function(){
      $("#right_box").css("z-index","1")
      $("#right_box").animate({
        left: "0%"
      }, slide_time);
    });

    $("#right_box").each(function(){
      var allSection = $(this);
      var all_i = allSection.find(".down_btn");
      var allH2 = allSection.find("h2");
      var allDl = allSection.find("dl");
      var allDt = allDl.find("dt");
      var allDd = allDl.find("dd");
      var allDt_i = allDl.find("i");
      allDl.hide();
      allDd.hide();
      allDt.removeClass("opendd");
      all_i.removeClass("opensection");
      allDt_i.removeClass("opendd");
    });
  });




  $("#right_box").each(function(){
    var allSection = $(this);
    var all_i = allSection.find(".down_btn");
    var allH2 = allSection.find("h2");
    var allDl = allSection.find("dl");
    var allDt = allDl.find("dt");
    var allDd = allDl.find("dd");
    var allDt_i = allDl.find("i");
    allDl.hide();
    allDd.hide();
    allH2.click(function(){
      var this_click = $(this);
      var currentDl = this_click.next();
      var this_section = this_click.parents("section");
      var this_i = this_section.find(".down_btn");
      allDd.hide();
      allDl.slideUp();
      allDt.removeClass("opendd");
      all_i.removeClass("opendd");
      allDt_i.removeClass("opendd");
      if(currentDl.css("display") == "none"){
        currentDl.slideDown();
        all_i.removeClass("opensection");
        this_i.addClass("opensection");
      }else{
        all_i.removeClass("opensection");
      }
    });
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
  });

  $("#shikaku_big_img .zoomin_btn").click(function(){
    $("#shikaku_big_img img").removeClass("motion");
    $("#shikaku_big_img > div > div:first-child").css({"overflow":"scroll",'cursor': 'move'});
  });

  $("#shikaku_big_img .zoomout_btn").click(function(){
    $("#shikaku_big_img img").addClass("motion");
    $("#shikaku_big_img > div > div:first-child").attr("style","");
  });



});