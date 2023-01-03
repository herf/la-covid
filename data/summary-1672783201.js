$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,638,639",


			"death": "34,730",

			"dailycount": "575",


			"dailydeath": "5",
			"hospitalizationsever": "166,762",


			"date": "01/03/23",
			"info": "through 12:00pm 01/02/2023",

			"testingaverage": "17,803",

			"peopletested": "12,829,494",

			"positivity": "14.07%",

			"hospitalizations": "1,270",
			"datehospitalizations": "12/30/22"

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



