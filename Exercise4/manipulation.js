function change() {
    var redBorder = document.getElementById("redBorder").value;
    var blueBorder = document.getElementById("blueBorder").value;
    var greenBorder = document.getElementById("greenBorder").value;
    var widthBorder = document.getElementById("widthBorder").value;
    var redColor = document.getElementById("redColor").value;
    var blueColor = document.getElementById("blueColor").value;
    var greenColor = document.getElementById("greenColor").value;

    if (redBorder < 0 || redBorder > 255 || blueBorder < 0 || blueBorder > 255 || greenBorder < 0 || greenBorder > 255) {
        alert("Please enter a value within the specified RBG range!");
    }

    else if (widthBorder < 0) {
        alert("Please enter a width that is greater than zero.");
    }

    else if (redColor < 0 || redColor > 255 || blueColor < 0 || blueColor > 255 || greenColor < 0 || greenColor > 255) {
        alert("Please enter a value within the specified RBG range!");
    }

    text.style.borderColor = 'rgb('+redBorder+','+greenBorder+','+blueBorder+')';
    text.style.backgroundColor = 'rgb('+redColor+','+greenColor+','+blueColor+')';
    text.style.borderWidth = widthBorder+'px';

}