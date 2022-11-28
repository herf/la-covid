$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,535,493",


			"death": "34,171",

			"dailycount": "1,599",


			"dailydeath": "3",
			"hospitalizationsever": "160,206",


			"date": "11/28",
			"info": "through 12:00pm 11/27/2022",

			"testingaverage": "27,723",

			"peopletested": "12,721,050",

			"positivity": "8.24%",

			"hospitalizations": "822",
			"datehospitalizations": "11/23"

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



