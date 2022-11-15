$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,506,367",


			"death": "34,065",

			"dailycount": "822",


			"dailydeath": "5",
			"hospitalizationsever": "158,829",


			"date": "11/14",
			"info": "through 12:00pm 11/13/2022",

			"testingaverage": "26,878",

			"peopletested": "12,679,876",

			"positivity": "5.25%",

			"hospitalizations": "502",
			"datehospitalizations": "11/10"

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



