$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,493,150",


			"death": "33,999",

			"dailycount": "1,447",


			"dailydeath": "7",
			"hospitalizationsever": "158,292",


			"date": "11/04",
			"info": "through 12:00pm 11/03/2022",

			"testingaverage": "27,016",

			"peopletested": "12,653,863",

			"positivity": "3.92%",

			"hospitalizations": "419",
			"datehospitalizations": "11/02"

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



