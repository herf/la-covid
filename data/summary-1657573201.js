$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,178,242",


			"death": "32,451",


			"dailycount": "3,710",


			"dailydeath": "9",
			"hospitalizationsever": "143,085",


			"date": "07/11",
			"info": "through 12:00pm 07/10/2022",

			"testingaverage": "38,528",

			"peopletested": "12,234,703",

			"positivity": "14.29%",

			"hospitalizations": "1,014",
			"datehospitalizations": "07/08"

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



