$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,430,358",


			"death": "33,385",


			"dailycount": "4,544",


			"dailydeath": "37",
			"hospitalizationsever": "154,083",


			"date": "9/12",
			"info": "through 12:00pm 9/11/2022",

			"testingaverage": "30,113",

			"peopletested": "12,508,886",

			"positivity": "6.74%",

			"hospitalizations": "771",
			"datehospitalizations": "9/9"

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



