$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,444,076",


			"death": "33,509",

			"dailycount": "1,451",


			"dailydeath": "12",
			"hospitalizationsever": "154,898",


			"date": "9/21",
			"info": "through 12:00pm 9/20/2022",

			"testingaverage": "35,128",

			"peopletested": "12,536,853",

			"positivity": "4.98%",

			"hospitalizations": "573",
			"datehospitalizations": "9/20"

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



