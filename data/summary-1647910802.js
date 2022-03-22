$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,825,423",


			"death": "31,491",


			"dailycount": "370",


			"dailydeath": "29",



			"date": "03/21",
			"info": "through 6:00pm 03/20/2022",

			"testingaverage": "115,627",

			"peopletested": "11,615,389",

			"positivity": "0.68%",

			"hospitalizations": "404",
			"datehospitalizations": "03/20"

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



