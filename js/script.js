$("#calc-bill").click(calc_bill_call)
$('#enter-unit').keypress(function (e) {
    var key = e.which;
    if(key == 13) 
        calc_bill_call()
}); 


function calc_bill_call(){
    $(".error").html("").hide()
    entered_unit=$("#enter-unit").val()
    if (entered_unit != "") {
        calc_charge(entered_unit)
        $(".generate").slideDown("fast")
        $(".result-box").slideUp("fast")
        setTimeout(function(){
            $(".generate").slideUp("fast")
            $(".result-box").slideDown("fast")
        },2000)
    }
    else
    {
        $("#unit-error").html('<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Unit Cannot be empty!')
        $("#unit-error").show("fast")
    }
}