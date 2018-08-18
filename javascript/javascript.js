function toggleNav() {
    var element = document.getElementById("card");
    if (element.style.width == "50em") {
      element.style.width = "0px";
    } else {
      element.style.width = "50em";
    }
  }
  function openNav() {
    document.getElementById("next").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("exit").style.width = "0";
  }
  /* Trying to build a for loop for photo cycling */
  $("#photoOne").click(function() { 
    $("#card").css("backgroundImage", "url(images/water.jpeg");
    });
    $("#photoTwo").click(function() { 
    $("#card").css("backgroundImage", "url(images/mountain.jpeg");
    });
    $("#photoThree").click(function() { 
    $("#card").css("backgroundImage", "url(images/confusedLady.jpeg");
    });
    $("#photoFour").click(function() { 
    $("#card").css("backgroundImage", "url(images/doggo.jpeg");
    });
    $("#photoFive").click(function() { 
    $("#card").css("backgroundImage", "url(images/coffee.jpeg");
    });
    $("#photoSix").click(function() { 
    $("#card").css("backgroundImage", "url(images/water.jpeg");
    });
