$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,615,292",


			"death": "34,561",

			"dailycount": "3,006",


			"dailydeath": "23",
			"hospitalizationsever": "164,905",


			"date": "12/23",
			"info": "through 12:00pm 12/22/2022",

			"testingaverage": "28,859",

			"peopletested": "12,805,439",

			"positivity": "10.22%",

			"hospitalizations": "1,201",
			"datehospitalizations": "12/22"

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



