const e=document.querySelector(".login-form");e.addEventListener("submit",(function(t){t.preventDefault();const r=new FormData(t.currentTarget),o={};if(r.forEach(((e,t)=>{o[t]=e})),!o.email||!o.password)return void alert("All fields must be filled!");console.log(o),e.reset()}));
//# sourceMappingURL=task-08.306e5a3b.js.map
