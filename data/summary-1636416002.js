$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,503,664",



			"death": "26,752",


			"dailycount": "996",



			"dailydeath": "4",



			"date": "11/08",
			"info": "through 6:00pm 11/07/2021",


			"testingaverage": "130,357",


			"peopletested": "9,170,569",

			"positivity": "1.07%",

			"hospitalizations": "655",
			"datehospitalizations": "11/06" 
 

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



