$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,069,037",


			"death": "32,261",


			"dailycount": "3,566",


			"dailydeath": "2",
			"hospitalizationsever": "140,929",


			"date": "06/20",
			"info": "through 12:00pm 06/19/2022",

			"testingaverage": "91,735",

			"peopletested": "12,126,904",

			"positivity": "5.82%",

			"hospitalizations": "639",
			"datehospitalizations": "06/17"

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



