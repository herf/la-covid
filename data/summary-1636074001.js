$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,498,393",



			"death": "26,695",


			"dailycount": "1,829",



			"dailydeath": "12",



			"date": "11/04",
			"info": "through 6:00pm 11/03/2021",


			"testingaverage": "140,140",


			"peopletested": "9,109,069",

			"positivity": "0.95%",

			"hospitalizations": "662",
			"datehospitalizations": "11/02" 
 

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



