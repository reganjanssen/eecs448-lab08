const imgArray = ['image1.jpeg','image2.jpeg','image3.jpeg','image4.jpeg','image5.jpg']
var index = 0;

function next()
{
    index += 1;
    document.getElementById("img1").src = imgArray[index%5];
}

function previous()
{
    if (index == 0){
        index = 4;
    }
    else {
        index -= 1;
    }
        document.getElementById("img1").src = imgArray[index%5];
}