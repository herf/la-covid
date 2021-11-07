$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,502,676",



			"death": "26,750",


			"dailycount": "1,153",



			"dailydeath": "10",



			"date": "11/07",
			"info": "through 6:00pm 11/06/2021",


			"testingaverage": "139,443",


			"peopletested": "9,160,677",

			"positivity": "0.99%",

			"hospitalizations": "660",
			"datehospitalizations": "11/05" 
 

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



