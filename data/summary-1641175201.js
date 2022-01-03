$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,741,292",




			"death": "27,640",




			"dailycount": "44,753",




			"dailydeath": "4",

			"date": "01/02",
			"info": "through 6:00pm 01/01/2022",


			"testingaverage": "89,571",


			"peopletested": "10,097,391",

			"positivity": "12.30%",

			"hospitalizations": "1,628",
			"datehospitalizations": "12/31"

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



