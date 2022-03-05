$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,803,476",

			"death": "31,005",

			"dailycount": "1,382",

			"dailydeath": "48",


			"date": "03/05",
			"info": "through 6:00pm 03/04/2022",

			"testingaverage": "130,342",

			"peopletested": "11,472,664",

			"positivity": "1.36%",

			"hospitalizations": "792",
			"datehospitalizations": "03/04"

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



