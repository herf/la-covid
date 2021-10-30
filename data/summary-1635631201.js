$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,492,106",



			"death": "26,628",


			"dailycount": "1,432",



			"dailydeath": "14",



			"date": "10/30",
			"info": "through 6:00pm 10/29/2021",


			"testingaverage": "140,488",


			"peopletested": "9,047,544",

			"positivity": "0.80%",

			"hospitalizations": "630",
			"datehospitalizations": "10/28" 
 

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



