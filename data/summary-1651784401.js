$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,885,175",


			"death": "31,986",


			"dailycount": "3,003",


			"dailydeath": "4",


			"date": "05/05",
			"info": "through 6:00pm 05/04/2022",

			"testingaverage": "129,424",

			"peopletested": "11,876,722",

			"positivity": "1.72%",

			"hospitalizations": "244",
			"datehospitalizations": "05/04"

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



