$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,864,284",


			"death": "31,938",


			"dailycount": "1,069",


			"dailydeath": "2",


			"date": "04/25",
			"info": "through 6:00pm 04/24/2022",

			"testingaverage": "65,250",

			"peopletested": "11,826,865",

			"positivity": "2.12%",

			"hospitalizations": "230",
			"datehospitalizations": "04/24"

				}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
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



