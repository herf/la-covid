$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,451,438",


			"death": "25,972",


			"dailycount": "1,571",


			"dailydeath": "32",

			"date": "09/24",
			"info": "through 6:00pm 09/23/2021",

			"testingaverage": "135,029",

			"peopletested": "8,543,372",

			"positivity": "1.40%",

			"hospitalizations": "956",
			"datehospitalizations": "09/22"




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



