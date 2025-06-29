function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let val=s1.indexOf(s2);
	s2=s2.toLowerCase();
	let val2 = s1.indexOf(s2);
	if(val!=-1){
		return val;
	}
	else{
		return val2;
	}
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
