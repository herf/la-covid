$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,752,398",


			"death": "29,764",


			"dailycount": "5,610",

			"dailydeath": "75",

			"date": "02/11",
			"info": "through 6:00pm 02/10/2022",

			"testingaverage": "165,656",

			"peopletested": "11,244,371",

			"positivity": "5.85%",

			"hospitalizations": "2,307",
			"datehospitalizations": "02/10"

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



