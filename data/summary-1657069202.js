$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,143,536",


			"death": "32,371",


			"dailycount": "2,945",


			"dailydeath": "10",
			"hospitalizationsever": "142,209",


			"date": "07/05",
			"info": "through 12:00pm 07/04/2022",

			"testingaverage": "48,145",

			"peopletested": "12,202,953",

			"positivity": "12.18%",

			"hospitalizations": "886",
			"datehospitalizations": "07/04"

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



