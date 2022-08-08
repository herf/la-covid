$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,335,973",


			"death": "32,856",


			"dailycount": "2,174",


			"dailydeath": "4",
			"hospitalizationsever": "148,841",


			"date": "8/8",
			"info": "through 12:00pm 8/7/2022",

			"testingaverage": "40,423",

			"peopletested": "12,375,904",

			"positivity": "13.56%",

			"hospitalizations": "1,162",
			"datehospitalizations": "8/05"

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



