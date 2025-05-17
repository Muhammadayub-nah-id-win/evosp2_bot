let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#af0808";

btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.show();
	}
});
btn2.addEventListener("click", function (){
    tg.MainButton.show()
});
btn3.addEventListener("click", function (){
    tg.MainButton.show()
});