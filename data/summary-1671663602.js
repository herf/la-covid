$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,609,228",


			"death": "34,515",

			"dailycount": "3,080",


			"dailydeath": "23",
			"hospitalizationsever": "164,869",


			"date": "12/21",
			"info": "through 12:00pm 12/20/2022",

			"testingaverage": "29,677",

			"peopletested": "12,798,870",

			"positivity": "10.54%",

			"hospitalizations": "1,274",
			"datehospitalizations": "12/20"

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



