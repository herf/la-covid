$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,612,321",


			"death": "34,539",

			"dailycount": "3,084",


			"dailydeath": "25",
			"hospitalizationsever": "164,893",


			"date": "12/22",
			"info": "through 12:00pm 12/21/2022",

			"testingaverage": "29,142",

			"peopletested": "12,802,400",

			"positivity": "10.43%",

			"hospitalizations": "1,256",
			"datehospitalizations": "12/21"

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



