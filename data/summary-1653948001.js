$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,974,197",


			"death": "32,129",


			"dailycount": "2,901",


			"dailydeath": "6",


			"date": "05/30",
			"info": "through 12:00pm 05/29/2022",

			"testingaverage": "133,797",

			"peopletested": "12,014,764",

			"positivity": "3.34%",

			"hospitalizations": "486",
			"datehospitalizations": "05/29"

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



