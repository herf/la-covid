$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,538,451",



			"death": "27,262",



			"dailycount": "941",



			"dailydeath": "15",

			"date": "12/07",
			"info": "through 6:00pm 12/06/2021",


			"testingaverage": "104,535",


			"peopletested": "9,522,717 ",

			"positivity": "1.24%",

			"hospitalizations": "629",
			"datehospitalizations": "12/05"

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



