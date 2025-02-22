//============================================================================//
// FUNCTIONS                                                                  //
//============================================================================//

function BLOG_GenerateDate ()
{
  const TimeNow = new Date().toISOString();
  const HTML    = `const TimeNow = new Date().toISOString();
console.log(TimeNow);
--> ${TimeNow}`;
  
  document.getElementById("blog-date").innerHTML = HTML;
}

function BLOG_Main()
{
  const Button = document.getElementById("button-current-date");
  Button.addEventListener("click", BLOG_GenerateDate);
  Button.click();
}

//============================================================================//
// MAIN                                                                       //
//============================================================================//

document.addEventListener("DOMContentLoaded", BLOG_Main);
