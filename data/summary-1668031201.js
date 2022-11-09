$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,500,252",


			"death": "34,032",

			"dailycount": "1,662",


			"dailydeath": "10",
			"hospitalizationsever": "158,818",


			"date": "11/09",
			"info": "through 12:00pm 11/08/2022",

			"testingaverage": "26,599",

			"peopletested": "12,666,748",

			"positivity": "4.54%",

			"hospitalizations": "492",
			"datehospitalizations": "11/08"

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



