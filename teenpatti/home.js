var index = 1;
var slider = document.getElementsByClassName('slide');
showslider(index);

function prev(n)
{
  showslider(index += n);
}

function next(n)
{
  showslider(index = n);
}

function showslider(n)
{
  var i;
  if(n > slider.length)
  { index = 1}

  if(n < 1)
  {
    index = slider.length;
  }
  for ( i=0 ; i<slider.length; i++)
  {
    slider[i].style.display = "none";
  }
  slider[index-1].style.display = "block";
}
window.onload
{
  setInterval(() => {
    index+=1;
    showslider(index+1)
  }, 5000);
}

var topButton = document.getElementById("top");

window.onscroll = function()
{
  screenScroll()
};

function screenScroll()
{
  if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)
  {
    topButton.style.display = "block";
  }
  else
  {
    topButton.style.display = "none" ;
  }
}

topButton.addEventListener("click" , () => 
{
  document.documentElement.scrollTop = 0;

 document.body.scrollTop = 0 ;
})

