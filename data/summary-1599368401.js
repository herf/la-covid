$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "247,542",
				            "death": "6,000" ,
				            "dailycount": "1,196",
				            "dailydeath": "24" ,
				            "date":"09/05" ,
				            "info":"through 8:00pm 09/04/2020" ,
				            
							"testingaverage":"12,512" ,
							"peopletested":"2,360,795" ,
							"positivity":"4.7%" ,
							"hospitalizations":"984" , 
							                
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



