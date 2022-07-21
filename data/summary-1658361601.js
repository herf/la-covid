$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,236,632",


			"death": "32,566",


			"dailycount": "6,450",


			"dailydeath": "18",
			"hospitalizationsever": "144,655",


			"date": "07/20",
			"info": "through 12:00pm 07/19/2022",

			"testingaverage": "46,866",

			"peopletested": "12,283,785",

			"positivity": "15.87%",

			"hospitalizations": "1,328",
			"datehospitalizations": "07/19"

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



