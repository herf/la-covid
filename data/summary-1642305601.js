$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "2,213,664",



			"death": "28,008",


			"dailycount": "41,765",


			"dailydeath": "66",

			"date": "01/15",
			"info": "through 6:00pm 01/14/2022",

			"testingaverage": "238,633",


			"peopletested": "10,580,758",

			"positivity": "20.86%",


			"hospitalizations": "4,386",
			"datehospitalizations": "01/14"


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



