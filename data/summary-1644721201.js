$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,757,058",

			"death": "29,846",

			"dailycount": "4,760",

			"dailydeath": "84",

			"date": "02/12",
			"info": "through 6:00pm 02/11/2022",

			"testingaverage": "163,466",

			"peopletested": "11,257,689",

			"positivity": "5.55%",

			"hospitalizations": "2,211",
			"datehospitalizations": "02/11"


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



