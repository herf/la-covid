$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,703,663",


			"death": "35,675",

			"dailycount": "2,129",


			"dailydeath": "34",
			"hospitalizationsever": "173,302",


			"date": "02/27/23",
			"info": "through 12:00pm 02/26/2023",

			"testingaverage": "16,261",

			"peopletested": "12,939,072",

			"positivity": "6.49%",

			"hospitalizations": "692",
			"datehospitalizations": "2/23/23"

				}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#hosp_1').html(content.hospitalizationsever);
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



