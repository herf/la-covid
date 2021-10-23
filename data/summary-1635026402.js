$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,484,192",



			"death": "26,540",


			"dailycount": "1,173",



			"dailydeath": "15",



			"date": "10/23",
			"info": "through 6:00pm 10/22/2021",


			"testingaverage": "144,218",


			"peopletested": "8,970,157",

			"positivity": "0.80%",

			"hospitalizations": "621",
			"datehospitalizations": "10/21" 
 

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



