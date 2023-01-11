$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,656,051",


			"death": "34,917",

			"dailycount": "2,616",


			"dailydeath": "30",
			"hospitalizationsever": "168,376",


			"date": "01/11/23",
			"info": "through 12:00pm 01/10/2023",

			"testingaverage": "19,734",

			"peopletested": "12,847,179",

			"positivity": "11.35%",

			"hospitalizations": "1,128",
			"datehospitalizations": "01/10/23"

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



