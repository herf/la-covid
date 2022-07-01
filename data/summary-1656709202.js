$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,125,299",


			"death": "32,344",


			"dailycount": "7,324",


			"dailydeath": "10",
			"hospitalizationsever": "142,027",


			"date": "07/01",
			"info": "through 12:00pm 06/30/2022",

			"testingaverage": "47,662",

			"peopletested": "12,184,364",

			"positivity": "11.29%",

			"hospitalizations": "791",
			"datehospitalizations": "06/30"

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



