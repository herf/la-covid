$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,907,721",


			"death": "32,022",


			"dailycount": "4,025",


			"dailydeath": "6",


			"date": "05/13",
			"info": "through 6:00pm 05/12/2022",

			"testingaverage": "128,427",

			"peopletested": "11,921,414",

			"positivity": "2.24%",

			"hospitalizations": "298",
			"datehospitalizations": "05/12"

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



