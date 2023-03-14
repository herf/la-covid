$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,716,873",


			"death": "35,853",

			"dailycount": "774",


			"dailydeath": "11",
			"hospitalizationsever": "174,470",


			"date": "03/14/23",
			"info": "through 12:00pm 03/13/2023",

			"testingaverage": "16,455",

			"peopletested": "12,965,851",

			"positivity": "4.79%",

			"hospitalizations": "474",
			"datehospitalizations": "3/13/23"

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



