function isValidNumberKey(evt, field_id, error_id, length) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        // alert('hi');

        $('#'+error_id).html('Only Number');
        $('#'+error_id).addClass('label_error');
        $('#'+field_id).addClass('field_error');
        $('#'+field_id).next('.bar').addClass('bar_red');

        // $('#'+field_id).parents('.form-group').find('.floating-label').after('<span id="#'+error_id+'"></span>');

        event.preventDefault();
        return false;
    } else {
        if ($('#'+field_id).val().length==length-1) {
            $('#'+error_id).html('');
            $('#'+error_id).removeClass('label_error');
            $('#'+field_id).removeClass('field_error');
            $('#'+field_id).next('.bar').removeClass('bar_red');
        }else{
            $('#'+error_id).html('Invalid length ('+length+' digit only)');
            $('#'+error_id).addClass('label_error');
            $('#'+field_id).addClass('field_error');
            $('#'+field_id).next('.bar').addClass('bar_red');
        }
        return true;
    }
}

function isValidWebsiteKey(evt, field_id, error_id) {
    // var regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
    var regex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
    var check = regex.test($('#'+field_id).val());
    if(check) {
            $('#'+error_id).html('');
            $('#'+error_id).removeClass('label_error');
            $('#'+field_id).removeClass('field_error');
            $('#'+field_id).next('.bar').removeClass('bar_red');
    } else {
        $('#'+error_id).html('Invalid URL. Example www.boovent.com');
        $('#'+error_id).addClass('label_error');
        $('#'+field_id).addClass('field_error');
        $('#'+field_id).next('.bar').addClass('bar_red');
    }
}

//----------------------------- VALIDATE EMAIL ---------------------------------------------//
function isValidEmail(email, input_id) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (regex.test(email)==true) {
    $("#"+input_id).parent().find(".error_text").hide();
    return regex.test(email);
  }else{
    // alert('email should be proper format of 10 digit!');
    $("#"+input_id).parent().find(".error_text").show();
    $("#"+input_id).parent().find(".error_text").text("Invalid Email Format!");
    return regex.test(email);
  }

  // return regex.test(email);
}

//---------------------------- VALIDATE INDIAN PHONE ---------------------------------------------//
function isValidContact(contact, input_id) {
  var regex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;

  if (regex.test(contact)==true) {
    $("#"+input_id).parent().find(".error_text").hide();
    return regex.test(contact);
  }else{
    // alert('contact should be proper format of 10 digit!');
    $("#"+input_id).parent().find(".error_text").show();
    $("#"+input_id).parent().find(".error_text").text("contact should be proper format of 10 digit!");
    return regex.test(contact);
  }
  // return regex.test(contact);
}

//--------------------------- VALIDATE INDIAN NAME ---------------------------------------------//
function isValidName(name,input_id) {
  var regex = /^[A-Za-z ]{3,20}$/;
  
  // return regex.test(name);
  // alert(name+input_id);

  if (regex.test(name)==true) {
    $("#"+input_id).parent().find(".error_text").hide();
    return regex.test(name);
  }else{
    // alert('Name should be min 3-alpha-char!');
    $("#"+input_id).parent().find(".error_text").show();
    $("#"+input_id).parent().find(".error_text").text("Invalid format!");
    return regex.test(name);
  }
}

//---------------------------- VALIDATE INDIAN DATE ---------------------------------------------//
function isValidDate(date,input_id) {
  var regex = /^(?=.+([\/.-])..\1)(?=.{10}$)(?:(\d{4}).|)(\d\d).(\d\d)(?:.(\d{4})|)$/;
  
  if (regex.test(date)==true) {
    $("#"+input_id).parent().find(".error_text").hide();
    return regex.test(date);
  }else{
    // alert('date should be min 3-alpha-char!');
    $("#"+input_id).parent().find(".error_text").show();
    $("#"+input_id).parent().find(".error_text").text("Invalid Date format!");
    return regex.test(date);
  }
  // return regex.test(date);
}

//---------------------------- VALIDATE PASSWORD ---------------------------------------------//
function isValidPassword(password,input_id) {
  var regex = /^[A-Za-z0-9]{6,20}$/;

  if (regex.test(password)==true) {
    $("#"+input_id).parent().find(".error_text").hide();
    return regex.test(password);
  }else{
    // alert('password should be min 3-alpha-char!');
    $("#"+input_id).parent().find(".error_text").show();
    $("#"+input_id).parent().find(".error_text").text("Invalid password format!");
    return regex.test(password);
  }

  // return regex.test(password);
}

//---------------------------- VALIDATE INDIAN ZIP CODE ---------------------------------------------//
function isValidZipCode(zipcode, input_id) {
  var regex = /^([1-9])([0-9]){5}$/;

  if (regex.test(zipcode)==true) {
    $("#"+input_id).parent().find(".error_text").hide();
    return regex.test(zipcode);
  }else{
    // alert('zipcode should be proper format of 10 digit!');
    $("#"+input_id).parent().find(".error_text").show();
    $("#"+input_id).parent().find(".error_text").text("Invalid zip/postal!");
    return regex.test(zipcode);
  }
  // return regex.test(zipcode);
}

//--------------------------- VALIDATE INDIAN ADDRESS ---------------------------------------------//
function isValidTextOnly(text_only,input_id) {
  var regex = /^[A-Za-z ]{4,20}$/;
  
  // return regex.test(text_only);
  // alert(text_only+input_id);

  if (regex.test(text_only)==true) {
    $("#"+input_id).parent().find(".error_text").hide();
    return regex.test(text_only);
  }else{
    // alert('text_only should be min 3-alpha-char!');
    $("#"+input_id).parent().find(".error_text").show();
    $("#"+input_id).parent().find(".error_text").text("Invalid text_only!");
    return regex.test(text_only);
  }
}