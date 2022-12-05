$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,562,059",


			"death": "34,241",

			"dailycount": "10,089",


			"dailydeath": "29",
			"hospitalizationsever": "161,626",


			"date": "12/2",
			"info": "through 12:00pm 12/1/2022",

			"testingaverage": "24,661",

			"peopletested": "12,746,654",

			"positivity": "12.67%",

			"hospitalizations": "1,205",
			"datehospitalizations": "12/2"

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



