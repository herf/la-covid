$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,708,022",


			"death": "35,734",

			"dailycount": "1,343",


			"dailydeath": "14",
			"hospitalizationsever": "173,616",


			"date": "03/03/23",
			"info": "through 12:00pm 03/02/2023",

			"testingaverage": "17,970",

			"peopletested": "12,946,544",

			"positivity": "5.86%",

			"hospitalizations": "658",
			"datehospitalizations": "3/2/23"

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



