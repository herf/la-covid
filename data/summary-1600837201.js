$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "262,133",
				            "death": "6,401" ,
				            "dailycount": "810",
				            "dailydeath": "40" ,
				            "date":"09/22" ,
				            "info":"through 8:00pm 09/21/2020" ,
				            
							"testingaverage":"11,984" ,
							"peopletested":"2,562,453" ,
							"positivity":"2.9%" ,
							"hospitalizations":"745" 							
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



