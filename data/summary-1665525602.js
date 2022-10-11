$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,467,319",


			"death": "33,772",

			"dailycount": "462",


			"dailydeath": "4",
			"hospitalizationsever": "156,750",


			"date": "10/11",
			"info": "through 12:00pm 10/10/2022",

			"testingaverage": "29,732",

			"peopletested": "12,591,774",

			"positivity": "4.34%",

			"hospitalizations": "487",
			"datehospitalizations": "10/10"

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



