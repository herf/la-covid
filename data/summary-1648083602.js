$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,826,928",


			"death": "31,535",


			"dailycount": "714",


			"dailydeath": "27",



			"date": "03/23",
			"info": "through 6:00pm 03/22/2022",

			"testingaverage": "113,623",

			"peopletested": "11,627,319",

			"positivity": "0.64%",

			"hospitalizations": "378",
			"datehospitalizations": "03/22"

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



