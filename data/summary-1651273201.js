$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,872,203",


			"death": "31,959",


			"dailycount": "2,550",


			"dailydeath": "4",


			"date": "04/29",
			"info": "through 6:00pm 04/28/2022",

			"testingaverage": "119,452",

			"peopletested": "11,847,721",

			"positivity": "1.49%",

			"hospitalizations": "253",
			"datehospitalizations": "04/28"

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



