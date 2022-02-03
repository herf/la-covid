$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,683,644",

			"death": "29,099",

			"dailycount": "15,664",

			"dailydeath": "102",

			"date": "02/02",
			"info": "through 6:00pm 02/01/2022",

			"testingaverage": "201,617",

			"peopletested": "11,091,893",

			"positivity": "11.61%",

			"hospitalizations": "3,515",
			"datehospitalizations": "02/01"
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



