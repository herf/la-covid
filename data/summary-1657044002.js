$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,140,615",


			"death": "32,361",


			"dailycount": "3,528",


			"dailydeath": "3",
			"hospitalizationsever": "142,048",


			"date": "07/04",
			"info": "through 12:00pm 07/03/2022",

			"testingaverage": "49,560",

			"peopletested": "12,200,233",

			"positivity": "11.68%",

			"hospitalizations": "810",
			"datehospitalizations": "07/03"

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



