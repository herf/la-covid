$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,148,370",


			"death": "32,385",


			"dailycount": "4,879",


			"dailydeath": "14",
			"hospitalizationsever": "142,346",


			"date": "07/06",
			"info": "through 12:00pm 07/05/2022",

			"testingaverage": "47,518",

			"peopletested": "12,204,988",

			"positivity": "12.69%",

			"hospitalizations": "920",
			"datehospitalizations": "07/04"

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



