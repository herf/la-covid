$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,057,004",


			"death": "32,250",


			"dailycount": "5,122",


			"dailydeath": "5",
			"hospitalizationsever": "140,469",


			"date": "06/17",
			"info": "through 12:00pm 06/16/2022",

			"testingaverage": "106,348",

			"peopletested": "12,110,240",

			"positivity": "5.17%",

			"hospitalizations": "612",
			"datehospitalizations": "06/16"

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



