$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,338,352",


			"death": "32,869",


			"dailycount": "2,335",


			"dailydeath": "13",
			"hospitalizationsever": "148,847",


			"date": "8/9",
			"info": "through 12:00pm 8/8/2022",

			"testingaverage": "39,443",

			"peopletested": "12,378,171",

			"positivity": "13.26%",

			"hospitalizations": "1,151",
			"datehospitalizations": "8/8"

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



