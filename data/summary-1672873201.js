$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,640,865",


			"death": "34,756",

			"dailycount": "2,138",


			"dailydeath": "26",
			"hospitalizationsever": "166,774",


			"date": "01/04/23",
			"info": "through 12:00pm 01/03/2023",

			"testingaverage": "17,242",

			"peopletested": "12,831,338",

			"positivity": "14.69%",

			"hospitalizations": "1,262",
			"datehospitalizations": "01/03/23"

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



