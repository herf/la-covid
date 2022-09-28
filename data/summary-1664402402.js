$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,453,057",


			"death": "33,587",

			"dailycount": "1,353",


			"dailydeath": "13",
			"hospitalizationsever": "155,863",


			"date": "9/28",
			"info": "through 12:00pm 9/27/2022",

			"testingaverage": "35,252",

			"peopletested": "12,557,063",

			"positivity": "4.33%",

			"hospitalizations": "471",
			"datehospitalizations": "9/27"

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



