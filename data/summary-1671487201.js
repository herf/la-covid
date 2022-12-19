$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,605,228",


			"death": "34,471",

			"dailycount": "1,218",


			"dailydeath": "20",
			"hospitalizationsever": "164,376",


			"date": "12/19",
			"info": "through 12:00pm 12/18/2022",

			"testingaverage": "30,768",

			"peopletested": "12,793,879",

			"positivity": "10.77%",

			"hospitalizations": "1,229",
			"datehospitalizations": "12/16"

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



