$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,577,685",


			"death": "34,296",

			"dailycount": "3,756",


			"dailydeath": "17",
			"hospitalizationsever": "162,287",


			"date": "12/9",
			"info": "through 12:00pm 12/8/2022",

			"testingaverage": "34,807",

			"peopletested": "12,761,505",

			"positivity": "12.22%",

			"hospitalizations": "1,243",
			"datehospitalizations": "12/8"

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



