$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,463,039",

			"death": "26,153",


			"dailycount": "1,032",


			"dailydeath": "10",


			"date": "10/03",
			"info": "through 6:00pm 10/02/2021",

			"testingaverage": "135,294",

			"peopletested": "8,683,814",

			"positivity": "1.19%",

			"hospitalizations": "825",
			"datehospitalizations": "10/1"



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



