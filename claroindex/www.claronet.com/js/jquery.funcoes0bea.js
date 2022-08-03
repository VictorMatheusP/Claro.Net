$(function() {

	$("input.data").inputmask("99/99/9999");
	$("input.hora").inputmask("99:99");
	$("input.telefone").inputmask("(99) 9999-9999");
	$("input.celular").inputmask("(99) 99999999[9]");
	$("input.cep").inputmask("99999-999");
	$("input.cpf").inputmask("999.999.999-99");
	$("input.cnpj").inputmask("99.999.999/9999-99");

    $(".banner-slick").slick({
        dots:true,
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000
    });

    $(".pacotes-slick").slick({
        arrows:false,
        dots:false,
        slidesToShow:5,
        slidesToScroll:1,
        infinite:false,        
        responsive: [
	    {
	      breakpoint: 1280,
	      settings: {
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 1115,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 825,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 667,
	      settings: {
	        slidesToShow: 1,
	        centerMode:true,
	      }
	    }
	    ]
    });
    
    $(".js-mais").click(function() {
    	$(this).parent().parent().children(".hide").slideToggle('fast');
    	$(this).text( ($(this).text() == 'mais benefícios' ? 'menos' : 'mais benefícios') )
    });

    $("[data-aside]").click(function() {
		let aside = $(this).attr("data-aside");
		$(".aside-" + aside).fadeIn(100,function() {
			$(this).children(".aside-content").addClass("active");
		});
	});

	$(".aside-fechar").click(function() {
    	$(this).parent().removeClass("active");
    	$(this).parent().parent().fadeOut();
    });

    $("[data-aside=cobertura]").click(function() {
		var url = $(this).attr("data-href");
		$("input[name='url']").val(url);		
	});

});
