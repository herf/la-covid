$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,628,357	",


			"death": "34,643",

			"dailycount": "3,968	",


			"dailydeath": "25",
			"hospitalizationsever": "166,115",


			"date": "12/29",
			"info": "through 12:00pm 12/28/2022",

			"testingaverage": "22,713",

			"peopletested": "12,818,799",

			"positivity": "11.66%",

			"hospitalizations": "1,269",
			"datehospitalizations": "12/28"

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



