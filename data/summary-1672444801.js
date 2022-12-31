$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,631,736",


			"death": "34,671",

			"dailycount": "3,410",


			"dailydeath": "28",
			"hospitalizationsever": "166,208",


			"date": "12/30",
			"info": "through 12:00pm 12/29/2022",

			"testingaverage": "21,471",

			"peopletested": "12,821,824",

			"positivity": "12.42%",

			"hospitalizations": "1,269",
			"datehospitalizations": "12/28"

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



