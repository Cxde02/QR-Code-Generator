function genQR() {
  var gapi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
  var myimg = document.getElementById("img");
  var mytext = document.getElementById("qrtext").value;
  var mysize = document.getElementById("size").value;

  if (mytext !== "" && mysize == "100") {
    myimg.onload = function () {
      document.getElementById("loadingText").innerText = "";
    };
    myimg.src = gapi + "100x100" + "&chl=" + mytext;
    document.getElementById("loadingText").innerText =
      "Please wait...Generating QR Code";
    // https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=hello
  } else if (mytext !== "" && mysize == "150") {
    myimg.onload = function () {
      document.getElementById("loadingText").innerText = "";
    };
    myimg.src = gapi + "150x150" + "&chl=" + mytext;
    document.getElementById("loadingText").innerText =
      "Please wait...Generating QR Code";
  } else if (mytext !== "" && mysize == "200") {
    myimg.onload = function () {
      document.getElementById("loadingText").innerText = "";
    };
    myimg.src = gapi + "200x200" + "&chl=" + mytext;
    document.getElementById("loadingText").innerText =
      "Please wait...Generating QR Code";
  } else if (mytext !== "" && mysize == "250") {
    myimg.onload = function () {
      document.getElementById("loadingText").innerText = "";
    };
    myimg.src = gapi + "250x250" + "&chl=" + mytext;
    document.getElementById("loadingText").innerText =
      "Please wait...Generating QR Code";
  } else if (mytext !== "" && mysize == "300") {
    myimg.onload = function () {
      document.getElementById("loadingText").innerText = "";
    };
    myimg.src = gapi + "300x300" + "&chl=" + mytext;
    document.getElementById("loadingText").innerText =
      "Please wait...Generating QR Code";
  } else {
    alert("Please Enter Text");
  }
}
