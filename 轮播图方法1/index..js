(function() {
	var navSlide = document.getElementById("nav_slide");
	var navSlideItem = document.getElementById("nav_slide_item");
	var navSlideList = navSlideItem.getElementsByTagName("li");
	var slideArrLef = document.getElementById("slide_arr_lef");
	var slideArrRig = document.getElementById("slide_arr_rig");
	var slideDotsItems = document.getElementById("slide_dots_items");
	var slideDotsLists = slideDotsItems.getElementsByTagName("li");
	var sLeft = 0;
	var num;

	var imgPosit = function() {
		navSlideItem.style.position = "absolute";
		navSlideItem.style.left = sLeft + "px";
	}
	var numLimit = function() {
		if (sLeft > 0) {
			sLeft = -1920;
		}
		if (sLeft < -1920) {
			sLeft = 0;
		}
	}
	slideArrLef.onclick = function() {
		sLeft += 640;
		numLimit();
		imgPosit();
		dotsSelec();
	}
	slideArrRig.onclick = function() {
		sLeft -= 640;
		numLimit();
		imgPosit();
		dotsSelec();
	}
	var slideStart =  function(){
		slideStart = setInterval(function(){
			slideArrRig.onclick();
		},1000);
	}

	navSlide.onmouseover = function() {
		clearInterval(slideStart);
	};
	navSlide.onmouseout = slideStart;
	slideStart();

	for (var i = 0; i < slideDotsLists.length; i++) {
		slideDotsLists[i].setAttribute("num",i);
		slideDotsLists[i].onclick = function() {
			var numClic = parseInt(this.getAttribute("num"))+1;
			sLeft = -(numClic-1) * 640;
			imgPosit();
			dotsSelec();
		}
	}
	var dotsSelec = function() {
		var num = parseInt(-(sLeft/640));
		for (var i = 0; i < slideDotsLists.length; i++) {
			if (slideDotsLists[i].className = "active") {
				slideDotsLists[i].className = "";
			}
		}
		slideDotsLists[num].className = "active";
	}
}())
