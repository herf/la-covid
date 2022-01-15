$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "2,172,008",




			"death": "27,942",




			"dailycount": "40,535",




			"dailydeath": "48",

			"date": "01/14",
			"info": "through 6:00pm 01/13/2022",


			"testingaverage": "222,619",


			"peopletested": "10,537,998",

			"positivity": "20.81%",

			"hospitalizations": "4,257",
			"datehospitalizations": "01/13"

					}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
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



