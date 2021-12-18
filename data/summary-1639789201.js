$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,556,685",



			"death": "27,413",



			"dailycount": "3,360",



			"dailydeath": "27",

			"date": "12/17",
			"info": "through 6:00pm 12/16/2021",


			"testingaverage": "153,912",


			"peopletested": "9,720,714",

			"positivity": "1.17%",

			"hospitalizations": "772",
			"datehospitalizations": "12/15"

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



