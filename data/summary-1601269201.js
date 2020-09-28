$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "267,801",
				            "death": "6,514" ,
				            "dailycount": "815",
				            "dailydeath": "10" ,
				            "date":"09/27" ,
				            "info":"through 8:00pm 09/26/2020" ,
				            
							"testingaverage":"12,263" ,
							"peopletested":"2,636,153" ,
							"positivity":"3%" ,
							"hospitalizations":"692" 							
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



