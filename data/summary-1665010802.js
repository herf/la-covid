$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,461,037",


			"death": "33,719",

			"dailycount": "1,058",


			"dailydeath": "10",
			"hospitalizationsever": "156,447",


			"date": "10/05",
			"info": "through 12:00pm 10/04/2022",

			"testingaverage": "33,214",

			"peopletested": "12,575,928",

			"positivity": "4.12%",

			"hospitalizations": "501",
			"datehospitalizations": "10/04"

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



