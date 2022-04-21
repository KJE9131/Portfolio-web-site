// #process1 //

$(".process_dp .tab li").click(function () {
  $(this).addClass("select").siblings().removeClass("select");

  var n = $(this).index() + 1;
  $(".process_dp .tab" + n)
    .addClass("on")
    .siblings("div")
    .removeClass("on");
});

$(".portfolio_cp .tab li").click(function () {
  $(this).addClass("select").siblings().removeClass("select");

  var n = $(this).index() + 1;
  $(".portfolio_cp .tab" + n)
    .addClass("on")
    .siblings("div")
    .removeClass("on");
});

// #process2 //

$("#process2 .cont1 h2").animate({ opacity: 1, left: 0 }, 700);
$("#process2 .cont1 ul").delay(200).animate({ opacity: 1, left: 0 }, 700);
$("#process2 .cont1 img").delay(200).animate({ opacity: 1 }, 900);

$("#process2 .top").click(function () {
  $("html").animate({ scrollTop: 0 }, 700);
});
$("#process1 .top").click(function () {
  $("html").animate({ scrollTop: 0 }, 700);
});

// scroll //
var chk = 0;

$(window).scroll(function () {
  var sc = $(this).scrollTop();
  console.log(sc);
  if (sc > 100) {
    $("#process1 .top").addClass("on");
    $("#process2 .top").addClass("on");
  } else {
    $("#process1 .top").removeClass("on");
    $("#process2 .top").removeClass("on");
  }

  if (sc > 500) {
    $("#process2 .cont2").animate({ opacity: 1, left: 0 }, 700);
  }

  if (sc > 700) {
    $("#process1 .cont1 h3").animate({ left: 0, opacity: 1 }, 700);
    $("#process1 .cont1 p").animate({ left: 0, opacity: 1 }, 700);
  }

  if (sc > 1000) {
    $("#process2 .cont3 h2").animate({ right: "200px", opacity: 1 }, 700);
  }

  if (sc > 1200) {
    $("#process1 .cont2 h3").animate({ left: 0, opacity: 1 }, 700);
  }

  if (sc > 1300) {
    $("#process2 .cont3 .cont3_1").animate({ bottom: 0, opacity: 1 }, 700);
  }

  if (sc > 1500) {
    $("#process1 .cont2 .font dl").animate({ left: 0, opacity: 1 }, 700);
    $("#process2 .cont3 .cont3_1").animate({ bottom: 0, opacity: 1 }, 700);
  }

  if (sc > 1800) {
    $("#process1 .cont2 .color dl").animate({ left: 0, opacity: 1 }, 700);
  }

  if (sc > 2100) {
    $("#process2 .cont3 .cont3_2").animate({ bottom: 0, opacity: 1 }, 700);
  }

  if (sc > 2700) {
    $("#process1 .cont3 h3").animate({ left: 0, opacity: 1 }, 700);
    $("#process1 .cont3 .coding_1 img:nth-child(1)").animate(
      { right: "0", opacity: 1 },
      700
    );
    $("#process1 .cont3 .coding_1 img:nth-child(2)").animate(
      { right: "0", opacity: 1 },
      700
    );
    $("#process1 .cont3 .coding_1 p").animate({ right: "0", opacity: 1 }, 700);
  }

  if (sc > 3000) {
    $("#process2 .cont3 .cont3_3").animate({ bottom: 0, opacity: 1 }, 700);
  }

  if (sc > 3500) {
    $("#process1 .cont3 .coding_2 img:nth-child(1)").animate(
      { left: "0", opacity: 1 },
      700
    );
    $("#process1 .cont3 .coding_2 img:nth-child(2)").animate(
      { left: "480px", opacity: 1 },
      700
    );
    $("#process1 .cont3 .coding_2 p").animate({ left: "0", opacity: 1 }, 700);
  }

  if (sc > 4000) {
    $("#process2 .cont4 h2, #process2 .cont4 p").animate(
      { left: 0, opacity: 1 },
      700
    );
  }

  if (sc > 4200) {
    $("#process1 .cont3 .coding_3 img:nth-child(1)").animate(
      { bottom: "-100px", opacity: 1 },
      700
    );
    $("#process1 .cont3 .coding_3 img:nth-child(2)").animate(
      { bottom: "140px", opacity: 1 },
      700
    );
    $("#process1 .cont3 .coding_3 img:nth-child(3)").animate(
      { bottom: "-200px", opacity: 1 },
      700
    );
    $("#process1 .cont3 .coding_3 p").animate(
      { bottom: "-100px", opacity: 1 },
      700
    );
  }

  if (sc > 5000) {
    $("#process1 .cont3 .coding_4 img:nth-child(1)").animate(
      { bottom: "0", opacity: 1 },
      700
    );
    $("#process1 .cont3 .coding_4 img:nth-child(2)").animate(
      { bottom: "400px", opacity: 1 },
      700
    );
    $("#process1 .cont3 .coding_4 img:nth-child(3)").animate(
      { bottom: "100px", opacity: 1 },
      700
    );
    $("#process1 .cont3 .coding_4 p").animate({ bottom: "0", opacity: 1 }, 700);
  }

  if (sc > 5500) {
    $("#process1 .cont3 .coding_5 img:nth-child(1)").animate(
      { left: "0", opacity: 1 },
      700
    );
    $("#process1 .cont3 .coding_5 img:nth-child(2)").animate(
      { right: "0", opacity: 1 },
      700
    );
    $("#process1 .cont3 .coding_5 p").animate({ bottom: "0", opacity: 1 }, 700);
  }

  if (sc > 6200) {
    $("#process1 .cont4 h3").animate({ left: 0, opacity: 1 }, 700);
    $("#process1 .cont4 p").animate({ left: "200px", opacity: 1 }, 900);
  }
});
