function calc_charge(unit)
{
    energy_charge=unit * rate_above_400
    reduced_unit=unit
    subsidised_charge=0.00

    if(reduced_unit > 400)
    {
        subsidised_charge+=(reduced_unit-400)*rate_above_400;
        reduced_unit=400
    }
    if(reduced_unit > 200)
    {
        subsidised_charge+=(reduced_unit-200)*rate_400;
        reduced_unit=200
    }
    if(reduced_unit > 0)
        subsidised_charge+=reduced_unit*rate_200;

    elec_duty=(elec_duty_rate*energy_charge)/100
    subsidy=energy_charge-subsidised_charge-subsidy_extra
    total_assesment=energy_charge+fixed_charge+elec_duty
    total_payable=total_assesment-subsidy

    $("#show-unit").text(unit+"(KW)")
    $("#show-energy-charge").text("₹"+energy_charge.toFixed(2))
    $("#show-fixed-charge").text("₹"+fixed_charge.toFixed(2))
    $("#show-electricity-duty").text("₹"+elec_duty.toFixed(2))
    $("#show-total-assesment").text("₹"+total_assesment.toFixed(2))
    $("#show-subsidy").text("₹"+subsidy.toFixed(2))
    $("#show-total-payable").text("₹"+total_payable.toFixed(2))
}