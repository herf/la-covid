$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,698,481",


			"death": "35,614",

			"dailycount": "1,419",


			"dailydeath": "11",
			"hospitalizationsever": "172,546",


			"date": "02/22/23",
			"info": "through 12:00pm 02/21/2023",

			"testingaverage": "17,758",

			"peopletested": "12,928,874",

			"positivity": "6.09%",

			"hospitalizations": "698",
			"datehospitalizations": "2/21/23"

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



