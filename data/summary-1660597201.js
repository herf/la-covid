$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,361,061",


			"death": "32,948",


			"dailycount": "1,894",


			"dailydeath": "5",
			"hospitalizationsever": "149,962",


			"date": "8/15",
			"info": "through 12:00pm 8/14/2022",

			"testingaverage": "38,584",

			"peopletested": "12,404,985",

			"positivity": "11.86%",

			"hospitalizations": "1,059",
			"datehospitalizations": "8/12"

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



