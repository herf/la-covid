$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,448,065",


			"death": "25,911",


			"dailycount": "1,750",


			"dailydeath": "41",

			"date": "09/22",
			"info": "through 6:00pm 09/21/2021",

			"testingaverage": "155,261",

			"peopletested": "8,508,270",

			"positivity": "1.33%",

			"hospitalizations": "1,018",
			"datehospitalizations": "09/20"




								}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#dte').html(content.date);
				$('#dte_1').html(content.date);
				$('#dte_2').html(content.date);
				$('#dte_3').html(content.datehospitalizations);
				$('#cse').html(content.info);	
			
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



