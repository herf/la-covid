$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,468,152",


			"death": "33,785",

			"dailycount": "841",


			"dailydeath": "13",
			"hospitalizationsever": "156,752",


			"date": "10/12",
			"info": "through 12:00pm 10/11/2022",

			"testingaverage": "28,640",

			"peopletested": "12,594,658",

			"positivity": "4.34%",

			"hospitalizations": "459",
			"datehospitalizations": "10/11"

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



