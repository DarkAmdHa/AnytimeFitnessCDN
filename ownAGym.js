const script=document.createElement('script')
script.src='https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js'
document.querySelector('body').appendChild(script);document.querySelectorAll('section.swiper-container-custom').forEach(swiperContainer=>{swiperContainer.querySelector('.elementor-container').classList.add('swiper-wrapper');swiperContainer.querySelectorAll(".swiper-wrapper .elementor-column").forEach(column=>column.classList.add('swiper-slide'));const tempDiv=document.createElement('div');tempDiv.innerHTML=`
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>`;[...tempDiv.children].forEach(child=>{swiperContainer.appendChild(child)})})
const awaitSwiperInit=setInterval(()=>{if(Swiper){clearInterval(awaitSwiperInit);document.querySelectorAll('section.swiper-container-custom').forEach(swiperContainer=>{if(swiperContainer.querySelectorAll('.swiper-slide').length<6){swiperContainer.querySelectorAll('.swiper-slide').forEach(slide=>{const clonedSlide=slide.cloneNode(!0);const clonedButton=clonedSlide.querySelector('.elementor-button');const realButton=slide.querySelector('.elementor-button');clonedButton.addEventListener('click',e=>{e.preventDefault();realButton.click()})
slide.parentElement.appendChild(clonedSlide)})}
new Swiper(swiperContainer,{loop:!0,allowTouchMove:!0,breakpoints:{320:{slidesPerView:1},800:{slidesPerView:2,},1000:{slidesPerView:3,spaceBetween:30,},},navigation:{nextEl:swiperContainer.querySelector('.swiper-button-next'),prevEl:swiperContainer.querySelector('.swiper-button-prev'),}})})}},500)
