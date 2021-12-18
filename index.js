$(function(){
	$("#header").load("header.html"); 
	$("#footer").load("footer.html"); 
});

var myYearData = {
  "2021": 3,
  "2020": 5
};

var selectedYear = null;
var selectedPage = null;
			
// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function openSidebar() {
	if (mySidebar.style.display === 'block') {
	  mySidebar.style.display = 'none';
	  overlayBg.style.display = "none";
	} 
	else {
	  mySidebar.style.display = 'block';
	  overlayBg.style.display = "block";
	}
}

// Close the sidebar with the close button
function closeSidebar() {
	mySidebar.style.display = "none";
	overlayBg.style.display = "none";
}

function onSelectYear(event) {
	$("#paginationPane").empty();
	
	selectedYear = event.target.id;
	selectedPage = 1;
	
	$('#question-holder').load(selectedYear + ".html " + "#Q1");
	
	var numberOfPages = myYearData[selectedYear];
	
	var firstPage = document.createElement('a');
	$(firstPage).addClass("w3-button w3-black")
				.attr("id", 1)
				.html(1)
				.appendTo($("#paginationPane"))
				.click(function(e) {
					var previousPageElement = document.getElementById(selectedPage);
					$(previousPageElement).removeClass("w3-black")
									.addClass("w3-hover-black");
					$('#question-holder').load(selectedYear + ".html " + "#Q" + e.target.id);
					
					selectedPage = e.target.id;
					
					var currentPageElement = document.getElementById(selectedPage);
					$(currentPageElement).removeClass("w3-hover-black")
									.addClass("w3-black");
				});
	
	for(var i = 1; i < numberOfPages; i++) {
		var page = document.createElement('a');
		$(page).addClass("w3-button w3-hover-black")
				.attr("id", i + 1)
				.html(i + 1)
				.appendTo($("#paginationPane"))
				.click(function(e) {
					var previousPageElement = document.getElementById(selectedPage);
					$(previousPageElement).removeClass("w3-black")
									.addClass("w3-hover-black");
					$('#question-holder').load(selectedYear + ".html " + "#Q" + e.target.id);
					
					selectedPage = e.target.id;
					
					var currentPageElement = document.getElementById(selectedPage);
					$(currentPageElement).removeClass("w3-hover-black")
									.addClass("w3-black");
				});
	}
}
