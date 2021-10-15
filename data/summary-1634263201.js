$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,474,518",


			"death": "26,372",



			"dailycount": "1,142",


			"dailydeath": "19",


			"date": "10/14",
			"info": "through 6:00pm 10/13/2021",

			"testingaverage": "138,529",

			"peopletested": "8,832,055",

			"positivity": "0.91%",

			"hospitalizations": "698",
			"datehospitalizations": "10/12" 

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



