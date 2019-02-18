
window.onload = function()
{
    var btn = document.getElementById('btnJson').addEventListener('click', loadJson);
    
    var principal = document.getElementById('principal').value;
}




// ----------------------------- Description of what the intention of this app is -----------------------------

// What should be fed out in the HTML is the interest depending on the number in the input. 
// JSON is the decider of what the yearly interest should be. The yearly interest is intended to be the output.


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
