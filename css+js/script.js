//NOT MY OWN**Copyright Justin Meyers ** Adapted to suit my classes

$(document).ready(function(){
	
	$('.trigger').click(function(){
		$('nav ul').toggleClass('show');
		
	});
	
	
});

$(document).ready(function(){
	
	$('.tablettrigger').click(function(){
		$('nav ul').toggleClass('show');
		
	});
	
	
});


//MY OWN CODE for converter

function myConvert()
{
	
	var value1=parseFloat(document.getElementById("value1").value); //Reads in the value of the input box and two drop down select boxes
	
	unit1=document.getElementById("unit1").value;
	unit2=document.getElementById("unit2").value;
	
	if(unit1=="Null" || unit2=="Null"){   //Checks that 2 units have been selected
		alert("Make sure both From and To have units selected.");
	};
	if(unit1=="unit" || unit2=="unit"){ 
		alert("Please select a valid unit.");
	};
	if(!value1){//Checks that a number is entered into from
		alert("Please enter a value in the From section.");
	};
	if (unit1=="pounds"){//If unit1 has a value of pounds
		if(unit2=="ounce" || unit2=="grams" || unit2=="kg"){ //and if unit two has a value of ounce, grams or kg, enter the loop
			if (unit2=="ounce"){answer=value1*16;}//converts appropriately
			else if(unit2=="grams"){answer=value1*453.6;}
			else if(unit2=="kg"){answer=value1*0.454;}			
		}
		else{ //if the unit is not in the if statement, not a compatible unit
			alert("Can't convert between these units.");
			
		};
			
	};//Process is repeated for all the units
	if (unit1=="ounce"){
		if(unit2=="pounds" || unit2=="grams" || unit2=="kg"){
			if (unit2=="pounds"){answer=value1*0.063;}
			else if(unit2=="grams"){answer=value1*28.35;}
			else if(unit2=="kg"){answer=value1*0.028;}			
		}
		else{
			alert("Can't convert between these units.");
			
		};
			
	};		
	if (unit1=="grams"){
		if(unit2=="ounce" || unit2=="pounds" || unit2=="kg"){
			if (unit2=="ounce"){answer=value1*0.035;}
			else if(unit2=="pounds"){answer=value1*0.002;}
			else if(unit2=="kg"){answer=value1*0.001;}			
		}
		else{
			alert("Can't convert between these units.");
			
		};
			
	};
	if (unit1=="kg"){
		if(unit2=="ounce" || unit2=="grams" || unit2=="pounds"){
			if (unit2=="ounce"){answer=value1*35.27;}
			else if(unit2=="grams"){answer=value1*1000;}
			else if(unit2=="pounds"){answer=value1*2.205;}			
		}
		else{
			alert("Can't convert between these units.");
			
		};
			
	};
	if (unit1=="ml"){
		if(unit2=="litres" || unit2=="floz" || unit2=="tsp" || unit2=="tbsp"){
			if (unit2=="litres"){answer=value1*0.001;}
			else if(unit2=="floz"){answer=value1*0.034;}
			else if(unit2=="tsp"){answer=value1*0.23;}
			else if(unit2=="tbsp"){answer=value1*0.068;}			
		}
		else{
			alert("Can't convert between these units.");
			
		};
		
	};
	if (unit1=="litres"){
		if(unit2=="ml" || unit2=="floz" || unit2=="tsp" || unit2=="tbsp"){
			if (unit2=="ml"){answer=value1*1000;}
			else if(unit2=="floz"){answer=value1*33.81;}
			else if(unit2=="tsp"){answer=value1*202.9;}
			else if(unit2=="tbsp"){answer=value1*67.63;}			
		}
		else{
			alert("Can't convert between these units.");
			
		};
			
	};
	if (unit1=="floz"){
		if(unit2=="litres" || unit2=="floz" || unit2=="tsp" || unit2=="tbsp"){
			if (unit2=="litres"){answer=value1*0.030;}
			else if(unit2=="ml"){answer=value1*29.57;}
			else if(unit2=="tsp"){answer=value1*6;}
			else if(unit2=="tbsp"){answer=value1*2;}			
		}
		else{
			alert("Can't convert between these units.");
			
		};
			
	};
	if (unit1=="tsp"){
		if(unit2=="litres" || unit2=="floz" || unit2=="ml" || unit2=="tbsp"){
			if (unit2=="litres"){answer=value1*0.005;}
			else if(unit2=="floz"){answer=value1*0.167;}
			else if(unit2=="ml"){answer=value1*4.929;}
			else if(unit2=="tbsp"){answer=value1*0.333;}			
		}
		else{
			alert("Can't convert between these units.");
			
		};
			
	};
	if (unit1=="tbsp"){
		if(unit2=="litres" || unit2=="floz" || unit2=="tsp" || unit2=="ml"){
			if (unit2=="litres"){answer=value1*0.015;}
			else if(unit2=="floz"){answer=value1*0.5;}
			else if(unit2=="tsp"){answer=value1*3;}
			else if(unit2=="ml"){answer=value1*14.79;}			
		}
		else{
			alert("Can't convert between these units.");
			
		};
			
	};
	if (unit1=="mm"){
		if(unit2=="cm" || unit2=="in"){
			if (unit2=="cm"){answer=value1*0.1;}	
			else if(unit2=="in"){answer=value1*0.039;}			
		}
		else{
			alert("Can't convert between these units.");
			
		};
		
	};
	if (unit1=="cm"){
		if(unit2=="mm" || unit2=="in"){
			if (unit2=="mm"){answer=value1*10;}	
			else if(unit2=="in"){answer=value1*0.394;}			
		}
		else{
			alert("Can't convert between these units.");
			
		};
		
	};
	if (unit1=="in"){
		if(unit2=="cm" || unit2=="mm"){
			if (unit2=="cm"){answer=value1*2.54;}	
			else if(unit2=="mm"){answer=value1*25.4;}			
		}
		else{
			alert("Can't convert between these units.");
			
		};
		
	};
	if (unit1=="celsius"){
		if(unit2=="fahrenheit"){
			answer=value1*33.8;						
		}
		else{
			alert("Can't convert between these units.");
			
		};
		
	};
	if (unit1=="fahrenheit"){
		if(unit2=="celsius"){
			answer=value1*-17.22;	
		}
		else{
			alert("Can't convert between these units.");
			
		};
		
	};
	document.getElementById('value2').value = answer;//writes the answer given to the value2 box
};