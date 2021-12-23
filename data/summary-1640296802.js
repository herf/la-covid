$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,585,313",



			"death": "27,512",



			"dailycount": "8,633",



			"dailydeath": "24",

			"date": "12/23",
			"info": "through 6:00pm 12/22/2021",


			"testingaverage": "138,070",


			"peopletested": "9,881,867",

			"positivity": "1.88%",

			"hospitalizations": "770",
			"datehospitalizations": "12/21"

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



