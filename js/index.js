var x = 0;
function classroom()
{
    if(x == 0)
    {
        document.getElementById("mobile_nav").style.display = "flex";
        x++;
    }
    else
    {
        document.getElementById("mobile_nav").style.display = "none";
        x = 0;
    }
        }