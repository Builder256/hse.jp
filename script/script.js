document.addEventListener('DOMContentLoaded', () => {
				let navMenu_burger = document.getElementById('navMenu-burger');
				navMenu_burger.addEventListener('click', () => {
								let navbar = document.getElementById('navbar');
								let navMenu_burger_status = navMenu_burger.innerText;
								if(navMenu_burger_status == 'menu'){
								    //メニュー表示
								    navbar.classList.add('navbar-open');
								    navMenu_burger.innerText = 'close';
								}else{
								    //メニュー非表示
								    navbar.classList.remove('navbar-open')
												navMenu_burger.innerText = 'menu';
								}
				});
});
