$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,680,571",


			"death": "35,325",

			"dailycount": "1,417",


			"dailydeath": "19",
			"hospitalizationsever": "170,693",


			"date": "02/03/23",
			"info": "through 12:00pm 02/02/2023",

			"testingaverage": "21,068",

			"peopletested": "12,895,220",

			"positivity": "4.85%",

			"hospitalizations": "687",
			"datehospitalizations": "2/2/23"

				}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#hosp_1').html(content.hospitalizationsever);
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



