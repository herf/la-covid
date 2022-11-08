$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,497,583",


			"death": "34,023",

			"dailycount": "1,433",


			"dailydeath": "8",
			"hospitalizationsever": "158,597",


			"date": "11/08",
			"info": "through 12:00pm 11/07/2022",

			"testingaverage": "26,416",

			"peopletested": "12,663,597",

			"positivity": "4.35%",

			"hospitalizations": "440",
			"datehospitalizations": "11/07"

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



