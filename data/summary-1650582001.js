$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,857,772",


			"death": "31,913",


			"dailycount": "2,123",


			"dailydeath": "13",


			"date": "04/21",
			"info": "through 6:00pm 04/20/2022",

			"testingaverage": "60,801",

			"peopletested": "11,804,804",

			"positivity": "1.97%",

			"hospitalizations": "224",
			"datehospitalizations": "04/20"

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



