$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,253,323",


			"death": "32,604",


			"dailycount": "8,091",


			"dailydeath": "20",
			"hospitalizationsever": "144,905",


			"date": "07/22",
			"info": "through 12:00pm 07/21/2022",

			"testingaverage": "47,161",

			"peopletested": "12,297,229",

			"positivity": "15.71%",

			"hospitalizations": "1,247",
			"datehospitalizations": "07/21"

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



