$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,853,706",


			"death": "31,872",


			"dailycount": "829",


			"dailydeath": "6",


			"date": "04/18",
			"info": "through 6:00pm 04/17/2022",

			"testingaverage": "95,057",

			"peopletested": "11,791,057",

			"positivity": "1.20%",

			"hospitalizations": "221",
			"datehospitalizations": "04/17"

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



