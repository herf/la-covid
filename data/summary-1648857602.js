$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,834,317",


			"death": "31,683",


			"dailycount": "1,167",


			"dailydeath": "16",



			"date": "04/01",
			"info": "through 6:00pm 03/31/2022",

			"testingaverage": "109,630",

			"peopletested": "11,697,120",

			"positivity": "0.71%",

			"hospitalizations": "287",
			"datehospitalizations": "03/31"

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



