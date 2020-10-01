$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "270,299",
				            "death": "6,576" ,
				            "dailycount": "1,063",
				            "dailydeath": "30" ,
				            "date":"09/30" ,
				            "info":"through 8:00pm 09/29/2020" ,
				            
							"testingaverage":"12,478" ,
							"peopletested":"2,662,203" ,
							"positivity":"3%" ,
							"hospitalizations":"734" 							
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



