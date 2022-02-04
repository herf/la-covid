$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,695,076",

			"death": "29,195",

			"dailycount": "11,548",

			"dailydeath": "96",

			"date": "02/03",
			"info": "through 6:00pm 02/02/2022",

			"testingaverage": "191,768",

			"peopletested": "11,107,943",

			"positivity": "10.73%",

			"hospitalizations": "3,398",
			"datehospitalizations": "02/02"
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



