$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,808,409",

			"death": "31,178",

			"dailycount": "1,372",

			"dailydeath": "40",


			"date": "03/10",
			"info": "through 6:00pm 03/09/2022",

			"testingaverage": "129,143",

			"peopletested": "11,516,128",

			"positivity": "1.03%",

			"hospitalizations": "632",
			"datehospitalizations": "03/09"

				}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
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



