(function(){
	var navSlide = document.getElementById("nav_slide");
	var navSlideImg = document.getElementById("nav_slide_img");
	var slideArrLef = document.getElementById("slide_arr_lef");
	var slideArrRig = document.getElementById("slide_arr_rig");
	var slideDotsItems = document.getElementById("slide_dots_items");
	var slideDotsLists = slideDotsItems.getElementsByTagName("li");
	var num = 1;

	var imSrc = function() {
		if (num<1) {
			num = 4;
		}
		if (num>4) {
			num = 1;
		}
		navSlideImg.src = "images/slide-" + num + ".jpg";
	}
	slideArrLef.onclick = function() {
		num--;
		imSrc();
		dotsSelec();
	}
	slideArrRig.onclick = function() {
		num++;
		imSrc();
		dotsSelec();
	}
	var startSlide = function() {
		timer = setInterval(function() {
			slideArrRig.onclick();
		},1000)
	}
	startSlide();
	
	navSlide.onmouseover = function() {
		clearInterval(timer)
	}
	navSlide.onmouseout = function() {
		startSlide();
	}
	for (var i = 0; i < slideDotsLists.length; i++) {
		slideDotsLists[i].setAttribute("num",i+1);
		slideDotsLists[i].onclick = function() {
			num = parseInt(this.getAttribute("num"))
			navSlideImg.src = "images/slide-" + num + ".jpg";
			dotsSelec();
		}
	}
	var dotsSelec = function() {
		for (var i = 0; i < slideDotsLists.length; i++) {
			if (slideDotsLists[i].className = "active") {
				slideDotsLists[i].className = "";
			}
		}
		slideDotsLists[num-1].className = "active";
	}
}())