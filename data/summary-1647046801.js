$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,810,308",

			"death": "31,225",

			"dailycount": "1,297",

			"dailydeath": "48",


			"date": "03/11",
			"info": "through 6:00pm 03/10/2022",

			"testingaverage": "124,934",

			"peopletested": "11,526,990",

			"positivity": "1.00%",

			"hospitalizations": "588",
			"datehospitalizations": "03/10"

				}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
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



