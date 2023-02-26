const darkSwitchIcon = document.querySelector("#dark-switch-icon");
const darkSwitch = document.querySelector("#dark-switch")
const darkText = document.querySelector("#dark-text")
const darkChangeText = document.querySelector("#dark-text-change")
const html = document.documentElement;
let isDarkMode = false;

// Switch theme function
const toggleTheme = () => {
    isDarkMode = !isDarkMode;
    switchTheme()
}

const toDark = () => {
    darkSwitchIcon.classList.add('translate-x-full', 'rotate-[360deg]','bg-slate-900')
    darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-100"></i>`
    // darkChangeText.innerText = 'Dark'
    darkSwitch.classList.remove('bg-slate-800')
    darkSwitch.classList.add('bg-slate-100')
    localStorage.setItem('data-theme', 'dark')
    html.classList.add('dark')
    darkText.classList.add('-translate-x-7')
    darkText.innerText = 'ON'
}

const toLight = () => {
    darkSwitchIcon.classList.remove('translate-x-full', 'bg-slate-900')
    // darkChangeText.innerText = 'Light'
    darkSwitch.classList.remove('bg-slate-100')
    darkSwitch.classList.add('bg-slate-800')
    localStorage.removeItem('data-theme')
    html.classList.remove('dark')
    darkText.classList.remove('-translate-x-7')
    darkText.innerText = 'OFF'
    darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`
    setTimeout(() => {
        darkSwitchIcon.classList.remove('rotate-[360deg]')
    }, 200)
}

const switchTheme = () => {
    isDarkMode ? toDark() : toLight()
    // or
    // if (isDarkMode) {
    //     toDark()
    // } else {
    //     toLight()
    // }
}


// If you do reload the webpage,
// doesn't change you choose theme.
// This `dataTheme` function save permentaly choose theme.

const dataTheme = localStorage.getItem('data-theme')

dataTheme === 'dark' ? toDark() : toLight();
// or
// if(dataTheme === 'dark') {
//     toDark()
// } else {
//     toLight()
// }



// Scroll Reveal
ScrollReveal().reveal('.headline',{
  delay: 300,
  origin: 'bottom',
  distance: '50px',
  interval: 300,
  scale: 0.85,
  reset: true
});

ScrollReveal().reveal('.midline',{
  delay: 500,
  origin: 'top',
  distance: '50px',
  interval: 300,
  scale: 0.9,
  reset: true
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    // Document ထဲမှာရှိသမျှ section အားလုံးကို select လုပ်ထားပါတယ်။
    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
      // Browser ကို Scroll ဆွဲလိုက်တဲ့အခါ Scroll ရောက်နေတဲ့ Height ကိုရရှိနေမှာဖြစ်ပါတယ်။
      const scrollY = window.pageYOffset;           // scroll height

      // forEach နဲ့ ရှိသမျှ section အကုန်လုံးကို loop လုပ်လိုက်တာဖြစ်ပါတယ်။
      // current.offsetHeight လက်ရှိရောက်နေတဲ့ section ရဲ့ Height ကို ရယူလိုက်တာပါ။
      // current.offsetTop - 58 လက်ရှိရောက်နေတဲ့ section ရဲ့ Top ကို ရယူလိုက်တာပါ။
      // current.getAttribute("id") လက်ရှိရောက်နေတဲ့ section ရဲ့ id ကို ရယူလိုက်တာပါ။
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight, // get current height
          sectionTop = current.offsetTop - 58,      // get current section of height
          sectionId = current.getAttribute("id");   // get current section id

        // scrollyY သည် sectionTop ထက်ကြီးနေတယ်ဆိုရင် True အနေနဲ့ သတ်မှတ်မှာဖြစ်ပြီး
        // လက်ရှိရောက်နေတဲ့ section ရဲ့ Top နဲ့ လက်ရှိရောက်နေတဲ့ section ရဲ့ Height နှစ်ခုကိုပေါင်းပြီး
        // scrollyY သည် ငယ်နေတယ်(သို့) ညီနေတယ်ဆိုရင် True ကိုရရှိမှာပါ။
        // && သည် Comparsion Operator ဖြစ်ပြီး နှင်းယှဉ်ထားတဲ့ တန်ဖိုးနှစ်ခုလုံး True && True ဖြစ်မှသာ
        // if statement ကိုအလုပ်လုပ်မှာဖြစ်ပါတယ်။ နှိုင်းယှဉ်လိုက်တဲ့ တန်ဖိုးက false ဖြစ်နေလျှင် else ကို အလုပ်လုပ်သွားမှာဖြစ်ပါတယ်။
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector("a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
          document
            .querySelector("a[href*=" + sectionId + "]").classList.remove("active-link");
        }
      });
    }
    // function သည် ကြေညာလိုက်ရုံနဲ့ အလုပ်မလုပ်ပါဘူး။
    // သူ့ကို ပြန်ခေါ်သုံးမှသာ အလုပ်လုပ်တာဖြစ်ပါတယ်။
    // ဒါကြောင့် Browser ကို Scroll လုပ်လိုက်လျှင် scrollActive ကို အလုပ်လုပ်ပေးပါလို့ပြောလိုက်ခြင်းဖြစ်ပါတယ်။
    window.addEventListener("scroll", scrollActive);





// Waypoint for Scroll Section Navbar
const navControl = document.querySelector('.nav-control');
var waypoint = new Waypoint({
    element: document.getElementById('chat'),
    handler: function(direction) {
      if(direction === "down"){
        navControl.classList.add('fixed','w-full','shadow-lg', 'animate__fadeInDown')
      }else{
        navControl.classList.remove('fixed','w-full','shadow-lg','animate__fadeInDown')

      }
    },
    offset: '75%'
  })


// Mobile Menu
const menuOpen = document.querySelector('.menu-open');
const mobieMenu = document.querySelector('#mobile-menu');
const mobieMenuClose = document.querySelector('#mobile-menu-close');

menuOpen.addEventListener('click',()=>{
    mobieMenu.style.left='0px';
})

mobieMenuClose.addEventListener('click',()=>{
    mobieMenu.style.left='-100%';
})

// for link
const mobileMenuLink=document.querySelectorAll('.mobile_menu_link');

for(let i=0; i<mobileMenuLink.length; i++){
 

  mobileMenuLink[i].addEventListener('click',()=>{
    mobieMenu.style.left='-100%';
  })

}


