var cl = console.log;

const stdform = document.getElementById("stdform");
const stdtable = document.getElementById("stdtable");
const nostdinfo = document.getElementById("nostdinfo");
const stdcontainer = document.getElementById("stdcontainer");
const fnamecontrol = document.getElementById("fname");
const lnamecontrol = document.getElementById("lname");
const emailcontrol = document.getElementById("email"); 
const contactcontrol = document.getElementById("contact");

const stdarr = [];

const stdtemplating = (arr) => {
	let result = `` ;
	arr.forEach((std,i) => {
		result += `<tr>
						<td>${i+1}</td>
						<td>${std.fname}</td>
						<td>${std.lname}</td>
						<td>${std.email}</td>
						<td>${std.contact}</td>
				  </tr>`
	})
	stdcontainer.innerHTML = result;
}

const handlestdcountstate = () => {
	if(stdarr.length > 0){
		stdtable.classList.remove("d-none")
		nostdinfo.classList.add("d-none")
	}else{
		stdtable.classList.add("d-none")
		nostdinfo.classList.remove("d-none")
	}
}

handlestdcountstate();

const onstdhandler = (e) => {
	e.preventDefault();
	let newstd = {
		fname : fnamecontrol.value,
		lname : lnamecontrol.value,
		email : emailcontrol.value,
		contact : contactcontrol.value
	}
	stdarr.push(newstd);
	handlestdcountstate();
	stdtemplating(stdarr);
	Swal.fire({
		title : `${newstd.fname} ${newstd.lname} added as a student successfully`,
		timer : 2000,
		icon : 'success'
	});

	
	e.target.reset();
}


stdform.addEventListener("submit", onstdhandler)