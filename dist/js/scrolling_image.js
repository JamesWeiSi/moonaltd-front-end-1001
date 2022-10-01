window.onload = function(){



    function marquee(){
       //Get element 'scrollingImg' & width of the 'scrollingImg'
       let imgsScrolling = document.getElementById("scrollingImg");
       let scrlWidth = imgsScrolling.scrollWidth/2;
       
       
         let timer = null;

       //Copy images to make no gap when scrolling
       imgs2.innerHTML = imgs1.innerHTML;
       
           
       //Back to 1st image after scrolling to the certain width
       if(imgsScrolling.scrollLeft >= scrlWidth)
            imgsScrolling.scrollLeft = 0;
            
                
        //Hold 2 seconds at each image
        if(imgsScrolling.scrollLeft % 800 == 0 ){
            timer = setTimeout(marquee, 3000);
        }else{
            timer = setTimeout(marquee, 0);
        }				
                         
            imgsScrolling.scrollLeft += 4;
    }
    marquee();
    

}