$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,420,213",


			"death": "33,217",


			"dailycount": "1,430",


			"dailydeath": "8",
			"hospitalizationsever": "152,877",


			"date": "9/6",
			"info": "through 12:00pm 9/5/2022",

			"testingaverage": "37,584",

			"peopletested": "12,489,452",

			"positivity": "7.52%",

			"hospitalizations": "777",
			"datehospitalizations": "9/2"

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



