$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,507,936",


			"death": "34,072",

			"dailycount": "1,532",


			"dailydeath": "10",
			"hospitalizationsever": "159,206",


			"date": "11/15",
			"info": "through 12:00pm 11/14/2022",

			"testingaverage": "26,829",

			"peopletested": "12,681,766",

			"positivity": "5.39%%",

			"hospitalizations": "552",
			"datehospitalizations": "11/14"

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



