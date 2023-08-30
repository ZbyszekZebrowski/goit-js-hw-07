!function(){var e=document.querySelector(".login-form");e.addEventListener("submit",(function(r){r.preventDefault();var t=new FormData(r.currentTarget),n={};if(t.forEach((function(e,r){n[r]=e})),!n.email||!n.password)return void alert("All fields must be filled!");console.log(n),e.reset()}))}();
//# sourceMappingURL=task-08.ccecb636.js.map
