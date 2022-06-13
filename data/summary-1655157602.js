$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,038,588",


			"death": "32,218",


			"dailycount": "2,998",


			"dailydeath": "7",
			"hospitalizationsever": "140,229",


			"date": "06/13",
			"info": "through 12:00pm 06/12/2022",

			"testingaverage": "145,258",

			"peopletested": "12,088,466",

			"positivity": "4.18%",

			"hospitalizations": "593",
			"datehospitalizations": "06/12"

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



