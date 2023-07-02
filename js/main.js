const searchEl = document.querySelector('.search');
// searchEl 내 input 요소 찾기
const searchInputEl = searchEl.querySelector('input');

// Click Event
searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

// Focus Event
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합 검색');
});

// Blur Event
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

// Badges
const badgeEl = document.querySelector('header .badges');
// Top Button
const toTopEl = document.querySelector('#to-top');

// Window Scroll Event
// _.throttle(함수, 시간) 기능 :: 일정 시간 동안 한 번씩만 실행 될 수 있도록 제한
window.addEventListener('scroll', _.throttle(function () {
    if(window.scrollY > 500) {
        // badge 숨김
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        // 버튼 표출
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else {
        // badge 표출
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        // 버튼 숨김
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));

toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});



// Fade in
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, idx) {
    gsap.to(fadeEl, 1, {
        // .7, 1.4, 2.1, 2.7
        delay: (idx + 1) * .7, 
        opacity: 1
    });
});

// Swiper
// new Swiper (인수, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3,       // 한 번에 보여 줄 슬라이드 개수
    spaceBetween: 10,       // 슬라이드 사이 여백
    centeredSlides: true,   // 1번 슬라이드 가운데 보이기
    autoplay: {
        delay: 5000
    },
    loop: true,
    pagination: {
        el: '.promotion .swiper-pagination',    // 페이지 번호 요소 선택자
        clickable: true                         // 사용자의 페이지 번호 요소 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

// Toggle
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion;

    if (isHidePromotion) {
        // 숨김 처리
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// floatingObject Method
function floatingObject(selector, dly, size) {
    gsap.to(
        selector,               // 선택자
        random(1.5, 2.5),       // 애니메이션 동작 시간
        {                       // 옵션
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut,
            delay: random(0, dly)
        }
    );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// Scroll Spy (Scroll Magic Library)
const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function (spyEl) {
    // Scene() : 감시할 때 필요한 메소드
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,       // 보여짐 여부를 감시할 요소 지정
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});


// Year
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();