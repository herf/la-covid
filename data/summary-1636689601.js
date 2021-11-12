$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,507,736",




			"death": "26,814",



			"dailycount": "1,441",




			"dailydeath": "18",



			"date": "11/11",
			"info": "through 6:00pm 11/10/2021",


			"testingaverage": "129,638",


			"peopletested": "9,207,502",

			"positivity": "1.11%",

			"hospitalizations": "617",
			"datehospitalizations": "11/09"



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



