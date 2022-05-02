$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,877,960",


			"death": "31,970",


			"dailycount": "1,368",


			"dailydeath": "5",


			"date": "05/02",
			"info": "through 6:00pm 05/01/2022",

			"testingaverage": "123,147",

			"peopletested": "11,862,239",

			"positivity": "1.57%",

			"hospitalizations": "225",
			"datehospitalizations": "05/01"

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



