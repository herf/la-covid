$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,657,744",


			"death": "34,944",

			"dailycount": "1,716",


			"dailydeath": "27",
			"hospitalizationsever": "168,508",


			"date": "01/12/23",
			"info": "through 12:00pm 01/11/2023",

			"testingaverage": "20,317",

			"peopletested": "12,850,464",

			"positivity": "10.40%",

			"hospitalizations": "1,119",
			"datehospitalizations": "01/11/23"

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



