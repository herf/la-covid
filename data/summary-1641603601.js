$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,887,526",




			"death": "27,756",




			"dailycount": "43,712",




			"dailydeath": "28",

			"date": "01/07",
			"info": "through 6:00pm 01/06/2022",


			"testingaverage": "106,670",


			"peopletested": "10,235,349",

			"positivity": "22.56%",

			"hospitalizations": "2,661",
			"datehospitalizations": "01/05"

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



