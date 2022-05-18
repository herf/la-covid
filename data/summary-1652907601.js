$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,922,210",


			"death": "32,055",


			"dailycount": "4,384",


			"dailydeath": "10",


			"date": "05/18",
			"info": "through 6:00pm 05/17/2022",

			"testingaverage": "131,506",

			"peopletested": "11,945,365",

			"positivity": "2.49%",

			"hospitalizations": "363",
			"datehospitalizations": "05/17"

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



