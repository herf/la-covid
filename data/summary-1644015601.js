$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,710,362",

			"death": "29,280",

			"dailycount": "15,427",

			"dailydeath": "85",

			"date": "02/04",
			"info": "through 6:00pm 02/03/2022",

			"testingaverage": "184,107",

			"peopletested": "11,148,943",

			"positivity": "9.99%",

			"hospitalizations": "3,233",
			"datehospitalizations": "02/03"
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



