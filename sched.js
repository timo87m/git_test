  
     function myFunction() { 
    // use of Number() convert to number
    var ih = Number(document.getElementById("ih").value);
    var im = Number(document.getElementById("im").value);
    var iampm = (document.getElementById("iampm").value);
    var fh = Number(document.getElementById("fh").value);
    // Get the value of the input field with id="ih"
    var fm = Number(document.getElementById("fm").value); 
    var fampm = (document.getElementById("fampm").value);  
    var brks = Number(document.getElementById("brks").value);
    
    
        function to24(check){
        if (check =='PM') {return 12;} else {return 0;} };
        
       // example to use above fun : 
       //fh=fh+to24(fampm);


function tbase10(h,m,ampm){// time to base 10
 h=h+to24(ampm);
 return h+m/60;

}    


   var dT=tbase10(fh,fm,fampm)-tbase10(ih,im,iampm)// diff in og time
   var intervals=dT/(brks+1);// is og breaks in dec time

tbase10(10, 3,'AM')


var i;// will run it on brks
var timekeep=[];// make array to start keeping Time
timekeep[0]=tbase10(ih,im,iampm);// store first
for (i =0; i < 1+brks; i++) { // for arry of base 10 time
    if (i==0) {continue;}
    timekeep[i]=timekeep[i-1]+intervals;
}

function toAMPM(t){
    var h, m, ampm ;
    h=Math.floor(t);// get hours 
    


    m=Math.round((t-h)*60);// get min in dec
    
    if(h>12) // am pm check
      {h=h-12;
       ampm='PM'; }
    else { ampm='AM';}


    return [h,m,ampm];
    }
        



var timeobj=[];// store array here
for (i =1; i < 1+brks; i++) { // for arry of ampm time
timeobj[i]=toAMPM(timekeep[i]) + "<br />";

}






// below in dT i need to learn array splice like python
document.getElementById("demo").innerHTML = 


'difference in time: ' +toAMPM( dT)[0] +' : '+ toAMPM( dT)[1] +"<br />"
+ 'time interval: ' +  toAMPM (intervals)[0] + ' : '+toAMPM (intervals)[1]+ "<br />"+ timeobj

;
    
    
   
   
   
   
   
   var int=Dtime/(brks+1);// intervals based on splits
   var intH=Math.floor(int);// get hour
   var intM=Math.round(60*(int-intH));// get minutes
   
   
     
   // document.getElementById("demo").innerHTML = [ih,im, iampm, fh, fm, 
   
  // fampm, 'Time difference:  ',DH,DM,"Intervals: ",intH,intM];
    // above code displays
    //console.log( ih);
   } 
 