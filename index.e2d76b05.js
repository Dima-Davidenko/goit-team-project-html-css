!function(){function e(){var e=document.body.offsetHeight,t=document.querySelector(".js-canvas-container"),i=document.querySelector(".background");i&&t.removeChild(i),i=document.createElement("div"),t.append(i),i.className="background",i.style.height=e+"px"}function t(){for(var e=document.querySelector(".background"),t=document.body.offsetHeight,i=document.body.offsetWidth,n=0;n<=t-100;n+=40+Math.round(200*Math.random())){var s=document.createElement("div");s.className="circle circle--"+Math.round(2*Math.random()+1),e.append(s);var a=40+Math.round(60*Math.random()),o=Math.round(i*Math.random());s.style.height=a+"px",s.style.top=n+"px",s.style.left=o+"px";var r=i-o-a;s.style.width=r>=0?a+"px":a+r+"px"}}function i(){for(var e=document.body.offsetHeight,t=document.querySelector(".background"),i=Math.round(e/3),n=window.innerHeight,s=[],a=[],o=0;o<=2;o+=1)s[o]=document.createElement("div"),t.append(s[o]),s[o].className="donat-bg-"+(o+1),s[o].style.height=i+"px",a[o]=0-i*o+window.pageYOffset+n/2-180,s[o].style.cssText="height: "+i+"px; background-position: 50% "+a[o]+"px;";window.addEventListener("scroll",(function(){for(var e=window.innerHeight,t=0;t<=2;t+=1)a[t]=0-i*t+window.pageYOffset+e/2-180;window.pageYOffset<i-300&&(s[0].style.cssText="height: "+i+"px; background-position: 50% "+a[0]+"px;"),window.pageYOffset>i-e/2-300&&window.pageYOffset<2*i-200&&(s[1].style.cssText="height: "+i+"px; background-position: 50% "+a[1]+"px;"),window.pageYOffset>2*i-e/2-300&&window.pageYOffset<3*i-300&&(s[2].style.cssText="height: "+(i+1e3)+"px; background-position: 50% "+a[2]+"px;")}))}e(),t(),i(),function(){var n=document.body.offsetWidth,s=0;s=n>=1280?3:n<1280&&n>=768?2:1,console.log(s);var a=s;window.addEventListener("resize",(function(){var n=document.body.offsetWidth,s=0;a!==(s=n>=1280?3:n<1280&&n>=768?2:1)&&(this.setTimeout(e,500),this.setTimeout(t,510),this.setTimeout(i,520),a=s,console.log("rePaint"),console.log(a))}))}();var n=document.querySelector(".mob-menu"),s=document.querySelector(".mob-menu__button-open"),a=document.querySelector(".mob-menu__button-close"),o=function(){n.classList.toggle("is-mob-menu-open")};s.addEventListener("click",o),a.addEventListener("click",o),document.querySelectorAll('a[href^="#"').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=document.querySelector(".mob-menu");t.classList.contains("is-mob-menu-open")&&t.classList.toggle("is-mob-menu-open");var i=this.getAttribute("href").substring(1),n=document.getElementById(i).getBoundingClientRect().top-80;window.scrollBy({top:n,behavior:"smooth"})}))}));var r=document.querySelector(".stash-text"),c=document.querySelector(".stash-text-btn"),l=document.querySelector(".stash-text-btn-less"),d=document.querySelector(".js-read-more-txt"),m=document.querySelector(".js-btn-read-more-open"),u=document.querySelector(".js-btn-read-more-close"),_=function(){r.classList.toggle("invisible"),c.classList.toggle("invisible"),l.classList.toggle("invisible")},g=function(){d.classList.toggle("invisible"),m.classList.toggle("invisible"),u.classList.toggle("invisible")};m.addEventListener("click",g),c.addEventListener("click",_),u.addEventListener("click",g),l.addEventListener("click",_),document.documentElement.clientWidth>=1280&&(r.classList.contains("invisible")&&r.classList.toggle("invisible"),d.classList.contains("invisible")&&d.classList.toggle("invisible")),window.addEventListener("resize",(function(){document.documentElement.clientWidth>=1280&&(r.classList.contains("invisible")&&r.classList.toggle("invisible"),c.classList.contains("invisible")||c.classList.toggle("invisible"),l.classList.contains("invisible")||l.classList.toggle("invisible"),d.classList.contains("invisible")&&d.classList.toggle("invisible"),m.classList.contains("invisible")||m.classList.toggle("invisible"),u.classList.contains("invisible")||u.classList.toggle("invisible")),document.documentElement.clientWidth<1280&&(r.classList.contains("invisible")||(r.classList.add("invisible"),c.classList.remove("invisible"),l.classList.add("invisible")),d.classList.contains("invisible")||(d.classList.add("invisible"),m.classList.remove("invisible"),u.classList.add("invisible")))})),$(document).ready((function(){$(".reviews-slide").slick({arrows:!0,slidesToShow:3,centerMode:!0,centerPadding:"0px",speed:1e3,waitForAnimate:!1,focusOnSelect:!0,responsive:[{breakpoint:1279,settings:{centerMode:!0,centerPadding:"0px",slidesToShow:3}},{breakpoint:767,settings:{slidesToShow:1,centerPadding:"0px",centerMode:!0,speed:500}}]})}));var p=$(".slide-number");$(".reviews-slide").on("init reInit afterChange",(function(e,t,i,n){var s=(i||0)+1;p.text(s+"/"+t.slideCount)}));var b=document.querySelector(".speakers-title"),f=document.querySelector(".speaker-first"),v=document.querySelector(".speaker-second"),h=document.querySelector(".speaker-third"),y=document.querySelector(".speaker-fourth"),w=b.offsetTop,L=document.querySelector(".program-title"),k=document.querySelector(".program-first"),S=document.querySelector(".program-second"),x=document.querySelector(".program-third"),q=document.querySelector(".program-fourth"),E=L.offsetTop,T=window.screen.height,N=!1,I=!1;window.addEventListener("scroll",(function(){N||window.pageYOffset>w-T+300&&(f.className="speaker-first speakers__item animate__animated animate__fadeIn animate__slower animate__delay-2s",v.className="speaker-first speakers__item animate__animated animate__fadeIn animate__slower animate__delay-3s",h.className="speaker-first speakers__item animate__animated animate__fadeIn animate__slower animate__delay-4s",y.className="speaker-first speakers__item animate__animated animate__fadeIn animate__slower animate__delay-5s",b.className="speakers-title section__title speakers__title animate__animated animate__fadeInUp animate__slower animate__delay-1s",N=!0),I||window.pageYOffset>E-T&&(k.className="program__thumb program__thumb-top animate__animated animate__bounceIn animate__delay-1s",S.className="program__thumb program__thumb-bottom animate__animated animate__bounceIn animate__delay-3s",x.className="program__thumb program__thumb-top animate__animated animate__bounceIn animate__delay-2s",q.className="program-fourth transparent program__thumb program__thumb-bottom animate__animated animate__bounceIn animate__delay-4s",L.className="program-title program__title animate__animated animate__bounceIn animate__delay-1s",I=!0)}));var M=document.querySelector(".up-button");window.onscroll=function(){document.body.scrollTop>400||document.documentElement.scrollTop>400?M.classList.add("up-button--visible"):M.classList.remove("up-button--visible")}}();
//# sourceMappingURL=index.e2d76b05.js.map