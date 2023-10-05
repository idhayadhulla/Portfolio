var typed = new Typed(".text",{
	strings:["Frontend Developer","Web designer","Web developer"],
	typeSpeed:100,
	backSpeed:100,
	backDelay:1000,
	loop:true
});


const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach((lazyImage) => {
  lazyImage.addEventListener('load', () => {
    lazyImage.classList.add('loaded');
  });
});