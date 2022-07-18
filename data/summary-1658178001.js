$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,225,697",


			"death": "32,537",


			"dailycount": "3,943",


			"dailydeath": "4",
			"hospitalizationsever": "144,175",


			"date": "07/18",
			"info": "through 12:00pm 07/17/2022",

			"testingaverage": "50,453",

			"peopletested": "12,275,375",

			"positivity": "15.38%",

			"hospitalizations": "1,252",
			"datehospitalizations": "07/15"

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



