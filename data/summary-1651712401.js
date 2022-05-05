$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,882,279",


			"death": "31,982",


			"dailycount": "2,484",


			"dailydeath": "5",


			"date": "05/04",
			"info": "through 6:00pm 05/03/2022",

			"testingaverage": "127,966",

			"peopletested": "11,871,058",

			"positivity": "1.64%",

			"hospitalizations": "248",
			"datehospitalizations": "05/03"

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



