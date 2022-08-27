$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,396,657",


			"death": "33,096",


			"dailycount": "3,694",


			"dailydeath": "20",
			"hospitalizationsever": "151,477",


			"date": "8/26",
			"info": "through 12:00pm 8/25/2022",

			"testingaverage": "37,634",

			"peopletested": "12,450,321",

			"positivity": "9.45%",

			"hospitalizations": "827",
			"datehospitalizations": "8/25"

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



