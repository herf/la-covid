$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,479,421",



			"death": "26,442",


			"dailycount": "825",



			"dailydeath": "26",



			"date": "10/19",
			"info": "through 6:00pm 10/18/2021",


			"testingaverage": "142,953",

			"peopletested": "8,910,761",

			"positivity": "0.82%",

			"hospitalizations": "632",
			"datehospitalizations": "10/17" 
 

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



