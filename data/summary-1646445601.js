$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,802,123",

			"death": "30,957",

			"dailycount": "1,427",

			"dailydeath": "47",


			"date": "03/04",
			"info": "through 6:00pm 03/03/2022",

			"testingaverage": "130,045",

			"peopletested": "11,462,842",

			"positivity": "1.42%",

			"hospitalizations": "817",
			"datehospitalizations": "03/03"

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



