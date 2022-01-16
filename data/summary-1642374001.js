$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "2,257,502",



			"death": "28,059",


			"dailycount": "43,883",


			"dailydeath": "53",

			"date": "01/16",
			"info": "through 6:00pm 01/15/2022",

			"testingaverage": "241,751",


			"peopletested": "10,630,166",

			"positivity": "20.91%",


			"hospitalizations": "4,507",
			"datehospitalizations": "01/15"


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



