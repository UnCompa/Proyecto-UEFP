document.addEventListener("astro:after-swap",()=>{localStorage.theme==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")});
