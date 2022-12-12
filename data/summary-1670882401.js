$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,585,468",


			"death": "34,334",

			"dailycount": "1,986",


			"dailydeath": "9",
			"hospitalizationsever": "163,145",


			"date": "12/12",
			"info": "through 12:00pm 12/11/2022",

			"testingaverage": "33,336",

			"peopletested": "12,772,627",

			"positivity": "12.29%",

			"hospitalizations": "1,267",
			"datehospitalizations": "12/9"

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



