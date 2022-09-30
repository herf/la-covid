$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,454,542",


			"death": "33,598",

			"dailycount": "1,517",


			"dailydeath": "12",
			"hospitalizationsever": "155,886",


			"date": "9/29",
			"info": "through 12:00pm 9/28/2022",

			"testingaverage": "34,728",

			"peopletested": "12,560,366",

			"positivity": "4.33%",

			"hospitalizations": "499",
			"datehospitalizations": "9/28"

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



