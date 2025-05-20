window.onload = () => {
  let body = $("body");
  let btnDown = $(".check-radio .btn-down");
  let infoGuide = $(".check-radio .guide-01");
  let check = $(".check-radio .form-checked");
  let btnSubmitTop = $(".btn-submit-top");
  let btnSubmitBottom = $(".btn-submit-bottom");

  btnDown.click(function () {
    $(this).toggleClass("active");
    console.log($(this));
    $(this).parent().next(infoGuide).slideToggle();
  });

  console.log($(".use-checkbox-top").length);
  $(".use-checkbox-top").change(function () {
    if (
      $(".use-checkbox-top:checked").length === $(".use-checkbox-top").length
    ) {
      btnSubmitTop.addClass("active");
    } else {
      btnSubmitTop.removeClass("active");
    }
  });
  $(".use-checkbox-bottom").change(function () {
    if (
      $(".use-checkbox-bottom:checked").length ===
      $(".use-checkbox-bottom").length
    ) {
      btnSubmitBottom.addClass("active");
    } else {
      btnSubmitBottom.removeClass("active");
    }
  });

  var swiper = new Swiper(".locationSwiper", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    breakpoints: {
      641: {
        slidesPerView: 2.4,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2.2,
        spaceBetween: 40,
      },
    },

    // centeredSlides: true,
  });

  let header = $(".header");
  let headerTop = $(".header").offset().top;
  let headerLogo = $(".logo img");
  let mainVisualTop = $(".form_wrap").offset().top;
  let locationTop = $(".location").offset().top;
  let introTop = $("section.intro").offset().top;

  let sideFormBtn = $(".side_fixed_form");
  let sideTopBtn = $(".side_fixed_top");
  console.log(headerTop);
  $(window).scroll(function () {
    let scrollBar = $(window).scrollTop();

    if (scrollBar > 0) {
      header.addClass("active");
      headerLogo.attr("src", "img/logo_scroll.png");
    } else {
      headerLogo.attr("src", "img/logo.png");
      header.removeClass("active");
    }

    if (scrollBar >= locationTop && scrollBar <= introTop) {
      sideFormBtn.addClass("active");
    } else {
      sideFormBtn.removeClass("active");
    }

    if (scrollBar >= locationTop - 500) {
      sideTopBtn.addClass("active");
    } else {
      sideTopBtn.removeClass("active");
    }
  });

  let modal = $(".modal");
  let modalCloase = $(".modal .modal_close");
  let sideFixedPopup = $(".side_fixed_popup");
  let sidePopupImage = $(".side_popup");

  sideFixedPopup.click(function () {
    sidePopupImage.slideToggle();
  });
  modalCloase.click(function () {
    body.removeClass("scroll");
    modal.addClass("active");
  });

  /*   if($(window).width() < 481) {
             
            //alert()
            modal.addClass('mobile');
        }  */

  // 2025.05.15
  // 평면도
  var swiper = new Swiper(".floorSwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

  let floorPlan = $(".floor_plan");
  let floorMenu = floorPlan.find(".tab_menu li");
  let floorCont = floorPlan.find('.floor_plan_wrap');

  floorMenu.on("click", function () {
    floorMenu.removeClass('active');
    $(this).addClass('active');
    
    floorCont.removeClass('active');
    floorCont.eq($(this).index()).addClass('active')


  });
};
