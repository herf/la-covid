$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,442,653",


			"death": "33,497",

			"dailycount": "1,520",


			"dailydeath": "14",
			"hospitalizationsever": "154,856",


			"date": "9/20",
			"info": "through 12:00pm 9/19/2022",

			"testingaverage": "35,373",

			"peopletested": "12,533,718",

			"positivity": "5.15%",

			"hospitalizations": "633",
			"datehospitalizations": "9/19"

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



