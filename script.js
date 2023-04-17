const header = document.querySelector('header')
const nav =  document.querySelector('nav')
const  unique = document.querySelector('.unique')
const faq_total = document.querySelector('.faq-total')
const faq_all =  document.querySelectorAll('.faq-all')
const faq_content = document.querySelectorAll('.faq-content')
const Swipper = document.querySelector('.swiper')
const swiper_slide = document.querySelectorAll('.swiper-slide')
const swiper_img = document.querySelectorAll('.swiper-img')
const Content = document.querySelectorAll('.content')
const cancel = document.querySelectorAll('.cancel')
const button = document.querySelectorAll('button')
const overlay = document.querySelector('.overlay')
const axe = document.querySelector('.axe')
const loader = document.querySelector('#preloader')
const bar = document.querySelector('.bar')
const bar2 = document.querySelector('.bar2')
const nav_ul = document.querySelector('.nav-ul')
AOS.init();

window.addEventListener('load', function(){
  loader.classList.add('disappear')
})

const headerObs = new IntersectionObserver(function(e){
    const [ent] = e
if(!ent.isIntersecting){
nav.classList.add('open')
}
else{
nav.classList.remove('open')
}
},{
    root:null,
    threshold:0.15,
})
headerObs.observe(header)


nav.addEventListener('mouseover',function(e){
if(e.target.classList.contains('nav__link')){
    const click = e.target
const select = click.closest('nav').querySelectorAll('.nav__link')
const select2 = click.closest('nav').querySelector('.head');
select.forEach(el => {
    if(click !== el){
        el.classList.add('close')
    }
});
select2.classList.add('close')

}

})
nav.addEventListener('mouseout',function(e){
    if(e.target.classList.contains('nav__link')){
        const click = e.target
        const select = click.closest('nav').querySelectorAll('.nav__link')
        const select2 = click.closest('nav').querySelector('.head');
        select.forEach(el => {
            if(click !== el){
                el.classList.remove('close')
            }
});
select2.classList.remove('close')

}

})


faq_total.addEventListener('click',function(e){

if(e.target.classList.contains('first')){
    const click = e.target.parentElement.parentElement
const sibling= click.querySelectorAll('.faq-content')
const angle = click.querySelectorAll('.fa-angle-up')

sibling.forEach(el =>{
    el.classList.toggle('faq-close')
})
angle.forEach(el =>{
    el.classList.toggle('rotate')
})

}})
faq_total.addEventListener('click',function(e){

    if(e.target.classList.contains('fa')){

        const click = e.target.parentElement.parentElement
    const sibling= click.querySelectorAll('.faq-content')
    const angle = click.querySelectorAll('.fa-angle-up')
    
    sibling.forEach(el =>{
        el.classList.toggle('faq-close')

        angle.forEach(el =>{
            el.classList.toggle('rotate')
        })
    })
    
    // }
}else{
    return
}

})

var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

const select = document.querySelectorAll('.nav__link')
select.forEach((e)=>{
    e.addEventListener('click',function(){
        nav_ul.classList.toggle('show')
        overlay.classList.toggle('hidden')
    })
})

    Swipper.addEventListener('click',function(ee){
        if(ee.target.classList.contains('swiper-img')){
            const click = ee.target
            const clicks = ee.target.dataset.set
            
    const parent = Swipper.querySelectorAll('.swiper-img')
    
    parent.forEach(el =>{
if(el === click){

 document.querySelector(`.content--${el.dataset.set}`).classList.remove('hidden');

overlay.classList.remove('hidden')
}})
    
    
        }else{
            return
        }
    })



cancel.forEach(x =>{
    x.addEventListener('click',function(e){
        Content.forEach(e =>{
            e.classList.add('hidden');
        })
            overlay.classList.add('hidden')
        })
})


button.forEach(x =>{
    x.addEventListener('click',function(e){
        Content.forEach(e =>{
            e.classList.add('hidden');
        })
            overlay.classList.add('hidden')
        })
        
    })

    const blur = document.querySelectorAll('img[data-src]') 
blur.forEach(blurs =>{

const me = new IntersectionObserver(function(e){
    const [ent] = e
    if(!ent.isIntersecting){
    return
    }
    else{
        ent.target.classList.remove('blur');

    ent.target.addEventListener('load', function () {
        console.log(ent.target);
      ent.target.classList.remove('blur');
    });

    }


},{
    root:null,
    threshold:0.9,
}
)

me.observe(blurs)
})



axe.addEventListener('click',function(){
    header.scrollIntoView({
        behavior:"smooth"
    })
})

const inter = new IntersectionObserver(function(e){
const [ent] = e
if(ent.isIntersecting){
    axe.classList.add('none')

}
else{
    axe.classList.remove('none')
}
},{
    root:null,
    threshold:0
})
inter.observe(header)


bar.addEventListener('click',function(){
    nav_ul.classList.toggle('show')
    overlay.classList.toggle('hidden')
})
bar2.addEventListener('click',function(){
    nav_ul.classList.toggle('show')
    overlay.classList.toggle('hidden')
})
