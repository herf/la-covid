$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,504,843",



			"death": "26,762",


			"dailycount": "1,174",



			"dailydeath": "11",



			"date": "11/09",
			"info": "through 6:00pm 11/08/2021",


			"testingaverage": "128,832",


			"peopletested": "9,178,095",

			"positivity": "1.08%",

			"hospitalizations": "630",
			"datehospitalizations": "11/07" 
 

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



