$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,475,930",


			"death": "33,875",

			"dailycount": "1,233",


			"dailydeath": "14",
			"hospitalizationsever": "157,426",


			"date": "10/20",
			"info": "through 12:00pm 10/19/2022",

			"testingaverage": "27,324",

			"peopletested": "12,614,624",

			"positivity": "3.83%",

			"hospitalizations": "399",
			"datehospitalizations": "10/19"

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



