$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,530,105",


			"death": "34,156",

			"dailycount": "5,244",


			"dailydeath": "21",
			"hospitalizationsever": "160,203",


			"date": "11/25",
			"info": "through 12:00pm 11/24/2022",

			"testingaverage": "29,145",

			"peopletested": "12,714,271",

			"positivity": "7.02%",

			"hospitalizations": "822",
			"datehospitalizations": "11/23"

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



