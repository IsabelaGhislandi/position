gsap.registerPlugin(ScrollTrigger);

const section1Img = document.querySelectorAll('.section--c--1__col .card');

$('.card').each(function(){
	var randomRotation = Math.floor(Math.random() * 10) - 5 + 'deg';
	$(this).css('--hoverRotate', randomRotation)
});

$('.section--c--1').each(function(){
	var thisSection = $(this);
	var colWrapper = thisSection.find('.section--c--1__col');
	var col = $('.section--c--1 .card-list');
	var colOdd = document.querySelectorAll('.section--c--1__col:nth-child(odd) .card-list');
	var colEven = document.querySelectorAll('.section--c--1__col:nth-child(even) .card-list');
	
	console.log(col[0].offsetHeight);
	console.log(window.innerHeight);
	console.log(- col[0].offsetHeight - window.innerHeight)
	
	gsap.to('.section--c--1__col .card-list', {
		y: (i) => { 
			
			var isOdd = col[i].parentElement.getAttribute('data-index') === 'odd' ? '-=' : '';
			return isOdd + (col[i].offsetHeight - window.innerHeight - ($('.section--c--1 .card').outerHeight(true) / 10) + 'px');
			//return isOdd + (col[i].offsetHeight - window.innerHeight + 'px');
			
			
		},
		//y: '-1000px',
		ease: 'none',
		scrollTrigger: {
			trigger: thisSection,
			scrub: .75,
    	pin: true,
    	pinSpacing: true,
			start: 'top top',
			end: () => {return '+=' + window.innerHeight * 2 + 'px'},
			invalidateOnRefresh: true,
			onUpdate: (i)=>{console.log(i)},
		}
	});
	
	// gsap.to('.section--c--1__col:nth-child(even) .card-list', {
	// 	y: (i) => { return '+=' + (col[i].offsetHeight - window.innerHeight - ($('.section--c--1 .card').outerHeight(true) / 2) + 'px') },
	// 	//y: '-1000px',
	// 	ease: 'none',
	// 	scrollTrigger: {
	// 		trigger: thisSection,
	// 		scrub: .75,
	// pin: true,
	// pinSpacing: true,
	// 		start: 'top top',
	// 		end: () => {return '+=' + window.innerHeight * 2 + 'px'},
	// 		invalidateOnRefresh: true,
	// 	}
	// });
	
	// gsap.to(colEven, {
	// 	y: '2000px',
	// 	ease: 'none',
	// 	scrollTrigger: {
	// 		trigger: thisSection,
	// 		scrub: 0,
	// 		start: 'top bottom',
	// 		end: 'bottom top',
	// 		invalidateOnRefresh: true
	// 	}
	// });
	
});

for (var i = 0 ; i < section1Img.length; i++) {
   section1Img[i].addEventListener('mouseover', function(){
		let thisColor = this.getAttribute('data-color');
	
		gsap.to('.section--c--1', {backgroundColor: thisColor});
		//console.log(thisColor);
	});
	
	section1Img[i].addEventListener('mouseleave', function(){
		gsap.to('.section--c--1', {backgroundColor: '#d4d4d4'});
	});
};

$('.section--c--1').on('mousemove', function(e){
	let posXMap = gsap.utils.mapRange(0, window.innerWidth, 7.5, -7.5, e.pageX);
	// let posXMap = gsap.utils.mapRange(0, window.innerWidth, 5, -5, e.pageX);
	let posYMap = gsap.utils.mapRange(0, window.innerWidth, 5, -5, e.pageY);
	
	//console.log(posX - (window.innerWidth/2));
	
	// let transform = gsap.utils.pipe(
	// 	gsap.utils.clamp(-10, 10),
	// 	gsap.utils.mapRange(-10, 10, 0, window.innerWidth)
	// );
	
	//console.log(posXMap);
	
	//gsap.to('.section--c--1__wrap', {xPercent: posXMap, yPercent: posYMap, duration: 1, ease: Power2.easeOut})
	// gsap.to('.section--c--1__wrap', {x: posXMap + 'vw', y: posYMap + 'vw', duration: 2, ease: Circ.easeOut})
	
	
});
