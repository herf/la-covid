$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,392,984",


			"death": "33,076",


			"dailycount": "3,042",


			"dailydeath": "18",
			"hospitalizationsever": "151,464",


			"date": "8/25",
			"info": "through 12:00pm 8/24/2022",

			"testingaverage": "37,451",

			"peopletested": "12,445,097",

			"positivity": "9.72%",

			"hospitalizations": "802",
			"datehospitalizations": "8/24"

				}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#hosp_1').html(content.hospitalizationsever);
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



