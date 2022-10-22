$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,476,928",


			"death": "33,889",

			"dailycount": "1,017",


			"dailydeath": "14",
			"hospitalizationsever": "157,427",


			"date": "10/21",
			"info": "through 12:00pm 10/20/2022",

			"testingaverage": "27,109",

			"peopletested": "12,617,347",

			"positivity": "3.75%",

			"hospitalizations": "389",
			"datehospitalizations": "10/20"

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



