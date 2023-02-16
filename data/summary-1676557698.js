$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,692,123",


			"death": "35,509",

			"dailycount": "1,197",


			"dailydeath": "20",
			"hospitalizationsever": "172,155",


			"date": "02/15/23",
			"info": "through 12:00pm 02/14/2023",

			"testingaverage": "19,042",

			"peopletested": "12,917,088",

			"positivity": "5.69%",

			"hospitalizations": "689",
			"datehospitalizations": "2/14/23"

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



