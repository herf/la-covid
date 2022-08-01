$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,305,972",


			"death": "32,747",


			"dailycount": "2,749",


			"dailydeath": "10",
			"hospitalizationsever": "146,668",


			"date": "8/1",
			"info": "through 12:00pm 7/31/2022",

			"testingaverage": "44,757",

			"peopletested": "12,346,574",

			"positivity": "15.15%",

			"hospitalizations": "1,220",
			"datehospitalizations": "07/29"

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



