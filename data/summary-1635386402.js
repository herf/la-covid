$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,487,502",



			"death": "26,578",


			"dailycount": "909",



			"dailydeath": "11",



			"date": "10/27",
			"info": "through 6:00pm 10/26/2021",


			"testingaverage": "143,988",


			"peopletested": "9,009,797",

			"positivity": "0.81%",

			"hospitalizations": "650",
			"datehospitalizations": "10/25" 
 

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



