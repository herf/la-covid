$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,519,781",


			"death": "27,010",


			"dailycount": "1,054",



			"dailydeath": "11",

			"date": "11/21",
			"info": "through 6:00pm 11/20/2021",


			"testingaverage": "139,630",


			"peopletested": "9,341,405",

			"positivity": "0.98%",

			"hospitalizations": "573",
			"datehospitalizations": "11/19"

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



