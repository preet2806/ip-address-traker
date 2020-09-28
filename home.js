const track = () => 
{

    var data = {
        "ipAddress":document.getElementById("inputIp").value,
        "apiKey":"at_caMw5V6rzmdlMKcMNKDFJWaiSPbHm"
    };
     console.log(data) 
     
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function() 
        {
            if(this.readyState === 4) 
            {
                if(this.status==200 || this.status==201)
                {
            
                        let newData = JSON.parse(this.responseText)                    
                        console.log(newData);
                }
                else{
                    alert("invalid IP");
                }
            }
        });
        xhr.open("GET","https://geo.ipify.org/api/v1?apiKey=at_caMw5V6rzmdlMKcMNKDFJWaiSPbHm&ipAddress="+data.ipAddress);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
        
        
}