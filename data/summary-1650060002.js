$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,850,480",


			"death": "31,852",


			"dailycount": "1,355",


			"dailydeath": "13",


			"date": "04/15",
			"info": "through 6:00pm 04/14/2022",

			"testingaverage": "106,074",

			"peopletested": "11,777,005",

			"positivity": "1.01%",

			"hospitalizations": "228",
			"datehospitalizations": "04/14"

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


