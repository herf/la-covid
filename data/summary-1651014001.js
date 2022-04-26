$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,865,825",


			"death": "31,941",


			"dailycount": "1,583",


			"dailydeath": "4",


			"date": "04/26",
			"info": "through 6:00pm 04/25/2022",

			"testingaverage": "76,584",

			"peopletested": "11,829,883",

			"positivity": "1.94%",

			"hospitalizations": "232",
			"datehospitalizations": "04/25"

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



