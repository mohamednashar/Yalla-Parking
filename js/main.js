$('.slider ').slick({
  centerMode: true,
  dots:true,
  arrows:true,
  centerPadding: '90px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        arrows: true,
        dots:true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        dots:true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1000,
      settings: {
        arrows: true,
        dots:true,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        dots:true,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 780,
      settings: {
        arrows: false,
        dots:true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 775,
      settings: {
        arrows: false,
        dots:true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        dots:true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    
    
    

    
  ]
});

