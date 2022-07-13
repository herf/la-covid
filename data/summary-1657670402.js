$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,183,359",


			"death": "32,464",


			"dailycount": "5,170",


			"dailydeath": "14",
			"hospitalizationsever": "143,091",


			"date": "07/12",
			"info": "through 12:00pm 07/11/2022",

			"testingaverage": "40,772",

			"peopletested": "12,238,563",

			"positivity": "14.48%",

			"hospitalizations": "1,153",
			"datehospitalizations": "07/11"

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



