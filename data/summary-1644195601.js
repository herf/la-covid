$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,727,159",


			"death": "29,428",


			"dailycount": "7,017",

			"dailydeath": "65",

			"date": "02/06",
			"info": "through 6:00pm 02/05/2022",

			"testingaverage": "183,065",

			"peopletested": "11,186,088",

			"positivity": "9.21%",

			"hospitalizations": "2,841",
			"datehospitalizations": "02/05"

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



