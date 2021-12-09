$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,541,886",



			"death": "27,288",



			"dailycount": "1,718",



			"dailydeath": "15",

			"date": "12/09",
			"info": "through 6:00pm 12/08/2021",


			"testingaverage": "153,207",


			"peopletested": "9,550,794",

			"positivity": "1.08%",

			"hospitalizations": "667",
			"datehospitalizations": "12/07"

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



