$(document).ready(function(){
    $("#btnn").click(function(e){
        e.preventDefault()
      var inp = $("#one").val()
     
      var inpemail = $("#two").val()
     
      var inpmobile = $("#three").val()
      
                                            //    add employs
  $("table tbody").append(`<tr>
        <td>${inp}</td>
        <td>${inpemail}</td>
       <td>${inpmobile}</td>
        <td>
          
            <BUTTON ID="REMOVE" class="dd" >DELETE</BUTTON>
            </td>
           
     </tr>`)
                                          // remove
$("tr").on( 'click','.dd',function(){
    $(this).parent().parent().remove();
})
    })
})