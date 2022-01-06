$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,806,828",




			"death": "27,698",




			"dailycount": "26,754",




			"dailydeath": "27",

			"date": "01/05",
			"info": "through 6:00pm 01/04/2022",


			"testingaverage": "96,939",


			"peopletested": "10,159,295",

			"positivity": "20.14%",

			"hospitalizations": "2,240",
			"datehospitalizations": "01/03"

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



