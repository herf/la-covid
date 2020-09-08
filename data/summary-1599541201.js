$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "248,821",
				            "death": "6,030" ,
				            "dailycount": "494",
				            "dailydeath": "25" ,
				            "date":"09/07" ,
				            "info":"through 8:00pm 09/06/2020" ,
				            
							"testingaverage":"12,286" ,
							"peopletested":"2,380,238" ,
							"positivity":"4.4%" ,
							"hospitalizations":"943" , 
							                
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



