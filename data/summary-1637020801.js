$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,512,147",


			"death": "26,872",


			"dailycount": "824",



			"dailydeath": "10",

			"date": "11/15",
			"info": "through 6:00pm 11/14/2021",


			"testingaverage": "162,905",


			"peopletested": "9,259,552",

			"positivity": "0.91%",

			"hospitalizations": "600",
			"datehospitalizations": "11/13"

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



