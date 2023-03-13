$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,716,045",


			"death": "35,842",

			"dailycount": "1,778",


			"dailydeath": "28",
			"hospitalizationsever": "174,467",


			"date": "03/13/23",
			"info": "through 12:00pm 03/12/2023",

			"testingaverage": "16,689",

			"peopletested": "12,964,995",

			"positivity": "5.06%",

			"hospitalizations": "574",
			"datehospitalizations": "3/10/23"

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



