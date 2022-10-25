$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,482,181",


			"death": "33,924",

			"dailycount": "980",


			"dailydeath": "9",
			"hospitalizationsever": "157,446",


			"date": "10/25",
			"info": "through 12:00pm 10/24/2022",

			"testingaverage": "26,555",

			"peopletested": "12,628,107",

			"positivity": "3.64%",

			"hospitalizations": "375",
			"datehospitalizations": "10/24"

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



