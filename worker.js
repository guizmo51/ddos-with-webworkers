//HTTP
self.onmessage=function(e){
 var xhr=null;
 var obj=e.data;
 var conf=JSON.parse(obj);

   try
   {
     xhr = new XMLHttpRequest(); 
   } catch(e)
   { 
     try { xhr = new ActiveXObject("Msxml2.XMLHTTP"); } 
     catch (e2)
    { 
       try { xhr = new ActiveXObject("Microsoft.XMLHTTP"); } 
       catch (e) {}
    }
  }
  
    xhr.onreadystatechange = function()
   { 
                    
     if(xhr.readyState == 4)
     {
        if(xhr.status == 200)
        { 
             self.postMessage(xhr.responseText); 
        } 
       else 
        { 
              
                   xhr.status + " " + xhr.statusText; 
       } 
    } 
 }; 
 if(conf.mode=="http"){

 	xhr.open("GET", "http://"+conf.ip+":80", true);  
 }else{

 	xhr.open("GET", "socket.php?ip="+conf.ip+"&port="+conf.por+"&mode="+conf.mode, true);  

 }
               
 xhr.send(null); 

}