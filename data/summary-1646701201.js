$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,805,119",

			"death": "31,046",

			"dailycount": "1,675",

			"dailydeath": "43",


			"date": "03/07",
			"info": "through 6:00pm 03/06/2022",

			"testingaverage": "148,733",

			"peopletested": "11,488,490",

			"positivity": "1.14%",

			"hospitalizations": "731",
			"datehospitalizations": "03/06"

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



