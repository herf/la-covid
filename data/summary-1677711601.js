$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,705,624",


			"death": "35,704",

			"dailycount": "882",


			"dailydeath": "15",
			"hospitalizationsever": "173,344",


			"date": "03/01/23",
			"info": "through 12:00pm 02/28/2023",

			"testingaverage": "17,733",

			"peopletested": "12,942,035",

			"positivity": "6.19%",

			"hospitalizations": "633",
			"datehospitalizations": "2/28/23"

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



