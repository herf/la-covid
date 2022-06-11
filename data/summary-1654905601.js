$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,025,694",


			"death": "32,201",


			"dailycount": "6,202",


			"dailydeath": "8",
			"hospitalizationsever": "139,939",


			"date": "06/10",
			"info": "through 12:00pm 06/09/2022",

			"testingaverage": "122,390",

			"peopletested": "12,072,695",

			"positivity": "4.23%",

			"hospitalizations": "616",
			"datehospitalizations": "06/09"

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



