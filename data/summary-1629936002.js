$( document ).ready(function() {
    var data = {
				    "content": { 

							"count": "1,391,363",

							"death": "25,150",



							"dailycount": "3,322",


							"dailydeath": "36",
							"date": "08/25",
							"info": "through 6:00pm 08/24/2021",


							"testingaverage": "125,154",

							"peopletested": "7,983,130",

							"positivity": "3.08%",
							"hospitalizations": "1,747"


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
				$('#dte_3').html(content.date);
				$('#cse').html(content.info);	
			
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



