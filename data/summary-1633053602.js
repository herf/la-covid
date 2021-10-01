$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,459,182",



			"death": "26,106",



			"dailycount": "1,535",



			"dailydeath": "28",


			"date": "09/30",
			"info": "through 6:00pm 09/29/2021",

			"testingaverage": "136,188",

			"peopletested": "8,639,394",

			"positivity": "1.21%",

			"hospitalizations": "871",
			"datehospitalizations": "09/28"



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



