$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,325,622",


			"death": "32,826",


			"dailycount": "4,864",


			"dailydeath": "19",
			"hospitalizationsever": "148,042",


			"date": "8/5",
			"info": "through 12:00pm 8/4/2022",

			"testingaverage": "41,905",

			"peopletested": "12,364,821",

			"positivity": "14.27%",

			"hospitalizations": "1,206",
			"datehospitalizations": "8/04"

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



