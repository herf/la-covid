$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,855,687",


			"death": "31,899",


			"dailycount": "1,146",


			"dailydeath": "15",


			"date": "04/20",
			"info": "through 6:00pm 04/19/2022",

			"testingaverage": "73,346",

			"peopletested": "11,797,681",

			"positivity": "1.59%",

			"hospitalizations": "230",
			"datehospitalizations": "04/19"

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



