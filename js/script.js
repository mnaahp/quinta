jQuery(window).scroll(function() {
  var nav = jQuery('.cabecera');
  var top = 80;
  if (jQuery(window).scrollTop() >= top) {
    nav.addClass('fixed');
  } else {
    nav.removeClass('fixed');
  }
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox({
    alwaysShowClose: true
  });
});

jQuery(document).ready(function($) {
"use strict";

  if(window.location.hash){
    var hash = window.location.hash;
    if ($(hash).length) {
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900);
    }
  }

  $("a[href='#top']").click(function(e) {
    e.preventDefault();
    $("html, body").animate({ 
      scrollTop: 0 
    }, 900);
  });

  $(".scroll a[href^='#'], a.scroll[href^='#']").click(function(e) {
    e.preventDefault();
    var position = $($(this).attr("href")).offset().top;
    $("body, html").animate({
      scrollTop: position
    }, 900);
  });


  $("img").each(function(){
    var $this = $(this);
    if($this.width() <= $this.height()){
      $this.addClass("img-vertical");
    }
  });

  // Videos
  var videos = document.querySelectorAll('video');
  for(var i=0; i<videos.length; i++)
    videos[i].addEventListener('play', function(){pauseAll(this)}, true);

  function pauseAll(elem){
    for(var i=0; i<videos.length; i++){
      if(videos[i] == elem) continue;
      if(videos[i].played.length > 0 && !videos[i].paused){
        videos[i].pause();
      }
    }
  }

  // Audios
  var audios = document.querySelectorAll('audio');
  for(var i=0; i<audios.length; i++)
    audios[i].addEventListener('play', function(){pauseAllAudios(this)}, true);

  function pauseAllAudios(elem){
    for(var i=0; i<audios.length; i++){
      if(audios[i] == elem) continue;
      if(audios[i].played.length > 0 && !audios[i].paused){
        audios[i].pause();
      }
    }
  }

  $(".carousel").each(function(){
    var totalItems = $(this).find('.carousel-item').length;
    var currentIndex = $(this).find('div.active').index() + 1;
    $(this).find('.carousel-counter').html(''+currentIndex+'/'+totalItems+'');
    
    var $this = $(this);
    $this.on('slid.bs.carousel', function() {
      currentIndex = $(this).find('div.active').index() + 1;
      $(this).find('.carousel-counter').html(''+currentIndex+'/'+totalItems+'');
    });
  });

  $('#aves-carousel').carousel().on('slide.bs.carousel',function(){
    $('.carousel-item').find('audio').each(function(){
      this.pause();
    });
  });

  // Area 1 - Mundo
  $(".hotspot-nav button").click(function() {
    $('html, body').animate({
      scrollTop: $(this).closest('.hotspot').find('.hotspot-content').offset().top
    }, 900);
  });
  $('.hotspot-content .close').on('click',function(){
    $('.collapse').collapse('hide');
    $('html, body').animate({
        scrollTop: $(this).closest('.hotspot').offset().top - 15
    }, 900);
  });

}); // End $(document).ready Function