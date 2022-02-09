$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,735,688",


			"death": "29,506",


			"dailycount": "4,198",

			"dailydeath": "51",

			"date": "02/08",
			"info": "through 6:00pm 02/07/2022",

			"testingaverage": "174,092",

			"peopletested": "11,202,964",

			"positivity": "7.70%",

			"hospitalizations": "2,702",
			"datehospitalizations": "02/07"

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



