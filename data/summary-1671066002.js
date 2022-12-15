$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,592,066",


			"death": "34,368",

			"dailycount": "4,211",


			"dailydeath": "16",
			"hospitalizationsever": "163,730",


			"date": "12/14",
			"info": "through 12:00pm 12/13/2022",

			"testingaverage": "32,233",

			"peopletested": "12,777,558",

			"positivity": "11.73%",

			"hospitalizations": "1,304",
			"datehospitalizations": "12/13"

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



