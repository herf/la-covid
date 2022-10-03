$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,458,848",


			"death": "33,628",

			"dailycount": "473",


			"dailydeath": "7",
			"hospitalizationsever": "156,240",


			"date": "10/03",
			"info": "through 12:00pm 10/02/2022",

			"testingaverage": "33,826",

			"peopletested": "12,571,932",

			"positivity": "4.24%",

			"hospitalizations": "494",
			"datehospitalizations": "9/30"

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



