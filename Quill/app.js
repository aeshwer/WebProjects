;(function(){
     
    var clearButton = document.getElementById("GiveMeHTML");
    var htmlShowArea = document.getElementById("htmlShowArea");
    
    function quillGetHTML(inputDelta) {
    var tempCont = document.createElement("div");
    (new Quill(tempCont)).setContents(inputDelta);
    return tempCont.getElementsByClassName("ql-editor")[0].innerHTML;
    }
    
    function retrieveHTML(){   
       var delta = quill.getContents();  
        htmlShowArea.innerHTML = quillGetHTML(delta);
       //alert(quillGetHTML(delta));
       
   }
           
    quill.clipboard.dangerouslyPasteHTML('<p>Trade with <u>Trade Id: </u><strong>3774 </strong>Saved. </p><p>This is line 2</p> <p>This is line 3</p>');    
        
    //Adding events
    clearButton.addEventListener("click",retrieveHTML);
    
}());
