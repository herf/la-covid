$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,510,434",

			"death": "26,856",

			"dailycount": "1,378",

			"dailydeath": "19",

			"date": "11/13",
			"info": "through 6:00pm 11/12/2021",


			"testingaverage": "146,505",


			"peopletested": "9,237,742",

			"positivity": "1.00%",

			"hospitalizations": "605",
			"datehospitalizations": "11/11"

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



