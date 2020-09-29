$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "268,455",
				            "death": "6,515" ,
				            "dailycount": "663",
				            "dailydeath": "1" ,
				            "date":"09/28" ,
				            "info":"through 8:00pm 09/27/2020" ,
				            
							"testingaverage":"12,406" ,
							"peopletested":"2,645,615" ,
							"positivity":"3%" ,
							"hospitalizations":"689" 							
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



