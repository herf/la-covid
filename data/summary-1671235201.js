$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,598,453",


			"death": "34,410",

			"dailycount": "3,257",


			"dailydeath": "20",
			"hospitalizationsever": "163,763",


			"date": "12/16",
			"info": "through 12:00pm 12/15/2022",

			"testingaverage": "31,582",

			"peopletested": "12,784,124",

			"positivity": "11.42%",

			"hospitalizations": "1,261",
			"datehospitalizations": "12/15"

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



