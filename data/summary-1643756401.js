$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,668,094",

			"death": "28,998",

			"dailycount": "8,786",

			"dailydeath": "37",

			"date": "02/01",
			"info": "through 6:00pm 01/31/2022",

			"testingaverage": "210,924",

			"peopletested": "11,074,007",

			"positivity": "12.47%",

			"hospitalizations": "3,710",
			"datehospitalizations": "01/31"
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



