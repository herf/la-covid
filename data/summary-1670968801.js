$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,587,829",


			"death": "34,352",

			"dailycount": "1,934",


			"dailydeath": "18",
			"hospitalizationsever": "163,149",


			"date": "12/13",
			"info": "through 12:00pm 12/12/2022",

			"testingaverage": "32,608",

			"peopletested": "12,774,546",

			"positivity": "12.03%",

			"hospitalizations": "1,267",
			"datehospitalizations": "12/12"

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



