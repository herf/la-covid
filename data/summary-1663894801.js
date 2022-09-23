$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,445,630",


			"death": "33,519",

			"dailycount": "1,666",


			"dailydeath": "12",
			"hospitalizationsever": "154,976",


			"date": "9/22",
			"info": "through 12:00pm 9/21/2022",

			"testingaverage": "35,556",

			"peopletested": "12,540,460",

			"positivity": "4.78%",

			"hospitalizations": "551",
			"datehospitalizations": "9/21"

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



