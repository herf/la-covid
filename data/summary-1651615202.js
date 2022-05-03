$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,879,817",


			"death": "31,977",


			"dailycount": "1,888",


			"dailydeath": "7",


			"date": "05/03",
			"info": "through 6:00pm 05/02/2022",

			"testingaverage": "125,898",

			"peopletested": "11,866,296",

			"positivity": "1.61%",

			"hospitalizations": "236",
			"datehospitalizations": "05/02"

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



