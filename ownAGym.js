
    const script = document.createElement('script')
script.src='https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js'

document.querySelector('body').appendChild(script);


document.querySelectorAll('section.swiper-container-custom').forEach(swiperContainer=>{
    //Add Swiper Wrapper class:
    swiperContainer.querySelector('.elementor-container').classList.add('swiper-wrapper');

    //Add swiper slide class to all columns:
    swiperContainer.querySelectorAll(".swiper-wrapper .elementor-column").forEach(column=>column.classList.add('swiper-slide'));
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = `
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>`;
    [...tempDiv.children].forEach(child=>{
        swiperContainer.appendChild(child)
    })

})


const awaitSwiperInit = setInterval(()=>{
    if(Swiper){
        clearInterval(awaitSwiperInit);
        document.querySelectorAll('section.swiper-container-custom').forEach(swiperContainer=>{
            //https://swiperjs.com/swiper-api#param-loop
            //Because of nature of how the loop mode works (it will rearrange slides), total number of slides must be >= slidesPerView * 2
            debugger
            if(swiperContainer.querySelectorAll('.swiper-slide').length < 6){
                swiperContainer.querySelectorAll('.swiper-slide').forEach(slide=>{
                    const clonedSlide = slide.cloneNode(true);
                    const clonedButton = clonedSlide.querySelector('.elementor-button');
                const realButton = slide.querySelector('.elementor-button');
                
                clonedButton.addEventListener('click', e=>{
                    e.preventDefault();
                    realButton.click();
                })
                    slide.parentElement.appendChild(clonedSlide)
                })
            }
           new Swiper(swiperContainer, {
              // Optional parameters
              loop: true,
              allowTouchMove: true,

                breakpoints: {
                320: {
                    slidesPerView: 1
                },
                800: {
                    slidesPerView: 2,
                },
               1000:{
                  slidesPerView: 3,
                  spaceBetween: 30,
               },
                },
              // Navigation arrows
              navigation: {
                nextEl: swiperContainer.querySelector('.swiper-button-next'),
                prevEl: swiperContainer.querySelector('.swiper-button-prev'),
              }
            });
        })
    }
},500)
