$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,496,593",



			"death": "26,683",


			"dailycount": "1,605",



			"dailydeath": "22",



			"date": "11/03",
			"info": "through 6:00pm 11/02/2021",


			"testingaverage": "136,290",


			"peopletested": "9,086,498",

			"positivity": "0.84%",

			"hospitalizations": "653",
			"datehospitalizations": "11/01" 
 

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



