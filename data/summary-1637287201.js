$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,515,324",


			"death": "26,949",


			"dailycount": "1,088",



			"dailydeath": "26",

			"date": "11/18",
			"info": "through 6:00pm 11/17/2021",


			"testingaverage": "152,294",


			"peopletested": "9,292,712",

			"positivity": "0.91%",

			"hospitalizations": "616",
			"datehospitalizations": "11/16"

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



