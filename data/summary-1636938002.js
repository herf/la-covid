$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,511,324",


			"death": "26,862",


			"dailycount": "979",



			"dailydeath": "6",

			"date": "11/14",
			"info": "through 6:00pm 11/13/2021",


			"testingaverage": "162,438",


			"peopletested": "9,250,006",

			"positivity": "0.91%",

			"hospitalizations": "604",
			"datehospitalizations": "11/12"

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



