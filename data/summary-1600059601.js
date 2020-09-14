$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "253,985",
				            "death": "6,208" ,
				            "dailycount": "816",
				            "dailydeath": "11" ,
				            "date":"09/13" ,
				            "info":"through 8:00pm 09/12/2020" ,
				            
							"testingaverage":"11,245" ,
							"peopletested":"2,448,521" ,
							"positivity":"3.4%" ,
							"hospitalizations":"793" , 
							                
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



