$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,659,414",

			"death": "28,963",

			"dailycount": "10,715",

			"dailydeath": "40",

			"date": "01/31",
			"info": "through 6:00pm 01/30/2022",

			"testingaverage": "226,877",

			"peopletested": "11,067,071",

			"positivity": "13.20%",

			"hospitalizations": "3,720",
			"datehospitalizations": "01/30"
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



