$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "133,549",
				            "death": "3,809" ,
				            "dailycount": "3,322",
				            "dailydeath": "18" ,
				            "date":"07/12" ,
				            "info":"through 8:00pm 07/11/2020" ,
				            
							"testingaverage":"17,098" ,
							"peopletested":"1,336,681" ,
							"positivity":"8.8%" ,
							"hospitalizations":"2,093" ,                    
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



