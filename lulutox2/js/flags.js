const widgetMatreshkaSale = "70%";
const widgetMatreshkaSale2 = "30%";
const widgetMatreshkaSale3 = "50%";

let flag = 0;
$(".prewin").on("click", function () {
  $(".click-here").css("display", "none");
  $(".flags--item img").css("animation", "none");
  if (flag === 0) {
    flag = 1;
    if ($(this).hasClass("red")) {
      $(this).next().children().addClass("grats");
      $(".sale-red").html(widgetMatreshkaSale);
      $(".sale-blue").html(typeof widgetMatreshkaSale2 !== "undefined" ? widgetMatreshkaSale2 : "30%");
      $(".sale-yellow").html(typeof widgetMatreshkaSale3 !== "undefined" ? widgetMatreshkaSale3 : "50%");
    }
    if ($(this).hasClass("blue")) {
      $(this).next().children().addClass("grats");
      $(".sale-blue").html(widgetMatreshkaSale);
      $(".sale-yellow").html(typeof widgetMatreshkaSale2 !== "undefined" ? widgetMatreshkaSale2 : "30%");
      $(".sale-red").html(typeof widgetMatreshkaSale3 !== "undefined" ? widgetMatreshkaSale3 : "50%");
    }
    if ($(this).hasClass("yellow")) {
      $(this).next().children().addClass("grats");
      $(".sale-yellow").html(widgetMatreshkaSale);
      $(".sale-blue").html(typeof widgetMatreshkaSale2 !== "undefined" ? widgetMatreshkaSale2 : "30%");
      $(".sale-red").html(typeof widgetMatreshkaSale3 !== "undefined" ? widgetMatreshkaSale3 : "50%");
    }
    $(this).next().fadeIn(300);
    setTimeout(() => {
      $(".win").show(300);
    }, 1000);
    setTimeout(() => {
      $(".spin-result-wrapper").fadeOut();
      $(".flags--wrapper").fadeOut();
      $(".order_block").fadeIn();
      $("html, body").animate(
        {
          scrollTop: $("#scroll").offset().top - 50,
        },
        1000
      );
    }, 2500);
  }
});

let a = Math.ceil(Math.random() * 3);
let text = "";
$(".prewins").on("click", function () {
  $(".click-here").css("display", "none");
  $(".flags--item img").css("animation", "none");
  if (flag === 0) {
    flag = 1;
    if (a == 1) {
      text = ".red";
    }
    if (a == 2) {
      text = ".blue";
    }
    if (a == 3) {
      text = ".yellow";
    }
    if ($(text).hasClass("red")) {
      $(text).next().children().addClass("grats");
      $(".sale-red").html(widgetMatreshkaSale);
      $(".sale-blue").html(typeof widgetMatreshkaSale2 !== "undefined" ? widgetMatreshkaSale2 : "30%");
      $(".sale-yellow").html(typeof widgetMatreshkaSale3 !== "undefined" ? widgetMatreshkaSale3 : "50%");
    }
    if ($(text).hasClass("blue")) {
      $(text).next().children().addClass("grats");
      $(".sale-blue").html(widgetMatreshkaSale);
      $(".sale-yellow").html(typeof widgetMatreshkaSale2 !== "undefined" ? widgetMatreshkaSale2 : "30%");
      $(".sale-red").html(typeof widgetMatreshkaSale3 !== "undefined" ? widgetMatreshkaSale3 : "50%");
    }
    if ($(text).hasClass("yellow")) {
      $(text).next().children().addClass("grats");
      $(".sale-yellow").html(widgetMatreshkaSale);
      $(".sale-blue").html(typeof widgetMatreshkaSale2 !== "undefined" ? widgetMatreshkaSale2 : "30%");
      $(".sale-red").html(typeof widgetMatreshkaSale3 !== "undefined" ? widgetMatreshkaSale3 : "50%");
    }
    $(text).next().fadeIn(300);
    setTimeout(() => {
      $(".win").show(300);
    }, 1000);
    setTimeout(() => {
      $(".spin-result-wrapper").fadeOut();
      $(".flags--wrapper").fadeOut();
      $(".order_block").fadeIn();
      $("html, body").animate(
        {
          scrollTop: $("#scroll").offset().top - 50,
        },
        1000
      );
    }, 2500);
  }
});
