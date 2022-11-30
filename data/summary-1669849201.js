$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,542,744",


			"death": "34,187",

			"dailycount": "4,353",


			"dailydeath": "10",
			"hospitalizationsever": "160,941",


			"date": "11/30",
			"info": "through 12:00pm 11/29/2022",

			"testingaverage": "25,289",

			"peopletested": "12,726,802",

			"positivity": "10.16%",

			"hospitalizations": "1,132",
			"datehospitalizations": "11/29"

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



