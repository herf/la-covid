$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,949,830",


			"death": "32,101",


			"dailycount": "4,202",


			"dailydeath": "6",


			"date": "05/25",
			"info": "through 6:00pm 05/24/2022",

			"testingaverage": "131,897",

			"peopletested": "11,983,725",

			"positivity": "3.09%",

			"hospitalizations": "410",
			"datehospitalizations": "05/24"

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



