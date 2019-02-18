
window.onload = function()
{
    var btn = document.getElementById('btnJson').addEventListener('click', loadJson);
    
    var principal = document.getElementById('principal').value;
}


// Det som ska matas ut är årsräntan så bara en knapp och input box behöves. Samt en output text.

function loadJson()
{
    

    var requestURL = 'interest.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();


    request.onload = function()
    {
        var jsonResponse = request.response;
        calculateInterest(jsonResponse);
    }
    

    
    function calculateInterest()
    {
        if (principal >= jsonResponse[0].from && principal <= jsonResponse[0].up_to)
        {
         //  return document.getElementById('paragraph').innerHTML = jsonResponse[0].interest;
         console.log(jsonResponse[0].interest);
        }

        else if (principal >= jsonResponse[1].from && principal <= jsonResponse[1].up_to)
        {
         //  return document.getElementById('paragraph').innerHTML = jsonResponse[1].interest;
         console.log(jsonResponse[1].interest);
        }
           

    }
    
}

//var btn = document.getElementById('btnJSON').addEventListener('click', loadJson);
