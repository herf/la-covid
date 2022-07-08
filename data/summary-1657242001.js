$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,153,690",


			"death": "32,397",


			"dailycount": "5,316",


			"dailydeath": "13",
			"hospitalizationsever": "142,346",


			"date": "07/07",
			"info": "through 12:00pm 07/06/2022",

			"testingaverage": "47,518",

			"peopletested": "12,211,710",

			"positivity": "12.69%",

			"hospitalizations": "989",
			"datehospitalizations": "07/06"

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



