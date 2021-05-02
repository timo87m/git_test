<!DOCTYPE html>
<html>

<head>
<link rel="stylesheet" href="mystyle.css">
<!--the above imports an external .css-->

</head>
  
<body>
<!--comment-->


<div class="container">
<div class='d1'>
 
<!-- -->
<object  data="">scheduler.html</object>

</div>  
 
  
  
 <div class="d2">
   <!--main  h1 and p...-->
   <h1>Scheduler</h1>

   <p>Input from start time to end time and how many times to break it 
   
   up. <br>FROM:   </p> 
   
   <! COMMENT>
   
   <input min=1 max= 12 type='number' id="ih" value=8>:</input>
   <! created a num box  with id "ih">
   
   <input min=0 max= 60 type="number" id="im" value=00></input>
   <! created a txt box  with id "ih">
   
   
   <select name="iampm" id="iampm">
     <option value="AM">AM</option>
     <option value="PM">PM</option>
   </select>
   <! select AM or PM>
   
   <!- ------------ this is the final input>
   <p>TO: <br></p>
   <input min=1 max= 12 type="number" id="fh" value=10>:</input>
   <! created a num box  with id "ih">
   
   <input min=0 max= 60 type="number" id="fm" value=30></input>
   <! created a txt box  with id "ih">
   
   
   <select name="fampm" id="fampm"  >
     <option value="AM">AM</option>
     <option value="PM" >PM</option>
        
   </select>
   <!- select AM or PM>
   <br>
   <input min=1 max= 100 type="number" id="brks" value=1> < 
   
   Splits</input>
   <!- >
   
   <button type="button" onclick="myFunction()">sub</button>
   <!-- the above button actually just called a function but didn't save 
   
   id "var"-->
   
   <p id="demo"></p>
   <! element with id "demo">
   
   
   <script src='sched.js'></script>

  
     
  </div>
</div>

   
  
  
</body>
</html>
