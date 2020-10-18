/*
document.addEventListener( "DOMContentLoaded", function() {
    for ( const input of document.getElementById("phone_number"))
    {
        validateUSPhoneNumber();
    }

});
function validateUSPhoneNumber( inputText )
{
    const usPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if ( inputText.value.match(usPhone) ){ return true; } else { alert( "Invalid Phone Number" ); return false; }
}

function validateForm(){
    //Validate email, phone,
}
*/
   
/*
document.addEventListener( "DOMContentLoaded", function() {
    var data= {};
    $("#services option").each(function(i,el)
    {
    data[$(el).data("value")] = $(el).val();
    });

    console.log(data, $("#services option").val());
    $('#submit').click(function()
    {
        var value = $('#selected').val();
        alert($('#services[ value="'+value +'"]'.data('value')));
    });
});
*/

document.addEventListener("DOMContentLoaded", function () {
  // Source: https://www.dyn-web.com/tutorials/forms/select/multi-selected.php, 10/17/2020
  // arguments: reference to select list, callback function (optional)
  function getSelectedOptions(sel, fn) {
    var opts = [], opt;
    
    // loop through options in select list
    for (var i=0, len=sel.options.length; i<len; i++) {
        opt = sel.options[i];
        
        // check if selected
        if ( opt.selected ) {
            // add to array of option elements to return from this function
            opts.push(opt);
            
            // invoke optional callback function if provided
            if (fn) {
                fn(opt);
            }
        }
    }
    
    // return array containing references to selected option elements
    return opts;
  }

  // Source: https://www.dyn-web.com/tutorials/forms/select/multi-selected.php, 10/17/2020
  // example callback function (selected options passed one by one)
  function callback(opt) {
      // display in textarea for this example
      var display = document.getElementById('display');
      display.innerHTML += opt.value + ', ';

      // can access properties of opt, such as...
      //alert( opt.value )
      //alert( opt.text )
      //alert( opt.form )
  }

  // Source: https://www.dyn-web.com/tutorials/forms/select/multi-selected.php, 10/17/2020
  // anonymous function onchange for select list with id demoSel
  document.getElementById('services').onchange = function(e) {
      // get reference to display textarea
      var display = document.getElementById('display');
      display.innerHTML = ''; // reset
      
      // callback fn handles selected options
      getSelectedOptions(this, callback);
      
      // remove ', ' at end of string
      var str = display.innerHTML.slice(0, -2);
      display.innerHTML = str;
  };

  document.getElementById('input-form').onsubmit = function(e){
    //Personal Info Pull from Document
    const name = document.getElementById("full_name").value;
    const phone = document.getElementById("phone_number").value;
    const email = document.getElementById("email").value;
    //Address Testing area from Document
    const address_street = document.getElementById("address_street").value;
    const address_city = document.getElementById("address_city").value;
    const address_state = document.getElementById("address_state").value;
    const address_zip = document.getElementById("address_zip").value;
    if( address_street || address_city || address_state || address_zip )
    {
      var address = address_state + '\n' + address_state + ', ' + address_city + ', ' + address_zip;
    }
    else
    {
      var address = "";
    }

    //Services and Notes
    var service= getSelectedOptions( this.elements['services[]'] );
    const service_note = document.getElementById("service_note").value;

    //Payment 
    const payment_method = document.getElementById("payment_method").value;
    const payment_deposit = document.getElementById("payment_deposit").value;
    const payment_balance = document.getElementById("payment_balance").value;
    const payment_final = document.getElementById("payment_final").value;
    const picked_up_by = document.getElementById("picked_up_by").value;

    document.write("<h3>Here is your data: </h3>");
    //TODO: NEED TO INSERT DATA TO COOKIE TO MAINTAIN STATE
    document.write("Name: " + name + "<br/>" + "Address: " + address + "<br/>" 
    + "Phone: " + phone + "<br/>" + "Email: " + email + "<br/>");

    if(service.length != 0 ){
      document.write("<br />");
      for(i = 0; i < service.length; i++)
      {
        document.write("Service " + (i+1) + ": " + service[i].value + "<br />");
      }
    }
    else{
      document.write("<br />No service needed <br />");
    }

    document.write( "<br />Service Notes: " + service_note + "<br/>");
    document.write( "Paying via: " + payment_method +"<br />");
    document.write( 
        "Balance is: " + payment_balance + "<br/>"
        + "Depost is: " + payment_deposit + "<br/>" 
        + "Total Due: " + payment_final + "<br/>" 
        );
    document.write( "Will be picked up by: " + picked_up_by + "<br/>");

    //Reset button to reload form
    document.write( " \<input type=\"reset\" value=\"Reset\" onClick=\"window.location.reload()\"\>"
    );
    return false; //don't return online form
  }
});