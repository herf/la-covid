$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,423,672",


			"death": "33,334",


			"dailycount": "1,767",


			"dailydeath": "15",
			"hospitalizationsever": "153,527",


			"date": "9/8",
			"info": "through 12:00pm 9/7/2022",

			"testingaverage": "36,215",

			"peopletested": "12,494,882",

			"positivity": "7.23%",

			"hospitalizations": "780",
			"datehospitalizations": "9/7"

				}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#hosp_1').html(content.hospitalizationsever);
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



