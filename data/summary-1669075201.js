$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,520,094",


			"death": "34,118",

			"dailycount": "1,506",


			"dailydeath": "5",
			"hospitalizationsever": "159,836",


			"date": "11/21",
			"info": "through 12:00pm 11/20/2022",

			"testingaverage": "27,497",

			"peopletested": "12,701,676",

			"positivity": "6.07%",

			"hospitalizations": "670",
			"datehospitalizations": "11/18"

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



