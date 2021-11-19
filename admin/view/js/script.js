function Datainsert(){
    var sub_cat_name=document.getElementById("sub_cat_name").value;
    var sub_cat_code=document.getElementById("sub_cat_code").value;
    // if(sub_cat_name==''){
    //  var error2 ="plese fill sub_cat_name";
    // // alert("Are You Sure");
    //  }
    //  else(sub_cat_code==''){
    //     var error3 ="plese fill sub_cat_name";
    // //    alert("Are You Sure");
    //     }
    // //  alert("asdas");
    $.ajax({
        type:"POST",
        url:"show.php",
        // data:{
        //     name:sub_cat_name,
        //     code:sub_cat_code
        // },
        success: function(data){
            $('#show_data').html(data);
                document.getElementById("show_table_div").style.display="block";
            // alert("successfuly");
            }
            
            
        }
    });

}
// function ShowData(data){
//     alert("show");
// }