$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,837,430",


			"death": "31,722",


			"dailycount": "708",


			"dailydeath": "12",



			"date": "04/05",
			"info": "through 6:00pm 04/04/2022",

			"testingaverage": "101,447",

			"peopletested": "11,718,529",

			"positivity": "0.80%",

			"hospitalizations": "297",
			"datehospitalizations": "04/04"

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



