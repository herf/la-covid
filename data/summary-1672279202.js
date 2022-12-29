$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,624,419",


			"death": "34,619",

			"dailycount": "2,138",


			"dailydeath": "21",
			"hospitalizationsever": "165,488",


			"date": "12/28",
			"info": "through 12:00pm 12/27/2022",

			"testingaverage": "25,409",

			"peopletested": "12,815,831",

			"positivity": "10.77%",

			"hospitalizations": "1,195",
			"datehospitalizations": "12/27"

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



