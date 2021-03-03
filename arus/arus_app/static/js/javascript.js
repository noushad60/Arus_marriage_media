function divisionsList() {
	// get value from division lists
	var diviList = document.getElementById('divisions').value;

	// set barishal division districts
	if(diviList == 'Barishal'){
		var disctList = '<option class="option" disabled selected>Select District</option><option class="option" value="Barguna">Barguna</option><option class="option" value="Barishal">Barishal</option><option class="option"  value="Bhola">Bhola</option><option class="option" value="Jhalokati">Jhalokati</option><option class="option" value="Patuakhali">Patuakhali</option><option class="option" value="Pirojpur">Pirojpur</option>';
	}
	// set Chattogram division districts
	else if(diviList == 'Chattogram') {
		var disctList = '<option disabled selected>Select Division</option><option value="Bandarban">Bandarban</option><option value="Chandpur">Chandpur</option><option value="Chattogram">Chattogram</option><option value="Cumilla">Cumilla</option><option value="Cox\'s Bazar">Cox\'s Bazar</option><option value="Feni">Feni</option><option value="Khagrachhari">Khagrachhari</option><option value="Noakhali">Noakhali</option><option value="Rangamati">Rangamati</option>';
	}
	// set Dhaka division districts
	else if(diviList == 'Dhaka') {
		var disctList = '<option disabled selected>Select Division</option><option value="Dhaka">Dhaka</option><option value="Faridpur">Faridpur</option><option value="Gazipur">Gazipur</option><option value="Gopalganj">Gopalganj</option><option value="Kishoreganj">Kishoreganj</option><option value="Madaripur">Madaripur</option><option value="Manikganj">Manikganj</option><option value="Munshiganj">Munshiganj</option><option value="Narayanganj">Narayanganj</option><option value="Narsingdi">Narsingdi</option><option value="Rajbari">Rajbari</option><option value="Shariatpur">Shariatpur</option><option value="Tangail">Tangail</option>';
	}
	//  set/send districts name to District lists from division
	document.getElementById("distr").innerHTML= disctList;
}

// Thana Section select
function thanaList(){
	var DisList = document.getElementById('distr').value;
	if(DisList == 'Barguna') {
		var thanaList = '<option class="option" disabled selected>Select District</option><option class="option" value="Barguna">Barguna</option><option value="Barishal">Barishal</option><option value="Bhola">Bhola</option><option value="Jhalokati">Jhalokati</option><option value="Patuakhali">Patuakhali</option><option value="Pirojpur">Pirojpur</option>';
	}
	document.getElementById("polic_sta").innerHTML= thanaList;
}

var educationlist = '<option class="option" disabled selected>Select Education</option><option class="option" value="S.S.C.">S.S.C</option><option class="option" value="H.S.C.">H.S.C</option><option class="option" value="B.Sc">Bachelor of science(honours)</option><option class="option" value="bse">Bachelor of science & engineering</option><option class="option" value="BBA">Bachelor of Business Administration</option><option class="option" value="BA">Bachelor of Administration</option><option class="option" value="MBBS">MBBS</option><option class="option" value="LLB">LLB</option>';
document.getElementById("education").innerHTML=educationlist;

function subjectlist(){
    var sublist= document.getElementById('education').value;
    if(sublist=='S.S.C.'){
        var sublist= '<option class="option" disable selected>Select group</option><option class="option" value="Science">Science</option><option class="option" value="Commerce">Commerce</option><option class="option" value="Arts">Arts</option>';
    }
    else if(sublist=='H.S.C.'){
        var sublist= '<option class="option" disable selected>Select group</option><option class="option" value="Science">Science</option><option class="option" value="Commerce">Commerce</option><option class="option" value="Arts">Arts</option>';
    }
    else if(sublist=='B.Sc'){
        var sublist= '<option class="option" disable selected>Select Subject</option><option class="option" value="physics">Physics</option><option class="option" value="math">math</option><option class="option" value="chemistry">chemistry</option><option class="option" value="zoology">zoology</option><option class="option" value="botany">botany</option>';
    }

    document.getElementById('subject').innerHTML=sublist;
}

//function passmatching(){
//    var password = document.getElementById('password').value;
//    var confirmpass = document.getElementById('confirmpass').value;
//    if(password==confirmpass){
//        document.getElementById('matching').innerHTML= 'confirm';
//    }
//    else{
//        document.getElementById('matching').innerHTML= 'password not match';
//    }
//}

var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
