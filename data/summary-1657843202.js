$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,198,377",


			"death": "32,492",


			"dailycount": "8,535",


			"dailydeath": "14",
			"hospitalizationsever": "143,636",


			"date": "07/14",
			"info": "through 12:00pm 07/13/2022",

			"testingaverage": "41,115",

			"peopletested": "12,249,439",

			"positivity": "15.26%",

			"hospitalizations": "1,202",
			"datehospitalizations": "07/13"

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



