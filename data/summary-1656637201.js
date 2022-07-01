$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,118,053",


			"death": "32,334",


			"dailycount": "5,763",


			"dailydeath": "9",
			"hospitalizationsever": "141,847",


			"date": "06/30",
			"info": "through 12:00pm 06/29/2022",

			"testingaverage": "47,277",

			"peopletested": "12,177,676",

			"positivity": "11.12%",

			"hospitalizations": "808",
			"datehospitalizations": "06/30"

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



