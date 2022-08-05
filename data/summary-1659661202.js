$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,320,781",


			"death": "32,807",


			"dailycount": "4,930",


			"dailydeath": "22",
			"hospitalizationsever": "147,693",


			"date": "8/4",
			"info": "through 12:00pm 8/3/2022",

			"testingaverage": "42,200",

			"peopletested": "12,358,708",

			"positivity": "14.62%",

			"hospitalizations": "1,254",
			"datehospitalizations": "8/03"

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



