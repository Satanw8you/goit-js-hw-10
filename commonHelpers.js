import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f,i}from"./assets/vendor-651d7991.js";const t=document.querySelector("button[data-start]"),a=document.querySelector("#datetime-picker"),h=document.querySelector("span[data-days]"),p=document.querySelector("span[data-hours]"),y=document.querySelector("span[data-minutes]"),S=document.querySelector("span[data-seconds]");t.disabled=!0;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const n=e[0],s=new Date;n<s?(t.disabled=!0,i.error({title:"Error",message:"Please choose a date in the future"})):(t.disabled=!1,i.success({title:"Awesome",message:"You need to press START"}))}};f(a,D);function b(e){const c=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:u,minutes:d,seconds:m}}function o(e){return e.toString().padStart(2,"0")}t.addEventListener("click",T);function T(){t.disabled=!0,a.disabled=!0;const e=new Date(a.value),n=setInterval(()=>{const s=new Date,r=e-s;if(r<=0){clearInterval(n),a.disabled=!1,i.success({title:"Time is up!",message:"The timer has finished."});return}const{days:l,hours:c,minutes:u,seconds:d}=b(r);h.textContent=o(l),p.textContent=o(c),y.textContent=o(u),S.textContent=o(d)},1e3)}
//# sourceMappingURL=commonHelpers.js.map
